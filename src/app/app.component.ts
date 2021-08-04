import { Component, OnInit,DoCheck} from '@angular/core';
import { FetchDataService } from './service/fetch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,DoCheck  {

  isDarkModeEnabled:boolean;
  private html:any;
  private body:any;
  constructor(private fetchData:FetchDataService) {
    this.fetchData.loadSettings();
    this.isDarkModeEnabled=this.fetchData.isDarkModeEnable;
   }
  ngOnInit(): void {
    this.html=document.querySelector('html')!;
    this.body=document.querySelector('body')!;
  }

  ngDoCheck():void{
    this.isDarkModeEnabled=this.fetchData.isDarkModeEnable;

    if(this.isDarkModeEnabled){
      this.html.classList.add('dark-mode');
      this.body.classList.add('dark-mode');
    }else{
      this.html.classList.remove('dark-mode');
      this.body.classList.remove('dark-mode');
    }

  }

}
