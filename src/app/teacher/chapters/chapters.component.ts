import { Component, OnInit } from '@angular/core';
import  {LoginserviceService} from '../../Services/loginservice.service';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {
public user:any={};

  constructor(private Loginservice:LoginserviceService) { }

  ngOnInit() {
  	this.getallcourse();
  }
  public courselist;
getallcourse(){

	this.Loginservice.getcourses().subscribe(data=>{
		console.log('Courses List',data);
		this.courselist=data;
	});
}

onSubmit(data){
	console.log("my course is",data);
	// let cours = {name:course }
	this.Loginservice.addchapter(data).subscribe(data=>{
		console.log('@@@@@',data);
	});
}
}
