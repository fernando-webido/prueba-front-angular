import { Component } from '@angular/core';
import { Employee } from './models/employee';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selectedEmployee: Employee = new Employee();
  addResp: string;

  openForEdit( employee: Employee){
    this.selectedEmployee = employee;
  }

  employeeArray: Employee[] = [
    {id: 1, name: "Ryan", country: "USA", title: "Developer", respo:[] },
    {id: 2, name: "Agelica", country: "USA", title: "SEO", respo:[]  },
    {id: 3, name: "Fernando", country: "USA", title: "Developer", respo:[] },
    {id: 4, name: "Juan", country: "USA", title: "Developer", respo:[] },
  ];

  responsaArray: Array = [];

  addOrEdit(){
    if( this.selectedEmployee.id == 0){
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }
    this.selectedEmployee = new Employee();
  }
  delete(){
    if(confirm('Seguro que quieres eliminar')){
      this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
  }
  addRespon(){
    if(this.addResp)
      this.selectedEmployee.respo.push(this.addResp);

  }
  responseId( id:int ){
    var resp = this.responsaArray.filter( responsabilidad => { return responsabilidad.id = id } )
  }

}

