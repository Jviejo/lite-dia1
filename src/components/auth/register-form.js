import { LitElement, html, css } from 'lit';

export class RegisterForm extends LitElement {
  static properties = {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    confirmPassword: { type: String },
    isLoading: { type: Boolean },
    errorMessage: { type: String },
    successMessage: { type: String }
  };

  constructor() {
    super();
    this.name = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.isLoading = false;
    this.errorMessage = '';
    this.successMessage = '';
  }

  static styles = css`
    :host {
      display: block;
      max-width: 450px;
      margin: 0 auto;
    }

    .register-container {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }

    .register-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .register-title {
      font-size: 2rem;
      color: #2c3e50;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }

    .register-subtitle {
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

    .success-message {
      color: #27ae60;
      font-size: 0.9rem;
      margin-top: 0.5rem;
      display: block;
    }

    .register-button {
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

    .register-button:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
    }

    .register-button:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    .login-link {
      text-align: center;
      color: #7f8c8d;
      font-size: 0.9rem;
    }

    .login-link a {
      color: #667eea;
      text-decoration: none;
      font-weight: bold;
    }

    .login-link a:hover {
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

    .password-requirements {
      background: #f8f9fa;
      padding: 1rem;
      border-radius: 8px;
      margin-top: 0.5rem;
      font-size: 0.85rem;
      color: #6c757d;
    }

    .requirement {
      margin-bottom: 0.25rem;
    }

    .requirement.valid {
      color: #27ae60;
    }

    .requirement.invalid {
      color: #e74c3c;
    }
  `;

  render() {
    return html`
      <div class="register-container">
        <div class="register-header">
          <h1 class="register-title">✨ Crear Cuenta</h1>
          <p class="register-subtitle">Únete a nuestra comunidad</p>
        </div>

        <form @submit=${this._handleSubmit}>
          <div class="form-group">
            <label for="name">👤 Nombre Completo</label>
            <input
              type="text"
              id="name"
              .value=${this.name}
              @input=${this._handleNameInput}
              required
              placeholder="Tu nombre completo"
            >
          </div>

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
            <div class="password-requirements">
              <div class="requirement ${this.password.length >= 8 ? 'valid' : 'invalid'}">
                ✓ Al menos 8 caracteres
              </div>
              <div class="requirement ${/[A-Z]/.test(this.password) ? 'valid' : 'invalid'}">
                ✓ Al menos una mayúscula
              </div>
              <div class="requirement ${/[0-9]/.test(this.password) ? 'valid' : 'invalid'}">
                ✓ Al menos un número
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="confirmPassword">🔐 Confirmar Contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              .value=${this.confirmPassword}
              @input=${this._handleConfirmPasswordInput}
              required
              placeholder="Confirma tu contraseña"
            >
          </div>

          ${this.errorMessage ? html`
            <div class="error-message">❌ ${this.errorMessage}</div>
          ` : ''}

          ${this.successMessage ? html`
            <div class="success-message">✅ ${this.successMessage}</div>
          ` : ''}

          <button 
            type="submit" 
            class="register-button"
            ?disabled=${this.isLoading}
          >
            ${this.isLoading ? html`
              <span class="loading-spinner"></span> Creando cuenta...
            ` : html`
              🚀 Crear Cuenta
            `}
          </button>
        </form>

        <div class="login-link">
          ¿Ya tienes cuenta? 
          <a href="#" @click=${this._goToLogin}>Inicia sesión aquí</a>
        </div>

        <a href="#" class="back-link" @click=${this._goHome}>
          ← Volver al inicio
        </a>
      </div>
    `;
  }

  _handleNameInput(e) {
    this.name = e.target.value;
    this.errorMessage = '';
  }

  _handleEmailInput(e) {
    this.email = e.target.value;
    this.errorMessage = '';
  }

  _handlePasswordInput(e) {
    this.password = e.target.value;
    this.errorMessage = '';
  }

  _handleConfirmPasswordInput(e) {
    this.confirmPassword = e.target.value;
    this.errorMessage = '';
  }

  _handleSubmit(e) {
    e.preventDefault();
    
    if (!this.name || !this.email || !this.password || !this.confirmPassword) {
      this.errorMessage = 'Por favor, completa todos los campos';
      return;
    }

    if (!this._validateEmail(this.email)) {
      this.errorMessage = 'Por favor, ingresa un email válido';
      return;
    }

    if (!this._validatePassword(this.password)) {
      this.errorMessage = 'La contraseña debe tener al menos 8 caracteres, una mayúscula y un número';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    // Simular proceso de registro
    setTimeout(() => {
      this.isLoading = false;
      this.successMessage = '¡Cuenta creada exitosamente!';
      
      // Limpiar formulario
      this.name = '';
      this.email = '';
      this.password = '';
      this.confirmPassword = '';
      
      // Redirigir al dashboard después de un momento
      setTimeout(() => {
        this.dispatchEvent(new CustomEvent('register-success', {
          detail: { email: this.email, name: this.name }
        }));
      }, 1000);
    }, 2000);
  }

  _validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  _validatePassword(password) {
    return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);
  }

  _goToLogin() {
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { page: 'login' }
    }));
  }

  _goHome() {
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { page: 'home' }
    }));
  }
}

customElements.define('register-form', RegisterForm); 