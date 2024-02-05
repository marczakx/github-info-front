import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgFor } from '@angular/common';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {Router} from "@angular/router"

import { GitClientService } from '../../service/git-client.service';
import { RepoView } from '../../model/repo.view.class';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatButtonModule, 
    MatIconModule, 
    MatExpansionModule, 
    NgFor, 
    CdkDrag,
    MatFormFieldModule,
    MatInputModule,
    ],
  templateUrl: './repos.component.html',
  styleUrl: './repos.component.scss'
})
export class ReposComponent {
  constructor (private _snackBar: MatSnackBar, private _client: GitClientService, private _router: Router ){}
  title = 'GitHub info';
  data: RepoView[]=  [];

  repos(user:string){
    this._client.repos(user).subscribe({
      next: data => {
        this.data = data
        this._snackBar.open(
          'Data downloaded for user ' + user, 
          'ok' ,
          { panelClass: 'success-snackbar' }
        )
      },
      error: err => {
        this._snackBar.open(
          'Failed', 'close',
          { panelClass: 'error-snackbar' }
        );
        this._router.navigate(['/login']);
      }
    })
  }
}
