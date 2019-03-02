import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './signup/signup.component';
import {FormsModule} from '@angular/forms';

import {TokenInterceptService} from './Services/token-intercept.service';
import {LoginserviceService} from './Services/loginservice.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule,
  ],
   providers: [LoginserviceService,{

      provide:HTTP_INTERCEPTORS,useClass:TokenInterceptService,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
