import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient,HttpHeaders, HttpErrorResponse} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private HttpClient:HttpClient) { }

        private BASE_URL = 'http://127.0.0.1:8000';


        

    signup(data):Observable <any>{
    console.log('hiiiiiiiiiiiiiiiiiii',data);
    let url:string = `${this.BASE_URL}/signup/`;
    return  this.HttpClient.post(url,data);

  }

   login1(loginuser):Observable <any>{
    console.log('hiiiiiiiiiiiiiiiiiii',loginuser);
    let url:string = `${this.BASE_URL}/loginusers/`;
    return  this.HttpClient.post(url,loginuser);

  }
   getToken(){
    return localStorage.getItem('token');
  }
  addcourse(data):Observable <any>{
  console.log('hiiiiiiiiiiiiiiiiiii',data);
    let url:string = `${this.BASE_URL}/newcourse/`;
    return  this.HttpClient.post(url,data);

}

getcourses():Observable <any>{
    let url:string = `${this.BASE_URL}/getcourses/`;
    return  this.HttpClient.get(url);

}

addchapter(data):Observable <any>{
  console.log('hii',data);
    let url:string = `${this.BASE_URL}/newchapters/`;
    return  this.HttpClient.post(url,data);

}
getchapters():Observable <any>{
    let url:string = `${this.BASE_URL}/getchapters/`;
    return  this.HttpClient.get(url);

}
addtopic(data):Observable <any>{
  console.log('hii',data);
    let url:string = `${this.BASE_URL}/newtopic/`;
    return  this.HttpClient.post(url,data);

}
gettopics():Observable <any>{
    let url:string = `${this.BASE_URL}/gettopics/`;
    return  this.HttpClient.get(url);

}
}