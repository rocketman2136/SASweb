/// <reference path="./types/types.d.ts"/>
/// <reference path="../@types/polymer2-ts.ts"/>
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let SASProfileView = class SASProfileView extends Polymer.Element {
    ready() {
        super.ready();
        this.firstName = this.model.user.firstName;
        this.lastName = this.model.user.lastName;
        this.email = this.model.user.email;
        this.midName = this.model.user.midName;
        this.rocketNum = this.model.user.rocketNum;
        this.klasses = this.model.user.klasses;
    }
    _modelChange(model) {
        console.log(model);
    }
    _titleChange(firstName, lastName) {
        let title = '';
        if (!((firstName === undefined) || (lastName === undefined))) {
            title = firstName + ' ' + lastName;
            this.model.user.firstName = firstName;
            this.model.user.lastName = lastName;
        }
        else if (firstName !== undefined) {
            title = firstName;
            this.model.user.firstName = firstName;
        }
        else if (lastName !== undefined) {
            title = lastName;
            this.model.user.lastName = lastName;
        }
        if (title.length > 50)
            title = title.substr(0, 50);
        this.title = title;
    }
    _emailChange(email) {
        if (email !== undefined)
            this.model.user.email = email;
    }
    _rNumChanged(rocketNum) {
        if (rocketNum !== undefined)
            this.model.user.rocketNum = this.rocketNum;
    }
    _midNameChanged(midName) {
        if (midName !== undefined)
            this.model.user.midName = this.midName;
    }
    _klassesChange(klasses) {
        if (klasses !== undefined)
            this.model.user.klasses = this.klasses;
    }
};
__decorate([
    property({ reflectToAttribute: true, notify: true }),
    __metadata("design:type", Object)
], SASProfileView.prototype, "model", void 0);
__decorate([
    observe('model'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SASProfileView.prototype, "_modelChange", null);
__decorate([
    observe(['firstName', 'lastName']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], SASProfileView.prototype, "_titleChange", null);
__decorate([
    observe('email'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SASProfileView.prototype, "_emailChange", null);
__decorate([
    observe('rocketNum'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SASProfileView.prototype, "_rNumChanged", null);
__decorate([
    observe('midName'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SASProfileView.prototype, "_midNameChanged", null);
__decorate([
    observe('klasses'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SASProfileView.prototype, "_klassesChange", null);
SASProfileView = __decorate([
    customElement('sas-profile-view')
], SASProfileView);
