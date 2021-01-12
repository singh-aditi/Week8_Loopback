import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {EmployeeService} from './employee.service'
import { ReactiveFormsModule, FormGroup, FormsModule } from "@angular/forms";  
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { routingComponent } from "./app-routing/app-routing.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
