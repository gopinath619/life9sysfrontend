import { Component, OnInit } from '@angular/core';
import  {LoginserviceService} from '../Services/loginservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Loginservice:LoginserviceService,private router:Router) { }

  ngOnInit() {
  }
  public user:any={}
  public token;
  public error_message;
loginuser(data){
	console.log('-------------',data);
	this.Loginservice.login1(data).subscribe(data=>{
	console.log('@@@@@',data);
	if(data.role == 'Student'){
     this.token = data.token;
     localStorage.setItem('token', this.token,);
     localStorage.setItem('user', this.user,);
      this.router.navigate([`studentDashboard`]);
   
      
  } 
   else if(data.role == 'Teacher'){
     this.token = data.token;
     localStorage.setItem('token', this.token);
     localStorage.setItem('user',data['role']);
      this.router.navigate([`teacherDashboard`]);
     
      
  } 
   else {
      this.error_message = data;   
      } 
	});

}

  

}
