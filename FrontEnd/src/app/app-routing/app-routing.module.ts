import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeDetailsComponent} from '/home/aditisingh/Desktop/Week8_Loopback(local)/FrontEnd/src/app/employee-details/employee-details.component'
import {AddEmpComponent} from '/home/aditisingh/Desktop/Week8_Loopback(local)/FrontEnd/src/app/add-emp/add-emp.component'
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


export const routes: Routes = [  
 { path: '', redirectTo: '/list-emp', pathMatch: 'full' }, //for empty path; redirectTo always works along with the pathMatch 
  { path: 'list-emp', component: EmployeeDetailsComponent },  
  { path: 'add-emp', component: AddEmpComponent } ,
  { path: 'list-cust', component: CustomerListComponent},
  { path: 'list-cust/:customername/list-emp', component: EmployeeDetailsComponent},
  { path: "**", component: PageNotFoundComponent} //wildacrd path if invalid url is enterred
]; 

@NgModule({
  imports: [  
    CommonModule,  
    RouterModule.forRoot(routes)  
  ],  
  exports: [RouterModule],  
  declarations: [] 
})
export class AppRoutingModule { }
export const routingComponent= [EmployeeDetailsComponent, AddEmpComponent, CustomerListComponent, PageNotFoundComponent];
