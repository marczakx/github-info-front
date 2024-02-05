import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../service/login.service';
import { CdkDrag } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    CdkDrag
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  hide = true;

  constructor(private _snackBar: MatSnackBar, private _auth: LoginService) {}

  login (username: string, password: string){
    this._auth.login(username, password).subscribe({
      next: data => {
        this._auth.saveToken(data.token)
        this._snackBar.open(
          "Logged in as " + username, 
          'close' ,
          { panelClass: 'success-snackbar' }
        )
      }, 
      error: err => {
        this._auth.cleanToken()
        this._snackBar.open(
          'Login failed',
          'close',
          { panelClass: 'error-snackbar' }
        );
      }
    })
  }
}
