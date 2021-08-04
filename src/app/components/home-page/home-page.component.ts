import { Component, OnInit,DoCheck } from '@angular/core';
import { Country } from 'src/app/Model/Country';
import { FetchDataService } from 'src/app/service/fetch-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit,DoCheck {

  countryList:Country[];
  message:string="";

  constructor(private fetchData:FetchDataService) {
    this.countryList=[];

    this.fetchData.fetchData();
    this.countryList=this.fetchData.countryList;
    this.message=this.fetchData.message;
  }

  ngOnInit(): void {
  }

  ngDoCheck():void{
    this.countryList=this.fetchData.countryList;
    this.message=this.fetchData.message;
  }
}
