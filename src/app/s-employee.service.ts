import { Injectable } from '@angular/core';
import { IEmployee } from './i-employee';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root' 
})
export class SEmployeeService {
  
  readonly filePath = "./assets/EmployeesList.json"
  
  employees: IEmployee[]=[];

  constructor(private httpService: HttpClient) { }

  addEmployee(addedEmployee: IEmployee) {

    this.employees.push(addedEmployee);//post
  }
  getEmployeesInitially(): Observable<IEmployee[]> {
    //this function runs for first time
   return this.httpService.get<IEmployee[]>(this.filePath);//get,post ,put,delete
  }
  setEmployeesInitially(employeesList: IEmployee[]) {
    //set the employees array for future use
    this.employees = employeesList; 
  }
  getSetEmployees() {
    // get the set employees, which runs after first time
    return this.employees; 
  }

  onDeleteEmployee(employee: IEmployee) {
    //deleting the data
    let index = this.employees.indexOf(employee);//0
    this.employees.splice(index, 1);//including and excluding
  }

  onUpdateEmployee() {

  }
}
