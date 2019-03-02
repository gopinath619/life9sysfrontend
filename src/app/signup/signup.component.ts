import { Component, OnInit } from '@angular/core';
import  {LoginserviceService} from '../Services/loginservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
public model:any = {};
  constructor(private Loginservice:LoginserviceService) {}

  ngOnInit() {
  }


  public onSubmit(data){
  	console.log('@@@@@',data);
	this.Loginservice.signup(data).subscribe(data=>{
		console.log('@@@@@',data);
	});
}
}
