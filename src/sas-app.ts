@customElement('sas-app')
class SASApp extends Polymer.Element {
    @property()
    subsite: string;
    @property()
    rootPattern: string;
    @property()
    routeData: Object;
    @property()
    tail: {
      path: string;
      prefix: string;
    };

    constructor() {
      super();
      this.rootPattern = (new URL(this.rootPath)).pathname;
    }
    
    @observe('routeData.subsite')
    _routePageChanged(subsite: string) {
      if(subsite === undefined)
        return;
      this.subsite = subsite || 'auth';
    }

    @observe('subsite')
    _pageChanged(subsite: string) {
      let resolvedPageUrl = this.resolveUrl('sas-' + subsite + '.html');
      Polymer.importHref(
        resolvedPageUrl,
        undefined,
        this._showPage404.bind(this),
        true);
    }

    _showPage404() {
      this.subsite = 'view404';
    }
  }