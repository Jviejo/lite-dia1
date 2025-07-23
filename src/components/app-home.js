import { LitElement, html, css } from 'lit';

export class AppHome extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .hero-section {
      text-align: center;
      padding: 4rem 2rem;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      border-radius: 15px;
      margin-bottom: 3rem;
    }

    .hero-title {
      font-size: 3rem;
      color: #2c3e50;
      margin-bottom: 1rem;
      font-weight: bold;
    }

    .hero-subtitle {
      font-size: 1.3rem;
      color: #7f8c8d;
      margin-bottom: 2rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .cta-button {
      padding: 1rem 2rem;
      border: none;
      border-radius: 50px;
      font-size: 1.1rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      display: inline-block;
    }

    .primary-btn {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    .primary-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
    }

    .secondary-btn {
      background: white;
      color: #667eea;
      border: 2px solid #667eea;
    }

    .secondary-btn:hover {
      background: #667eea;
      color: white;
      transform: translateY(-3px);
    }

    .features-section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .feature-card {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      text-align: center;
      transition: transform 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-5px);
    }

    .feature-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .feature-title {
      font-size: 1.5rem;
      color: #2c3e50;
      margin-bottom: 1rem;
      font-weight: bold;
    }

    .feature-description {
      color: #7f8c8d;
      line-height: 1.6;
    }

    .welcome-text {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      margin-bottom: 2rem;
    }

    .welcome-title {
      font-size: 2rem;
      color: #2c3e50;
      margin-bottom: 1rem;
      text-align: center;
    }

    .welcome-paragraph {
      font-size: 1.1rem;
      color: #34495e;
      line-height: 1.8;
      margin-bottom: 1rem;
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 2rem;
      }
      
      .hero-subtitle {
        font-size: 1.1rem;
      }
      
      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }
      
      .cta-button {
        width: 100%;
        max-width: 300px;
      }
    }
  `;

  render() {
    return html`
      <div class="hero-section">
        <h1 class="hero-title">🚀 Bienvenido a Lit App</h1>
        <p class="hero-subtitle">
          Una aplicación moderna y elegante construida con Lit Element. 
          Descubre el poder de los Web Components y disfruta de una experiencia de usuario excepcional.
        </p>
        <div class="cta-buttons">
          <a href="#" class="cta-button primary-btn" @click=${this._goToRegister}>
            ✨ Comenzar Ahora
          </a>
          <a href="#" class="cta-button secondary-btn" @click=${this._goToLogin}>
            🔑 Ya tengo cuenta
          </a>
        </div>
      </div>

      <div class="welcome-text">
        <h2 class="welcome-title">🎉 ¡Bienvenido a nuestra plataforma!</h2>
        <p class="welcome-paragraph">
          Estamos emocionados de tenerte aquí. Nuestra aplicación está diseñada para ofrecerte 
          la mejor experiencia posible, con una interfaz intuitiva y funcionalidades avanzadas 
          que te ayudarán a alcanzar tus objetivos.
        </p>
        <p class="welcome-paragraph">
          Con Lit Element como base, hemos creado una aplicación que combina la simplicidad 
          de los Web Components con la potencia de las tecnologías web modernas. 
          Cada componente está optimizado para el rendimiento y la accesibilidad.
        </p>
        <p class="welcome-paragraph">
          ¡Explora nuestras funcionalidades, crea tu cuenta y comienza tu viaje con nosotros!
        </p>
      </div>

      <div class="features-section">
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3 class="feature-title">Rendimiento Optimizado</h3>
          <p class="feature-description">
            Nuestra aplicación está construida con las mejores prácticas para garantizar 
            un rendimiento excepcional en todos los dispositivos.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🎨</div>
          <h3 class="feature-title">Diseño Moderno</h3>
          <p class="feature-description">
            Interfaz elegante y responsive que se adapta perfectamente a cualquier 
            tamaño de pantalla y dispositivo.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🔒</div>
          <h3 class="feature-title">Seguridad Avanzada</h3>
          <p class="feature-description">
            Implementamos las mejores prácticas de seguridad para proteger 
            tus datos y garantizar tu privacidad.
          </p>
        </div>
      </div>
    `;
  }

  _goToRegister() {
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { page: 'register' }
    }));
  }

  _goToLogin() {
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { page: 'login' }
    }));
  }
}

customElements.define('app-home', AppHome); 