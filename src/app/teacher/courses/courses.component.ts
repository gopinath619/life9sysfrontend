import { Component, OnInit } from '@angular/core';
import  {LoginserviceService} from '../../Services/loginservice.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private Loginservice:LoginserviceService) { }

  ngOnInit() {
  }
submitcourse(course){
	console.log("my course is",course);
	let cours = {name:course }
	this.Loginservice.addcourse(cours).subscribe(data=>{
		console.log('@@@@@',data);
	});
}

}

