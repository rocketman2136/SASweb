var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let SASLoginView = class SASLoginView extends Polymer.Element {
    ready() {
        super.ready();
    }
    _onEnter(e) {
        if (e.keyCode === 13) {
            this._login();
        }
    }
    _login() {
        if (this.email === "user@email.com" && this.password === "password") {
            window.history.pushState({}, '', '/content/home');
            window.dispatchEvent(new CustomEvent('location-changed'));
        }
    }
};
SASLoginView = __decorate([
    customElement('sas-login-view')
], SASLoginView);
