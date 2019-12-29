import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dyrektywy-ng-if',
  templateUrl: './dyrektywy-ng-if.component.html',
  styleUrls: ['./dyrektywy-ng-if.component.css']
})
export class DyrektywyNgIfComponent implements OnInit {

  table: string[] =  ['data15', 'data1', 'data1', 'data1', 'data1'];
  array: Array<Model> = [new Model('someid3', 'somename4'), new Model('someid6', 'somename5')];

  constructor() {}
  ngOnInit() {
  }

}

class Model{
  id: string;
  name: string;
  constructor(id: string, name: string){
    this.id = id;
    this.name = name;
  }
}
