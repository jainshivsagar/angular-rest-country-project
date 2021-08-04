import { Component, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/service/fetch-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  isOptionSelected:boolean=false;
  selectedRegion:string="";
  constructor(private fetchData:FetchDataService) { }

  ngOnInit(): void {
  }

  onKeyUp(searchText:string):void{
    if(this.isOptionSelected){
      searchText!==""?this.fetchData.searchCountryByRegion(searchText,this.selectedRegion):this.fetchData.fetchData();
    }else{
      searchText!==""?this.fetchData.searchCountryByName(searchText):this.fetchData.fetchData();
    }
  }

  onOptionSelection(value:string):void{
    this.isOptionSelected=true;
    this.selectedRegion=value;

  }
  onNoOptionSelected(value:string):void{
    this.isOptionSelected=value==="" ? false : this.isOptionSelected;
    this.selectedRegion=value;
    console.log(this.isOptionSelected)
  }
}
