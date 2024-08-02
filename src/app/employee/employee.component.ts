import { Component } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {
  employeeList: Employee[]=[];
  newEmployee:Employee=new Employee();
  editEmployee:Employee=new Employee();
   
  constructor(private router : Router,private employeeservice:EmployeeService){}
  ngOnInit(){
    if(sessionStorage.getItem('currentUser')==null){
      alert('you are not Authorize to access this data');
     this.router.navigateByUrl("/login");
    }
    this.getAll();
  }
  getAll(){
    this.employeeservice.getAllEmployeea().subscribe(
      (response)=>{
        this.employeeList=response;        
      },
      (error)=>{
        console.log("Couldn't fetch data");
      }
    )
  }
  saveClick(){
    this.employeeservice.SaveEmployees(this.newEmployee).subscribe(
      (response)=>{
           this.getAll();
           this.clearRec();
      },
      (error)=>{
        console.log("error while saving");
      }
    )
  }
  editClick(employee:Employee){
    this.editEmployee=employee;
  }
 updateClick(){
    this.employeeservice.UpdateEmployees(this.editEmployee).subscribe(
      (response)=>{
           this.getAll();
           this.editEmployee.name="";
           this.editEmployee.address="";
           this.editEmployee.salary="";
      },
      (error)=>{
        console.log("error while Updating");
      }
    )
  }
  deleteClick(id:number){
    let ans = window.confirm('do you want to delete?');
    if(ans){
      this.employeeservice.deleteEmployee(id).subscribe(
        (response)=>{
          alert('Data deleted');
          this.getAll();
        },
        (error)=>{
          console.error('Error deleting employee', error);
        }
      )
    }    
  }
  clearRec(){
    this.newEmployee.name="";
    this.newEmployee.address="";
    this.newEmployee.salary=""
  } 
}
