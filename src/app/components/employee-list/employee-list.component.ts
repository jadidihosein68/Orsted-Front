import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @Input() record: Employee[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
