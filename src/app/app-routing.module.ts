import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainDashComponent } from './main-dash/main-dash.component';

const routes: Routes = [
  //{ path: '', component: LandingPageComponent },
  { path: '', component: MainDashComponent },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
