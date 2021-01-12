import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from "@angular/router";
import { employee } from '/home/aditisingh/Desktop/Week8_Loopback(local)/FrontEnd/src/app/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employees = [];
  public display: boolean = false;
  public Customers;
  public Users = {};
  public back=false;
  constructor(private _employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.getData();
  }
  getData() {
    this._employeeService.getEmployees()
      .subscribe(data => {
        this.employees = data;
        if (this.route.snapshot.paramMap.get('customername')) {
          console.log("123");
          this.back=true;
          const name = this.route.snapshot.paramMap.get('customername');
          this.employees = this.employees.filter(d =>
            d.customer.name == name)
        }
        console.log("1234567", this.employees);
      });
  }

  getCustomer(id: number) {
    this._employeeService.getEmployeesCustomer(id)
      .subscribe(data => {
        this.Customers = data;
        console.log("the customers name is", this.Customers.name);
        return this.Customers.name;
      })
  }

  addUser() {
    localStorage.removeItem('editEmpId');
    this.router.navigate(['add-emp']);
  }

  deleteEmp(employee: employee) {
    this._employeeService.deleteEmployees(employee.id)
      .subscribe(data => {
        this.employees = this.employees.filter(u => u !== employee);
      })
  }
  editEmp(employee: employee): void {
    this.display = true;
    localStorage.removeItem('editEmpId');
    localStorage.setItem('editEmpId', employee.id.toString());
    this.router.navigate(['add-emp']);
  }
}
