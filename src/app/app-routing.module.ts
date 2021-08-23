import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ShowproductComponent } from './showproduct/showproduct.component';

const routes: Routes = [ 
  {
    path: "empList",
    component: EmployeesListComponent
  },
  {
    path: "addEmp",
    component: AddEmployeeComponent
  },
  {
    path: "addProd",
    component: AddproductComponent
  },
  {
    path: "showProd",
    component: ShowproductComponent
  },
  {
    path: '',
    redirectTo: 'showProd',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
