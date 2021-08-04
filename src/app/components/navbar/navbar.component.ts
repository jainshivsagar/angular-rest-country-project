import { Component, OnInit,DoCheck } from '@angular/core';
import {faMoon,faSun} from '@fortawesome/free-solid-svg-icons';
import { FetchDataService } from 'src/app/service/fetch-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,DoCheck{
  faMoon=faMoon;
  faSun=faSun;
  isDarkModeEnabled:boolean;

  constructor(private fetchData:FetchDataService) {
    this.isDarkModeEnabled=this.fetchData.isDarkModeEnable;
   }

  ngOnInit(): void {
  }

  ngDoCheck():void{
    this.isDarkModeEnabled=this.fetchData.isDarkModeEnable;
  }

  onToggle():void{
    this.fetchData.toggleDarkMode();
    this.isDarkModeEnabled=this.fetchData.isDarkModeEnable;
  }
}
