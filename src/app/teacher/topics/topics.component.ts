import { Component, OnInit } from '@angular/core';
import  {LoginserviceService} from '../../Services/loginservice.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  constructor(private Loginservice:LoginserviceService) { }

  ngOnInit() {
  	this.getallchapters();
  }
  public chapterlist:any=[];
  public user:any={};

getallchapters(){

	this.Loginservice.getchapters().subscribe(data=>{
		console.log('Courses List',data);
		this.chapterlist=data;
		console.log("chapters list is",this.chapterlist);
		
	});
}

onSubmit(data){
	console.log("my course is",data);
	this.Loginservice.addtopic(data).subscribe(data=>{
		console.log('@@@@@',data);
	});
}

}
