
import { Injectable,Injector } from '@angular/core';
import {HttpClient,HttpInterceptor} from '@angular/common/http'
import {LoginserviceService} from '../Services/loginservice.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptService implements HttpInterceptor{

  constructor(private injector:Injector) { }

  intercept(req,next){
  	let regservice=this.injector.get(LoginserviceService);
  

  	let tokenizedReq=req.clone({
  		setHeaders:{
  			Authorization:`${regservice.getToken()}`
  		}
  	})
  	return next.handle(tokenizedReq)
  }
}





