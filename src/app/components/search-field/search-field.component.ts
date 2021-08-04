import { Component, OnInit,DoCheck,EventEmitter,Output } from '@angular/core';
import { FetchDataService } from 'src/app/service/fetch-data.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit,DoCheck {

  @Output() keyUp:EventEmitter<string>=new EventEmitter<string>();

  isDarkModeEnabled:boolean;
  searchText:string="";

  constructor(private fetchData:FetchDataService) {
    this.isDarkModeEnabled=this.fetchData.isDarkModeEnable;
   }
  ngOnInit(): void {
  }

  ngDoCheck():void{
    this.isDarkModeEnabled=this.fetchData.isDarkModeEnable;
  }

  onKeyUp(){
    this.keyUp.emit(this.searchText);
  }
}
