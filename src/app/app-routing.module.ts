import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FOCreationComponent } from './Pages/focreation/focreation.component';
import { FOListComponent } from './Pages/folist/folist.component';
import { FPlanningS1Component } from './Pages/fplanning-s1/fplanning-s1.component';
import { FPlanningS2Component } from './Pages/fplanning-s2/fplanning-s2.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { SignupPageComponent } from './Pages/signup-page/signup-page.component';
import { FoviewComponent } from './Pages/foview/foview.component'

const routes: Routes = [
  { path: 'login-page', component: LoginPageComponent },
  { path: 'signup-page', component: SignupPageComponent },
  { path: 'focreation', component: FOCreationComponent },
  { path: 'folist', component: FOListComponent },
  { path: 'foview', component: FoviewComponent },
  { path: 'fplanning-s1', component: FPlanningS1Component },
  { path: 'fplanning-s2', component: FPlanningS2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
