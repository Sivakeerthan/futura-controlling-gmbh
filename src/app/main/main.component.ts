import { Component, OnInit } from '@angular/core';
import { simpleFadeAnimation } from '../common/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [simpleFadeAnimation]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
