import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Country } from '../Model/Country';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  countryList:Country[]=[];
  isDarkModeEnable:boolean=false;
  message:string="";
  baseUrl:string="https://restcountries.eu/rest/v2/";

  constructor(public http: HttpClient) {
   }

   //Get All Country Data
  public fetchData():void{
    this.message="Loading Data..."
    this.http.get<Country[]>(this.baseUrl+'all/')
                    .subscribe(data => {
                        this.countryList= data;
                        this.message=this.countryList.length>0?"":"Data Not Found";
                      },
                      error => {
                        console.log(error);
                        this.message="Error Occured";
                      }
                    );
  }
  public fetchCountryByName(name:string):Observable<Country[]>{
    return this.http.get<Country[]>(this.baseUrl+'name/'+name+'?fullText=true');
  }
  public fetchCountryByCodeName(code:string):Observable<Country>{
    return this.http.get<Country>(this.baseUrl+'alpha/'+code);
  }

  searchCountryByName(name:string):void{
    this.message="Loading Data..."
    this.http.get<Country[]>(this.baseUrl+'name/'+name)
              .subscribe(data=>{
                this.countryList=data;
                this.message=this.countryList.length>0?"":"Data Not Found";
              },
              error=>{
                console.log("Error",error);
                this.message="Error Occured";
              });
  }
  searchCountryByRegion(searchText:string,region:string){
    let temp:Country[];
    this.message="Loading Data...";
    temp=this.countryList.filter((country)=>{
      return country.region
                          .toLowerCase()
                          .includes(region.toLowerCase())
                          &&
             country.name.
                          toLowerCase()
                          .includes(searchText.toLowerCase())
                          ?
                          true
                          :
                          false;
    });
    this.countryList=temp;
    this.message=this.countryList.length>0?"":"Data Not Found";
  }
  loadSettings():void{
    if(localStorage){
      let x=localStorage.getItem("darkMode")!;
      let temp=typeof x!=='undefined'? JSON.parse(x):{darkMode:false};
      this.isDarkModeEnable=temp.darkMode;
    }
  }
  saveSetting():void{
    localStorage.setItem("darkMode",`{"darkMode":${this.isDarkModeEnable}}`);
  }
  toggleDarkMode():void{
    this.isDarkModeEnable=!this.isDarkModeEnable;
    this.saveSetting();
  }
}
