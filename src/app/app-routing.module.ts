import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetialedPageComponent } from './components/detialed-page/detialed-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {
    path:"",
    component:HomePageComponent
  },
  {
    path:"country/:name",
    component:DetialedPageComponent
  },
  {
    path:"**",
    redirectTo:""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
