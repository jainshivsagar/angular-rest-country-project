import { Component, OnInit,Input ,DoCheck} from '@angular/core';
import { Country } from 'src/app/Model/Country';
import { FetchDataService } from 'src/app/service/fetch-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit,DoCheck {

  @Input() country:Country;
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
