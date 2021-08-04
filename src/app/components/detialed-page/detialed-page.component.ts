import { Input } from '@angular/core';
import { Component, OnInit,DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {faLongArrowAltLeft} from '@fortawesome/free-solid-svg-icons'
import { Country } from 'src/app/Model/Country';
import { FetchDataService } from 'src/app/service/fetch-data.service';
@Component({
  selector: 'app-detialed-page',
  templateUrl: './detialed-page.component.html',
  styleUrls: ['./detialed-page.component.css']
})
export class DetialedPageComponent implements OnInit,DoCheck {

  @Input() country:Country;
  faLongArrowLeft=faLongArrowAltLeft;
  name:string="";
  isDarkModeEnabled:boolean;

  constructor(private fetchData:FetchDataService, private route:ActivatedRoute,private router:Router) {
    this.country={
      name: "",
      topLevelDomain:[],
      alpha2Code: "",
      alpha3Code: "",
      callingCodes:[],
      capital: "",
      altSpellings:[],
      region: "",
      subregion: "",
      population: 0,
      latlng:[],
      demonym: "",
      area: 0,
      gini: 0,
      timezones:[],
      borders: [],
      nativeName: "",
      numericCode: "",
      currencies: [],
      languages: [],
      translations:{
        de: "",
        es: "",
        fr: "",
        ja: "",
        it: "",
        br: "",
        pt: "",
        nl: "",
        hr: "",
        fa: "",},
      flag: "",
      regionalBlocs:[],
      cioc: "",
    }
    this.isDarkModeEnabled=this.fetchData.isDarkModeEnable;
  }

  ngOnInit(): void {
    this.name=this.route.snapshot.paramMap.get('name')!;
    if(this.name.length>3){
      this.fetchData.fetchCountryByName(this.name)
                    .subscribe((data) => { this.country=data[0]; },
                              error => { console.log(error); }
                    );
    }else{
      this.fetchData.fetchCountryByCodeName(this.name)
                    .subscribe((data) => { this.country=data; },
                              error => { console.log(error); }
                    );
    }
  }
  ngDoCheck():void{
    this.isDarkModeEnabled=this.fetchData.isDarkModeEnable;
  }
  navigateToUrl(url:string){
    this.router.navigateByUrl('/country/'+url)
    .then((e)=>{
      window.location.reload();
    });
  }

  back(e:any):void{
    e.preventDefault();
    window.history.back();
    setTimeout(()=>{
      window.location.reload();
    },100);
  }
}
