import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { uploadStatus } from './../upload-protocol/upload-protocol.component';


@Component({
  selector: 'app-active-draft-protocol',
  templateUrl: './active-draft-protocol.component.html',
  styleUrls: ['./active-draft-protocol.component.scss']
})
export class ActiveDraftProtocolComponent implements OnInit {
@Input() saveprotocol : boolean;
  

  constructor(private router: Router){}
  upload() : void {   
  
     this.router.navigate(["Upload-Protocol"]);         
  }


  ngOnInit() {
    
  }

}