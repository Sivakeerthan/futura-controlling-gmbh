import { Component, OnInit } from '@angular/core';
import { DynamicHeaderService } from '../common/dynamic-header.service';
import { Employee } from './Employee';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  public employees:Employee[];

  constructor(public HeaderService: DynamicHeaderService) { }

  ngOnInit(): void {
    this.HeaderService.setTitle("Das Team");

    //Build Employee List
    this.employees = [new Employee("Bekim","Saiti","CEO",
                                    ["Kaufmann EFZ", "Berufsmatura", "BsC BFH Betriebsökonomie"],
                                    ["Familie","Reisen","Fussball"],
                                    "../../assets/employees/bs.jpg"
                                  ), 
                      new Employee("Sonia","Ahmadi","Kundenmandante",
                                    ["Kauffrau EFZ", "Berufsmatura"],
                                    ["Acryl-/Ölmalerei", "Tanzen", "Fotografie & Fotobearbeitung"],
                                    "../../assets/employees/sa.jpg"
                                  ),
                      new Employee("Sandy","Harbas","Kundenmandante",
                                    ["Kaufmann EFZ"],
                                    ["Fussball", "Familie", "Freunde"],
                                    "../../assets/employees/sh.jpg"
                                  )];
  }

}
