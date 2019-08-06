import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router){}
  username: string;
  password: string;

  login() : void {
    console.log(this.username);
    console.log(this.password);
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["Active-Draft-Protocol"]);     
     
    }else {
      alert("Invalid credentials");
      this.password = "";
      this.username = "";
    }


}
}
