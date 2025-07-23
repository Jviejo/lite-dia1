import { LitElement, html, css } from 'lit';

export class AppRoot extends LitElement {
  static properties = {
    currentPage: { type: String },
    isAuthenticated: { type: Boolean }
  };

  constructor() {
    super();
    this.currentPage = 'home';
    this.isAuthenticated = false;
  }

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    main {
      flex: 1;
      padding: 20px;
    }

    .page-container {
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
    }
  `;

  render() {
    return html`
      <app-header 
        .isAuthenticated=${this.isAuthenticated}
        @navigate=${this._handleNavigation}
        @logout=${this._handleLogout}
      ></app-header>
      
      <main>
        <div class="page-container">
          ${this._renderCurrentPage()}
        </div>
      </main>
      
      <app-footer></app-footer>
    `;
  }

  _renderCurrentPage() {
    switch (this.currentPage) {
      case 'home':
        return html`<app-home></app-home>`;
      case 'dashboard':
        return this.isAuthenticated 
          ? html`<app-dashboard></app-dashboard>`
          : html`<app-home></app-home>`;
      case 'login':
        return html`<login-form 
          @login-success=${this._handleLoginSuccess}
          @navigate=${this._handleNavigation}
        ></login-form>`;
      case 'register':
        return html`<register-form 
          @register-success=${this._handleRegisterSuccess}
          @navigate=${this._handleNavigation}
        ></register-form>`;
      default:
        return html`<app-home></app-home>`;
    }
  }

  _handleNavigation(e) {
    this.currentPage = e.detail.page;
  }

  _handleLoginSuccess(e) {
    this.isAuthenticated = true;
    this.currentPage = 'dashboard';
  }

  _handleRegisterSuccess(e) {
    this.isAuthenticated = true;
    this.currentPage = 'dashboard';
  }

  _handleLogout() {
    this.isAuthenticated = false;
    this.currentPage = 'home';
  }
}

customElements.define('app-root', AppRoot); 