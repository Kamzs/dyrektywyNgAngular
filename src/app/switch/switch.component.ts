import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  table: Array<string> = ['dzien1','dzien2','dzien3','dzien4']
  constructor() { }

  ngOnInit() {
  }

}
