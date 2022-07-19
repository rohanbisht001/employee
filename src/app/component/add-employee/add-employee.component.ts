import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Employee } from 'src/app/employee';
import { UiService } from 'src/app/services/ui.service'; 
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  @Output() onAddEmployee : EventEmitter<Employee> = new EventEmitter;

  name : string = '';
  email: string='';
  designation : string ='';
  project : boolean = false;
  showAddEmployee ?: boolean;
  subscription : Subscription;

  constructor(private uiService : UiService) {
    this.subscription = this.uiService.ontoggle().subscribe((value)=>(this.showAddEmployee = value));
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.name){
      alert('add employee name');
      return ;
    }

    const NewEmployee = {
      name : this.name,
      email: this.email,
      designation : this.designation,
      Project: this.project
    }

    this.onAddEmployee.emit(NewEmployee)

    this.name = '';
    this.email='';
    this.designation = '';
    this.project = false;
  }

}