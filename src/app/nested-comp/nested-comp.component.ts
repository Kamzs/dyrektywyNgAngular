import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-comp',
  templateUrl: './nested-comp.component.html',
  styleUrls: ['./nested-comp.component.css']
})
export class NestedCompComponent implements OnInit {

    // tslint:disable-next-line: no-inferrable-types
    zmienna: string = 'wartość zmiennej = nested-comp works!';

    something: SomeObject = new SomeObject('someobject');


  constructor() {}

  ngOnInit() {
  }

    someMethod(): string {
      return 'some field of object returned using method: ' + this.something.created;
    }

}

class SomeObject {
  name: string;
  created: Date;

  constructor(name: string){
    this.name = name;
    this.created = new Date;
  }
}
