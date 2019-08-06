import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-protocol',
  templateUrl: './view-protocol.component.html',
  styleUrls: ['./view-protocol.component.scss']
})
export class ViewProtocolComponent implements OnInit {

  
  constructor(private router: Router) { }
  ngOnInit() {
  }
  generateRisk()
  {
    this.router.navigate(["About"]);
  }
}
