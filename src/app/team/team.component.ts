import { Component, OnInit} from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';
import { DynamicHeaderService } from '../common/dynamic-header.service';
import { Employee } from '../common/Employee';
import { EmployeeService } from '../common/employee.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  breakpoint:number;

  public employees:Employee[];

  constructor(private HeaderService: DynamicHeaderService,
              private EmployeeService: EmployeeService) { }

  ngOnInit(): void {
    this.HeaderService.setTitle("Über Uns");
    //Build Employee List
    this.EmployeeService.getEmployees().subscribe(res=> {
      this.employees = res
      if(this.employees != null) this.breakpoint = (window.innerWidth <= 1080) ? 1 : this.employees.length;
    });
  }

  OnResize(event){
    if(this.employees != null) this.breakpoint = (event.target.innerWidth <= 1080) ? 1 : this.employees.length;
  }

}
