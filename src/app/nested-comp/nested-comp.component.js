"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var NestedCompComponent = /** @class */ (function () {
    function NestedCompComponent() {
        // tslint:disable-next-line: no-inferrable-types
        this.zmienna = 'wartość zmiennej = nested-comp works!';
        this.something = new SomeObject('someobject');
    }
    NestedCompComponent.prototype.ngOnInit = function () {
    };
    NestedCompComponent.prototype.someMethod = function () {
        return 'some field of object returned using method: ' + this.something.created;
    };
    NestedCompComponent = __decorate([
        core_1.Component({
            selector: 'app-nested-comp',
            templateUrl: './nested-comp.component.html',
            styleUrls: ['./nested-comp.component.css']
        })
    ], NestedCompComponent);
    return NestedCompComponent;
}());
exports.NestedCompComponent = NestedCompComponent;
var SomeObject = /** @class */ (function () {
    function SomeObject(name) {
        this.name = name;
        this.created = new Date;
    }
    return SomeObject;
}());
