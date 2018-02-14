/// <reference path="./types/types.d.ts"/>
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let SASProfile = class SASProfile extends Polymer.Element {
    ready() {
        super.ready();
        this.firstName = this.model.user.firstName;
        this.lastName = this.model.user.lastName;
        this.email = this.model.user.email;
        this.klasses = this.model.user.klasses;
    }
    _titleChange(firstName, lastName) {
        if (!((firstName === undefined) || (lastName === undefined)))
            this.title = firstName + ' ' + lastName;
        if (firstName !== undefined)
            this.model.user.firstName = firstName;
        if (lastName !== undefined)
            this.model.user.lastName = lastName;
    }
    _emailChange(email) {
        if (email !== undefined)
            this.model.user.email = email;
    }
    _klassesChange(klasses) {
        if (klasses !== undefined)
            this.model.user.klasses = this.klasses;
    }
};
__decorate([
    property({ notify: true }),
    __metadata("design:type", UserModelData)
], SASProfile.prototype, "model", void 0);
__decorate([
    observe(['firstName', 'lastName']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], SASProfile.prototype, "_titleChange", null);
__decorate([
    observe('email'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SASProfile.prototype, "_emailChange", null);
__decorate([
    observe('klasses'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SASProfile.prototype, "_klassesChange", null);
SASProfile = __decorate([
    customElement('sas-profile')
], SASProfile);
