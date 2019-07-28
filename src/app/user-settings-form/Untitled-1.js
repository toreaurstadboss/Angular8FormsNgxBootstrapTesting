"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let foo = class foo {
    get notes() {
        return this._notes;
    }
    ;
    set notes(value) {
        this._notes = value;
    }
    ;
    get subscriptionType() {
        return this._subscriptionType;
    }
    ;
    set subscriptionType(value) {
        this._subscriptionType = value;
    }
    ;
    get interfaceStyle() {
        return this._interfaceStyle;
    }
    ;
    set interfaceStyle(value) {
        this._interfaceStyle = value;
    }
    ;
    get emailOffers() {
        return this._emailOffers;
    }
    ;
    set emailOffers(value) {
        this._emailOffers = value;
    }
    ;
    get name() {
        return this._name;
    }
    ;
    set name(value) {
        this._name = value;
    }
    ;
};
foo = __decorate([
    core_1.Component({
        selector: 'app-user-settings-form',
        templateUrl: './user-settings-form.component.html',
        styleUrls: ['./user-settings-form.component.css']
    })
], foo);
exports.foo = foo;
class UserSettingsFormComponent {
    constructor() {
        this.originalUserSettings = {
            name: 'Milton',
            emailOffers: true,
            interfaceStyle: 'dark',
            subscriptionType: 'Annual',
            notes: 'here are some notes...'
        };
        this.userSettings = Object.assign({}, this.originalUserSettings);
    }
    ngOnInit() {
    }
}
exports.UserSettingsFormComponent = UserSettingsFormComponent;
