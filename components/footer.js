class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #0f172a;
          color: white;
          padding: 3rem 2rem;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .footer-logo {
          width: 150px;
          display: flex;
          align-items: center;
          margin: 0 auto;
        }
        .footer-logo-icon {
          margin-right: 0.5rem;
        }
        .footer-about {
          margin-bottom: 1.5rem;
        }
        .footer-heading {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #f97316;
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-link {
          margin-bottom: 0.5rem;
        }
        .footer-link a {
          color: #e2e8f0;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-link a:hover {
          color: #f97316;
        }
        .footer-bottom {
          max-width: 1200px;
          margin: 2rem auto 0;
          padding-top: 2rem;
          border-top: 1px solid #334155;
          text-align: center;
          font-size: 0.875rem;
          color: #94a3b8;
        }
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <footer>
        <div class="footer-container">
          <div class="footer-about-col">
            <div class="footer-logo">
               <img src="../img/logo.svg" alt="Logo" class="footer-logo"/>
            </div>
            <p class="footer-about">
             Realizamos resgate/socorro em Araras e região. Com profissionais verificados e suporte 24h, conectamos você à solução mais rápida e segura, sem complicação.
            </p>
          </div>
                
          <div class="footer-contact-col">
            <h3 class="footer-heading">Contato</h3>
            <ul class="footer-links">
              <li class="footer-link">
                <i data-feather="map-pin" class="inline mr-2"></i>
                Araras e Região.
              </li>
              <li class="footer-link">
                <i data-feather="phone" class="inline mr-2"></i>
                (17) 99224-2020
              </li>
              <li class="footer-link">
                <i data-feather="mail" class="inline mr-2"></i>
                contato@mecanicodealuguel.com.br
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} RCR. Todos os direitos reservados.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define("custom-footer", CustomFooter);
