var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let SASContent = class SASContent extends Polymer.Element {
    _routePageChanged(page) {
        if (page === undefined)
            return;
        this.page = page || 'home';
        if (!this.$.drawer.persistent)
            this.$.drawer.close();
    }
    _pageChanged(page) {
        let resolvedPageURL = this.resolveUrl('../src' + this.route.prefix + '/sas-' + page + '-view.html');
        Polymer.importHref(resolvedPageURL, undefined, undefined, true);
    }
    _logOut() {
        window.history.pushState({}, '', '/auth/login');
        window.dispatchEvent(new CustomEvent('location-changed'));
    }
};
__decorate([
    property({ reflectToAttribute: true }),
    __metadata("design:type", Object)
], SASContent.prototype, "route", void 0);
__decorate([
    property({ reflectToAttribute: true }),
    __metadata("design:type", String)
], SASContent.prototype, "page", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], SASContent.prototype, "routeData", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], SASContent.prototype, "subRoute", void 0);
__decorate([
    observe('routeData.page'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SASContent.prototype, "_routePageChanged", null);
__decorate([
    observe('page'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SASContent.prototype, "_pageChanged", null);
SASContent = __decorate([
    customElement('sas-content')
], SASContent);
