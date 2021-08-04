import { Component, OnInit,DoCheck } from '@angular/core';
import { FetchDataService } from 'src/app/service/fetch-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,DoCheck{

  isDarkModeEnabled:boolean;

  constructor(private fetchData:FetchDataService) {
    this.isDarkModeEnabled=this.fetchData.isDarkModeEnable;
   }
  ngOnInit(): void {
  }

  ngDoCheck():void{
    this.isDarkModeEnabled=this.fetchData.isDarkModeEnable;
  }
}
