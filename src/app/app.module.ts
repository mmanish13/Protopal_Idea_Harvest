import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewProtocolComponent } from './view-protocol/view-protocol.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ActiveDraftProtocolComponent } from './active-draft-protocol/active-draft-protocol.component';
import { FindSimilarStudiesComponent } from './find-similar-studies/find-similar-studies.component';
import { UploadProtocolComponent } from './upload-protocol/upload-protocol.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { ProtomeasuresComponent } from './protomeasures/protomeasures.component';


const routes: Routes = [
  { path: 'viewProtocol', component: ViewProtocolComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Active-Draft-Protocol', component: ActiveDraftProtocolComponent },
  { path: 'Main', component: AppComponent },
  { path: 'Find-Similar-Studies', component: FindSimilarStudiesComponent },
  { path: 'Upload-Protocol', component: UploadProtocolComponent },
  { path: 'About', component: ProtomeasuresComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
  
];


@NgModule({
  declarations: [
    AppComponent,
    ViewProtocolComponent,
    LoginComponent,
    ActiveDraftProtocolComponent,
    FindSimilarStudiesComponent,
    UploadProtocolComponent,
    ProtomeasuresComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule,
     StorageServiceModule 
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
