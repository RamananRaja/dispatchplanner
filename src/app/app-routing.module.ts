import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FOCreationComponent } from './Pages/focreation/focreation.component';
import { FOListComponent } from './Pages/folist/folist.component';
import { LoginFormComponent } from './Pages/login-form/login-form.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { SignupPageComponent } from './Pages/signup-page/signup-page.component';

const routes: Routes = [
  { path: 'login-form', component: LoginFormComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'signup-page', component: SignupPageComponent },
  { path: 'focreation', component: FOCreationComponent },
  { path: 'folist', component: FOListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
