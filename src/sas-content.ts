@customElement('sas-content')
class SASContent extends Polymer.Element {
  @property({ reflectToAttribute: true })
  route: {
    path: string;
    prefix: string;
  };
  @property({ reflectToAttribute: true })
  page: string;
  @property()
  routeData: Object;
  @property()
  subRoute: {
    path: string;
    prefix: string;
  };

  @observe('routeData.page')
  _routePageChanged(page: string) {
    if (page === undefined)
      return;
    this.page = page || 'home';
    if(!this.$.drawer.persistent)
      this.$.drawer.close();
  }

  @observe('page')
  _pageChanged(page: string) {
    let resolvedPageURL = this.resolveUrl('../src' + this.route.prefix + '/sas-' + page + '-view.html');
    Polymer.importHref(
      resolvedPageURL,
      undefined,
      undefined,
      true);
  }

  _logOut() {
    window.history.pushState({}, '', '/auth/login');
    window.dispatchEvent(new CustomEvent('location-changed'));
  }
}