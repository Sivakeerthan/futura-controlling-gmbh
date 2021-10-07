import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { DynamicHeaderService } from 'src/app/common/dynamic-header.service';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss']
})
export class MobileNavbarComponent implements OnInit, AfterViewInit {
  public header: string;
  public toggled:boolean = false;

  constructor(private HeaderService: DynamicHeaderService,
              private cdr:ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.HeaderService.header.subscribe(val => {
      this.cdr.detectChanges();
      setTimeout(() => {
        this.header = val;
      }, 0);
    });
  }

  ngOnInit(): void {
    console.log("header:"+this.header);
  }

  toggleNav(){
    this.toggled = !this.toggled;
  }

  onClose(){
    this.toggled = false;
  }



}
