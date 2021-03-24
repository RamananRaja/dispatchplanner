import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { SignupPageComponent } from './Pages/signup-page/signup-page.component';
import { FOCreationComponent } from './Pages/focreation/focreation.component';
import { FOListComponent } from './Pages/folist/folist.component';
import { FPlanningS1Component } from './Pages/fplanning-s1/fplanning-s1.component';
import { FPlanningS2Component } from './Pages/fplanning-s2/fplanning-s2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    FOCreationComponent,
    FOListComponent,
    FPlanningS1Component,
    FPlanningS2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
