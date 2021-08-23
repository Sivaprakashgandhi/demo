import { Component, OnInit } from '@angular/core';
import { SEmployeeService } from '../s-employee.service';
import { IEmployee } from '../i-employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  
  constructor(private employeeService: SEmployeeService,private router: Router) { }

  ngOnInit() {
    if(!this.employeeService.getSetEmployees())
    {
      this.employeeService.getEmployeesInitially().subscribe((employeesFetched)=>{
      this.employeeService.setEmployeesInitially(employeesFetched);
      },(error)=>console.log(error));
    }
    
  }

  onSubmit(employeeToBeAdded:IEmployee){
    this.employeeService.addEmployee(employeeToBeAdded);
    this.router.navigate(['/empList']);
  }

}
