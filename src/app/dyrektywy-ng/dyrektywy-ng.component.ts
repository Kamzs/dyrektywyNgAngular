import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dyrektywy-ng',
  templateUrl: './dyrektywy-ng.component.html',
  styleUrls: ['./dyrektywy-ng.component.css']
})
export class DyrektywyNGComponent implements OnInit {

  table: string[] =  ['pon', 'wt', 'srd', 'czwrt', 'pt'];

  array: Array<Model> = [new Model('someid1', 'somename1'), new Model('someid2', 'somename2')];

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
