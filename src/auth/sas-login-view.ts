@customElement('sas-login-view')
class SASLoginView extends Polymer.Element {
  email: string;
  password: string;

  ready() {
    super.ready();
  }
  _onEnter(e: KeyboardEvent) {
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
}