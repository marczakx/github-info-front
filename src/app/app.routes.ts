import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ReposComponent } from './components/repos/repos.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'repos', component: ReposComponent }
];
