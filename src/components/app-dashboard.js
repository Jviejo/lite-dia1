import { LitElement, html, css } from 'lit';

export class AppDashboard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .dashboard-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 2rem;
      border-radius: 15px;
      margin-bottom: 2rem;
      text-align: center;
    }

    .dashboard-title {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }

    .dashboard-subtitle {
      font-size: 1.2rem;
      opacity: 0.9;
    }

    .dashboard-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .dashboard-card {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0,0,0,0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .dashboard-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    }

    .card-header {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .card-icon {
      font-size: 2rem;
      margin-right: 1rem;
    }

    .card-title {
      font-size: 1.5rem;
      color: #2c3e50;
      font-weight: bold;
    }

    .card-content {
      color: #7f8c8d;
      line-height: 1.6;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .stat-card {
      background: white;
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 0 3px 10px rgba(0,0,0,0.1);
      text-align: center;
    }

    .stat-number {
      font-size: 2.5rem;
      font-weight: bold;
      color: #667eea;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      color: #7f8c8d;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .welcome-message {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      color: white;
      padding: 2rem;
      border-radius: 15px;
      margin-bottom: 2rem;
      text-align: center;
    }

    .welcome-title {
      font-size: 2rem;
      margin-bottom: 1rem;
      font-weight: bold;
    }

    .welcome-text {
      font-size: 1.1rem;
      opacity: 0.9;
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .dashboard-title {
        font-size: 2rem;
      }
      
      .dashboard-grid {
        grid-template-columns: 1fr;
      }
      
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `;

  render() {
    return html`
      <div class="welcome-message">
        <h2 class="welcome-title">🎉 ¡Bienvenido al Dashboard!</h2>
        <p class="welcome-text">
          Has iniciado sesión exitosamente. Aquí puedes gestionar tu cuenta, 
          ver estadísticas y acceder a todas las funcionalidades de la aplicación.
        </p>
      </div>

      <div class="dashboard-header">
        <h1 class="dashboard-title">📊 Panel de Control</h1>
        <p class="dashboard-subtitle">Gestiona tu cuenta y visualiza tus datos</p>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number">1,234</div>
          <div class="stat-label">Visitas Totales</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">567</div>
          <div class="stat-label">Proyectos Activos</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">89</div>
          <div class="stat-label">Tareas Pendientes</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">95%</div>
          <div class="stat-label">Satisfacción</div>
        </div>
      </div>

      <div class="dashboard-grid">
        <div class="dashboard-card">
          <div class="card-header">
            <div class="card-icon">📈</div>
            <h3 class="card-title">Análisis de Datos</h3>
          </div>
          <div class="card-content">
            Visualiza estadísticas detalladas sobre el rendimiento de tu cuenta. 
            Obtén insights valiosos para mejorar tu experiencia.
          </div>
        </div>

        <div class="dashboard-card">
          <div class="card-header">
            <div class="card-icon">⚙️</div>
            <h3 class="card-title">Configuración</h3>
          </div>
          <div class="card-content">
            Personaliza tu perfil, ajusta las preferencias de notificaciones 
            y gestiona la configuración de seguridad de tu cuenta.
          </div>
        </div>

        <div class="dashboard-card">
          <div class="card-header">
            <div class="card-icon">📝</div>
            <h3 class="card-title">Gestión de Proyectos</h3>
          </div>
          <div class="card-content">
            Crea, edita y organiza tus proyectos. Mantén un control total 
            sobre tus actividades y colaboraciones.
          </div>
        </div>

        <div class="dashboard-card">
          <div class="card-header">
            <div class="card-icon">🔔</div>
            <h3 class="card-title">Notificaciones</h3>
          </div>
          <div class="card-content">
            Revisa las últimas notificaciones y actualizaciones importantes. 
            Mantente informado sobre todas las actividades relevantes.
          </div>
        </div>

        <div class="dashboard-card">
          <div class="card-header">
            <div class="card-icon">👥</div>
            <h3 class="card-title">Equipo</h3>
          </div>
          <div class="card-content">
            Gestiona tu equipo de trabajo, asigna roles y permisos, 
            y coordina esfuerzos para lograr mejores resultados.
          </div>
        </div>

        <div class="dashboard-card">
          <div class="card-header">
            <div class="card-icon">📊</div>
            <h3 class="card-title">Reportes</h3>
          </div>
          <div class="card-content">
            Genera reportes detallados sobre el progreso de tus proyectos 
            y obtén métricas importantes para la toma de decisiones.
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('app-dashboard', AppDashboard); 