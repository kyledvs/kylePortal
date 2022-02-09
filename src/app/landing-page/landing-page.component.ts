import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuthService } from '../services/angular-fire-auth.service';




@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {


  public userEmail = "kyle@suar.com"
  public userPassword = "test123"

  constructor(
    public authen: AngularFireAuthService
  ) { 
 
  }



  ngOnInit(
    
  ): void {
  }


  login() {
    this.authen.login(this.userEmail, this.userPassword);
    console.log(this.userEmail)
  }
  logout() {
    this.authen.logout();
  }

}
