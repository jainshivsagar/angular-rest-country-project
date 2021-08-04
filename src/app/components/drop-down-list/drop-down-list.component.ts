import { Component, OnInit, DoCheck,Output,EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {startWith,map} from 'rxjs/operators';
import { FetchDataService } from 'src/app/service/fetch-data.service';


@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.css']
})
export class DropDownListComponent implements OnInit,DoCheck {

  @Output() optionSelection:EventEmitter<string>=new EventEmitter<string>();
  @Output() keyUp:EventEmitter<string>=new EventEmitter<string>();

  options:string[]=[];
  filteredOptions: Observable<string[]>;
  myControl:FormControl=new FormControl;

  isDarkModeEnabled:boolean;
  constructor(private fetchData:FetchDataService) {
    this.options=[
      'Africa',
      'Asia',
      'Americas',
      'Europe',
      'Oceania',
      'Polar',
      ];

      this.filteredOptions=new Observable<string[]>();

      this.isDarkModeEnabled=this.fetchData.isDarkModeEnable;
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map((val:string) => this.filter(val))
      );
  }

  ngDoCheck():void{
    this.isDarkModeEnabled=this.fetchData.isDarkModeEnable;
  }
  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  onOptionSelection(value:string):void{
    this.optionSelection.emit(value);
  }
  onKeyUp(e:any){
    this.keyUp.emit(e.target.value);
  }
}
