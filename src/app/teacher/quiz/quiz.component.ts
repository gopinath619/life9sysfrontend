import { Component, OnInit } from '@angular/core';
import  {LoginserviceService} from '../../Services/loginservice.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private Loginservice:LoginserviceService) { }

  ngOnInit() {
  	this.getalltopics();
  }
  public chapterlist:any=[];
  public user:any={};

getalltopics(){

	this.Loginservice.gettopics().subscribe(data=>{
		console.log('topics List',data);
		this.chapterlist=data;
		console.log("toppics list is",this.chapterlist);
		
	});
}

}
