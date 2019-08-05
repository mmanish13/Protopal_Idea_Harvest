import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router){}
  title = 'mainapp';
  username: string;
password: string;

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     //this.router.navigate(["user"]);
     alert("Valid credentials");
    }else {
      alert("Invalid credentials");
    }
  }
  }

