import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FetchDataService } from './service/fetch-data.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { DropDownListComponent } from './components/drop-down-list/drop-down-list.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DetialedPageComponent } from './components/detialed-page/detialed-page.component';
import { CardComponent } from './components/card/card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';



import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SearchBarComponent,
    DropDownListComponent,
    SearchFieldComponent,
    HomePageComponent,
    DetialedPageComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [FetchDataService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
