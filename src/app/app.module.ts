import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './Pages/login-form/login-form.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { SignupPageComponent } from './Pages/signup-page/signup-page.component';
import { FOCreationComponent } from './Pages/focreation/focreation.component';
import { FOListComponent } from './Pages/folist/folist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginPageComponent,
    SignupPageComponent,
    FOCreationComponent,
    FOListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
