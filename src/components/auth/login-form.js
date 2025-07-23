import { LitElement, html, css } from 'lit';

export class LoginForm extends LitElement {
  static properties = {
    email: { type: String },
    password: { type: String },
    isLoading: { type: Boolean },
    errorMessage: { type: String }
  };

  constructor() {
    super();
    this.email = '';
    this.password = '';
    this.isLoading = false;
    this.errorMessage = '';
  }

  static styles = css`
    :host {
      display: block;
      max-width: 400px;
      margin: 0 auto;
    }

    .login-container {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }

    .login-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .login-title {
      font-size: 2rem;
      color: #2c3e50;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }

    .login-subtitle {
      color: #7f8c8d;
      font-size: 1rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #2c3e50;
      font-weight: 500;
    }

    input {
      width: 100%;
      padding: 0.75rem;
      border: 2px solid #e1e8ed;
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.3s ease;
      box-sizing: border-box;
    }

    input:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    .error-message {
      color: #e74c3c;
      font-size: 0.9rem;
      margin-top: 0.5rem;
      display: block;
    }

    .login-button {
      width: 100%;
      padding: 1rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1.1rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-bottom: 1rem;
    }

    .login-button:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
    }

    .login-button:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    .register-link {
      text-align: center;
      color: #7f8c8d;
      font-size: 0.9rem;
    }

    .register-link a {
      color: #667eea;
      text-decoration: none;
      font-weight: bold;
    }

    .register-link a:hover {
      text-decoration: underline;
    }

    .loading-spinner {
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 3px solid rgba(255,255,255,.3);
      border-radius: 50%;
      border-top-color: #fff;
      animation: spin 1s ease-in-out infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .back-link {
      display: block;
      text-align: center;
      margin-top: 1rem;
      color: #667eea;
      text-decoration: none;
      font-weight: 500;
    }

    .back-link:hover {
      text-decoration: underline;
    }
  `;

  render() {
    return html`
      <div class="login-container">
        <div class="login-header">
          <h1 class="login-title">🔑 Iniciar Sesión</h1>
          <p class="login-subtitle">Accede a tu cuenta para continuar</p>
        </div>

        <form @submit=${this._handleSubmit}>
          <div class="form-group">
            <label for="email">📧 Correo Electrónico</label>
            <input
              type="email"
              id="email"
              .value=${this.email}
              @input=${this._handleEmailInput}
              required
              placeholder="tu@email.com"
            >
          </div>

          <div class="form-group">
            <label for="password">🔒 Contraseña</label>
            <input
              type="password"
              id="password"
              .value=${this.password}
              @input=${this._handlePasswordInput}
              required
              placeholder="Tu contraseña"
            >
          </div>

          ${this.errorMessage ? html`
            <div class="error-message">❌ ${this.errorMessage}</div>
          ` : ''}

          <button 
            type="submit" 
            class="login-button"
            ?disabled=${this.isLoading}
          >
            ${this.isLoading ? html`
              <span class="loading-spinner"></span> Iniciando sesión...
            ` : html`
              🚀 Iniciar Sesión
            `}
          </button>
        </form>

        <div class="register-link">
          ¿No tienes cuenta? 
          <a href="#" @click=${this._goToRegister}>Regístrate aquí</a>
        </div>

        <a href="#" class="back-link" @click=${this._goHome}>
          ← Volver al inicio
        </a>
      </div>
    `;
  }

  _handleEmailInput(e) {
    this.email = e.target.value;
    this.errorMessage = '';
  }

  _handlePasswordInput(e) {
    this.password = e.target.value;
    this.errorMessage = '';
  }

  _handleSubmit(e) {
    e.preventDefault();
    
    if (!this.email || !this.password) {
      this.errorMessage = 'Por favor, completa todos los campos';
      return;
    }

    if (!this._validateEmail(this.email)) {
      this.errorMessage = 'Por favor, ingresa un email válido';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    // Simular proceso de login
    setTimeout(() => {
      this.isLoading = false;
      
      // Para demo, cualquier email/password funciona
      if (this.email && this.password) {
        this.dispatchEvent(new CustomEvent('login-success', {
          detail: { email: this.email }
        }));
      } else {
        this.errorMessage = 'Credenciales incorrectas';
      }
    }, 1500);
  }

  _validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  _goToRegister() {
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { page: 'register' }
    }));
  }

  _goHome() {
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { page: 'home' }
    }));
  }
}

customElements.define('login-form', LoginForm); 