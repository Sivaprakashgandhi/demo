import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../i-employee';
import { SEmployeeService } from '../s-employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: IEmployee[]=[];
  constructor(private empService: SEmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }
  onDelete(deletedEmployee: IEmployee){
    this.empService.onDeleteEmployee(deletedEmployee); //deleting the employee
  }
  
  getEmployees() {
     //adding employees or getting data of employees
    if(this.empService.getSetEmployees().length==0)
    {
      this.empService.getEmployeesInitially().subscribe((employeesFetched)=>{
      this.employees = employeesFetched;
      this.empService.setEmployeesInitially(this.employees);
      },(error)=>console.log(error));
    }
    else
    {
      this.employees=this.empService.getSetEmployees();
    }
  }
}
