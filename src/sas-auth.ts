@customElement('sas-auth')
class SASAuth extends Polymer.Element {
  @property({reflectToAttribute: true})
  route: {
    path: string;
    prefix: string;
  };
  @property({reflectToAttribute: true})
  page: string;
  @property()
  routeData: Object;
  @property()
  tail: {
    path: string;
    prefix: string;
  };

  ready() {
    super.ready();
  }

  @observe('routeData.page')
  _routePageChanged(page: string) {
    if(page === undefined)
      return;
    this.page = page || 'login';
  }

  @observe('page') 
  _pageChanged(page: string) {
    let resolvedPageURL = this.resolveUrl('../src' + this.route.prefix + '/sas-' + page + '-view.html');
    Polymer.importHref(resolvedPageURL, undefined, this._showPage404.bind(this), true);
  }

  _showPage404() {
    this.page='notfound';
  }
}