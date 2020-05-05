import { Injectable } from '@angular/core';
import { employee,role,customer } from '/home/aditisingh/Desktop/Angular_practice/reactive-forms/src/app/employee';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl:string="http://localhost:3000";
  constructor(private http: HttpClient) { }

  getEmployees (): Observable<employee[]> {
    return this.http.get<employee[]>(this.baseUrl+'/employees')
  }
  getRole (): Observable<role[]>{
    return this.http.get<role[]>(this.baseUrl+'/roles')
  }
  getCustomer():Observable<customer[]>{
    return this.http.get<customer[]>(this.baseUrl+'/customers')
  } 
  getEmployeesCustomer(id:number){
    return this.http.get(this.baseUrl+'/employees/'+id+'/customers')
  } 
  deleteEmployees(id: number) {  
    return this.http.delete<employee[]>(this.baseUrl + '/employees/' + id);  
  } 
  deleteCustomers(id: number) {  
    return this.http.delete<customer[]>(this.baseUrl + '/customers/' + id);  
  }  
  createUser(employee: employee) {  
    return this.http.post(this.baseUrl+ '/employees', employee);  
  } 
  createCustomer(customer: customer) {  
    return this.http.post(this.baseUrl+ '/customers', customer);  
  }   
  updateEmployee(employee: employee) {  
    return this.http.put(this.baseUrl+'/employees/'+employee.id, employee);  
  }
  updateCustomer (customer: customer)
  {
    return this.http.put(this.baseUrl+'/customers/'+customer.c_id, customer); 
  }
  getEmployeeById(id: number) {  
    return this.http.get<employee>(this.baseUrl + '/employees/' + id);  
  }   
  getCustomerById(id: number) {  
    return this.http.get<customer>(this.baseUrl + '/customers/' + id);  
  }  
  getCustomerEmployee(id:number){
    return this.http.get(this.baseUrl+'/customers/'+id+'/employees')
  }
}
