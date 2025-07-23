import { LitElement, html, css } from 'lit';

export class AppHeader extends LitElement {
  static properties = {
    isAuthenticated: { type: Boolean }
  };

  static styles = css`
    :host {
      display: block;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    header {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
    }

    .nav-buttons {
      display: flex;
      gap: 1rem;
    }

    button {
      background: rgba(255, 255, 255, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 0.9rem;
    }

    button:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
    }

    .dashboard-btn {
      background: rgba(255, 255, 255, 0.9);
      color: #667eea;
      font-weight: bold;
    }

    .dashboard-btn:hover {
      background: white;
    }

    @media (max-width: 768px) {
      header {
        padding: 1rem;
        flex-direction: column;
        gap: 1rem;
      }
      
      .nav-buttons {
        width: 100%;
        justify-content: center;
      }
    }
  `;

  render() {
    return html`
      <header>
        <div class="logo" @click=${this._goHome}>
          🚀 Lit App
        </div>
        
        <div class="nav-buttons">
          ${this.isAuthenticated 
            ? html`
                <button class="dashboard-btn" @click=${this._goToDashboard}>
                  📊 Dashboard
                </button>
                <button @click=${this._handleLogout}>
                  🚪 Logout
                </button>
              `
            : html`
                <button @click=${this._goToLogin}>
                  🔑 Login
                </button>
                <button @click=${this._goToRegister}>
                  ✨ Sign Up
                </button>
              `
          }
        </div>
      </header>
    `;
  }

  _goHome() {
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { page: 'home' }
    }));
  }

  _goToDashboard() {
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { page: 'dashboard' }
    }));
  }

  _goToLogin() {
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { page: 'login' }
    }));
  }

  _goToRegister() {
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { page: 'register' }
    }));
  }

  _handleLogout() {
    this.dispatchEvent(new CustomEvent('logout'));
  }
}

customElements.define('app-header', AppHeader); 