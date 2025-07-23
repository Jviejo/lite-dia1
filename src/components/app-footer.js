import { LitElement, html, css } from 'lit';

export class AppFooter extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: #2c3e50;
      color: white;
      margin-top: auto;
    }

    footer {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .footer-section {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .footer-section h3 {
      color: #3498db;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    .footer-section a {
      color: #bdc3c7;
      text-decoration: none;
      transition: color 0.3s ease;
      font-size: 0.9rem;
    }

    .footer-section a:hover {
      color: #3498db;
    }

    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 0.5rem;
    }

    .social-links a {
      display: inline-block;
      width: 40px;
      height: 40px;
      background: #34495e;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.3s ease;
    }

    .social-links a:hover {
      background: #3498db;
    }

    .copyright {
      grid-column: 1 / -1;
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid #34495e;
      color: #95a5a6;
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      footer {
        padding: 1rem;
        grid-template-columns: 1fr;
        text-align: center;
      }
      
      .social-links {
        justify-content: center;
      }
    }
  `;

  render() {
    return html`
      <footer>
        <div class="footer-section">
          <h3>🚀 Lit App</h3>
          <p>Una aplicación moderna construida con Lit Element, ofreciendo una experiencia de usuario excepcional.</p>
          <div class="social-links">
            <a href="#" title="Facebook">📘</a>
            <a href="#" title="Twitter">🐦</a>
            <a href="#" title="Instagram">📷</a>
            <a href="#" title="LinkedIn">💼</a>
          </div>
        </div>

        <div class="footer-section">
          <h3>Enlaces Útiles</h3>
          <a href="#">🏠 Inicio</a>
          <a href="#">📊 Dashboard</a>
          <a href="#">👥 Sobre Nosotros</a>
          <a href="#">📞 Contacto</a>
          <a href="#">❓ FAQ</a>
        </div>

        <div class="footer-section">
          <h3>Servicios</h3>
          <a href="#">🔧 Desarrollo Web</a>
          <a href="#">📱 Aplicaciones Móviles</a>
          <a href="#">☁️ Cloud Computing</a>
          <a href="#">🔒 Seguridad</a>
          <a href="#">📈 Consultoría</a>
        </div>

        <div class="footer-section">
          <h3>Legal</h3>
          <a href="#">📋 Términos de Servicio</a>
          <a href="#">🔒 Política de Privacidad</a>
          <a href="#">🍪 Política de Cookies</a>
          <a href="#">⚖️ Aviso Legal</a>
          <a href="#">📄 Licencias</a>
        </div>

        <div class="copyright">
          <p>&copy; 2024 Lit App. Todos los derechos reservados. | Desarrollado con ❤️ usando Lit Element</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('app-footer', AppFooter); 