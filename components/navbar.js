class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .logo {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
        }
        .logo-icon {
          margin-right: 0.5rem;
          //width: 150px;
          //height: 150px;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        .nav-link a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 0.25rem;
          transition: all 0.3s ease;
        }
        .nav-link a:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        .nav-link.active a {
          background-color: rgba(255, 255, 255, 0.2);
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        .phone-link {
          display: flex;
          align-items: center;
          color: white;
          text-decoration: none;
          font-weight: 500;
          background-color: rgba(249, 115, 22, 0.9);
          padding: 0.5rem 1rem;
          border-radius: 0.25rem;
          transition: all 0.3s ease;
        }
        .phone-link:hover {
          background-color: rgba(249, 115, 22, 1);
        }
        .phone-icon {
          margin-right: 0.5rem;
        }
        @media (max-width: 768px) {
          .logo-icon {
            width: 75px;
            height: 75px;
          }
          .mobile-menu-btn {
            display: block;
          }
          .nav-links {
            display: none;
          }
          .nav-links.mobile-open {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: #1e3a8a;
            padding: 1rem;
            gap: 1rem;
          }
          .phone-link.mobile-open {
            display: flex;
            margin-top: 1rem;
          }
        }
      </style>
      <nav>
        <div class="logo">
         <img src="img/logo.svg" alt="Logo" class="logo-icon"/>
        </div>
        <button class="mobile-menu-btn" id="mobileMenuBtn">
          <img src="img/menu.svg" width="24px" height="24px"/>         
        </button>
        <ul class="nav-links" id="navLinks">
          <li class="nav-link"><a href="/">Início</a></li>
          <li class="nav-link"><a href="#services">Serviços</a></li>
          <li>
            <a href="https://wa.me/5517992242020" class="phone-link">
              <i data-feather="phone" class="phone-icon"></i>
              Fale Agora WhatsApp
            </a>
          </li>
        </ul>
      </nav>
    `;

    // Mobile menu toggle
    const mobileMenuBtn = this.shadowRoot.getElementById("mobileMenuBtn");
    const navLinks = this.shadowRoot.getElementById("navLinks");

    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
      feather.replace();
    });

    // Close mobile menu when a link is clicked
    navLinks.addEventListener("click", () => {
      navLinks.classList.remove("mobile-open");
    });
  }
}

customElements.define("custom-navbar", CustomNavbar);
