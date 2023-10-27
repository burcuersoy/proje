import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ProfileemployeeComponent } from './profileemployee/profileemployee/profileemployee.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminComponent },
  {path: 'profile', component: ProfileComponent},
  { path: 'employee', component: ProfileemployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
