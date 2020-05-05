import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { customer } from '/home/aditisingh/Desktop/Week8_Loopback(local)/FrontEnd/src/app/employee';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  public Customers=[];
  public custId;
  public addCustomerForm: FormGroup;
  public editCustomerForm: FormGroup;
  public Users={};
  public flagShow=false;
  public userId;

  constructor(private _employeeService: EmployeeService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.displayCustomer();

    this.addCustomerForm=this.fb.group(
      {
        name: [''],
        address: [''],
        description: ['']
      }
    ) 
    this.editCustomerForm=this.fb.group(
      {
        name: [''],
        address: [''],
        description: [''],
        c_id: [+'']
      }
    )   
  }

  displayCustomer()
  {
    localStorage.removeItem('editCustId');
    console.log("before", this.custId);
    this._employeeService.getCustomer()
      .subscribe(data => 
        this.Customers = data);
  }
  addCustomer()
  {
    localStorage.removeItem('editCustId');    
    this.custId=-1;
  }
  deleteCustomer(Customer: customer) {
    this._employeeService.deleteCustomers(Customer.c_id)
      .subscribe(data => {
        this.Customers = this.Customers.filter(u => u !== Customer);
      })
  }  
  editCustomer(Customer:customer): void 
  {   
    localStorage.removeItem('editCustId');
    
    localStorage.setItem('editCustId', Customer.c_id.toString());
    this.custId=+localStorage.getItem('editCustId');
  
    if(this.custId>0)
    {
      this._employeeService.getCustomerById(this.custId).subscribe(data=>
        {
           this.editCustomerForm.patchValue(data);
        })
      }     
  }
  onSave(){

    if(this.custId>0)
    {
    this._employeeService.updateCustomer(this.editCustomerForm.value).subscribe(data=>
      {
    localStorage.removeItem('editCustId');
    this.custId=+localStorage.getItem('editCustId');
      }),
      error =>{
        alert(error);
      }
    }
    else if(this.custId=='-1')
    {
      
    this._employeeService.createCustomer(this.addCustomerForm.value).subscribe(data=>
      {
    localStorage.removeItem('editCustId');
    this.custId=+localStorage.getItem('editCustId');
    this.displayCustomer();

      }),
      error =>{
        alert(error);
      }
    }
    this.displayCustomer();
  }
  onCancel()
  {
    localStorage.removeItem('editCustId');
    this.custId=+localStorage.getItem('editCustId');
  }
  showUsers(customer:customer)
  {
        const customername=customer.name;
        this.router.navigate([customername, 'list-emp'], {relativeTo: this.route});
  }
  get name()
  {
    return this.addCustomerForm.get('name');
  }
  get address()
  {
    return this.addCustomerForm.get('address');
  }
  get description()
  {
    return this.addCustomerForm.get('description');
  }
  

}
