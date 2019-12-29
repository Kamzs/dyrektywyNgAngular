"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var DyrektywyNGComponent = /** @class */ (function () {
    function DyrektywyNGComponent() {
        this.table = ['pon', 'wt', 'srd', 'czwrt', 'pt'];
        this.array = [new Model('someid1', 'somename1'), new Model('someid2', 'somename2')];
    }
    DyrektywyNGComponent.prototype.ngOnInit = function () {
    };
    DyrektywyNGComponent = __decorate([
        core_1.Component({
            selector: 'app-dyrektywy-ng',
            templateUrl: './dyrektywy-ng.component.html',
            styleUrls: ['./dyrektywy-ng.component.css']
        })
    ], DyrektywyNGComponent);
    return DyrektywyNGComponent;
}());
exports.DyrektywyNGComponent = DyrektywyNGComponent;
var Model = /** @class */ (function () {
    function Model(id, name) {
        this.id = id;
        this.name = name;
    }
    return Model;
}());
