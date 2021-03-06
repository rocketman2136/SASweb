var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let SASApp = class SASApp extends Polymer.Element {
    constructor() {
        super();
        this.rootPattern = (new URL(this.rootPath)).pathname;
    }
    _routePageChanged(subsite) {
        if (subsite === undefined)
            return;
        this.subsite = subsite || 'auth';
    }
    _pageChanged(subsite) {
        let resolvedPageUrl = this.resolveUrl('sas-' + subsite + '.html');
        Polymer.importHref(resolvedPageUrl, undefined, this._showPage404.bind(this), true);
    }
    _showPage404() {
        this.subsite = 'view404';
    }
};
__decorate([
    property(),
    __metadata("design:type", String)
], SASApp.prototype, "subsite", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], SASApp.prototype, "rootPattern", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], SASApp.prototype, "routeData", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], SASApp.prototype, "tail", void 0);
__decorate([
    observe('routeData.subsite'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SASApp.prototype, "_routePageChanged", null);
__decorate([
    observe('subsite'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SASApp.prototype, "_pageChanged", null);
SASApp = __decorate([
    customElement('sas-app'),
    __metadata("design:paramtypes", [])
], SASApp);
