import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppbarComponent } from './appbar/appbar.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent,pathMatch: 'full'
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: '', component: LandingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
