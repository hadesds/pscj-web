'use client';

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <style>{navbarCss}</style>
      <nav className="navbar">
        {/* Logo */}
        <Link href="/" className="navbar-brand">
          <Image
            src="/Logo-PSCJ-vermelho-sem-fundo.png"
            alt="Logo PSCJ"
            width={35}
            height={42}
            priority
          />
          <span className="brand-text">
            <strong>PSCJ</strong>
            <span>Sagrado Coração de Jesus</span>
          </span>
        </Link>

        {/* Links */}
        <ul className="navbar-links">
          <li>
            <Link href="/">Início</Link>
          </li>

          {/* Paróquia com dropdown */}
          <li className="nav-dropdown-wrap">
            <button className="nav-dropdown-trigger" aria-haspopup="true">
              Paróquia
              <i className="ti ti-chevron-down nav-chevron" aria-hidden="true" />
            </button>
            <div className="nav-dropdown" role="menu">
              <Link href="/paroquia/historia" role="menuitem">
                <span className="dropdown-icon">
                  <i className="ti ti-book" aria-hidden="true" />
                </span>
                <span>
                  <strong>História</strong>
                  <small>A trajetória da PSCJ desde 1979</small>
                </span>
              </Link>
              <Link href="/paroquia/grupos" role="menuitem">
                <span className="dropdown-icon">
                  <i className="ti ti-users-group" aria-hidden="true" />
                </span>
                <span>
                  <strong>Grupos, Movimentos e Pastorais</strong>
                  <small>Encontre sua comunidade dentro da paróquia</small>
                </span>
              </Link>
            </div>
          </li>

          <li>
            <Link href="/centro-scj">Centro de Acolhimento SCJ</Link>
          </li>
          <li>
            <Link href="/avisos">Avisos</Link>
          </li>
          <li>
            <Link href="/noticias">Notícias</Link>
          </li>
          <li>
            <Link href="/galeria">Galeria</Link>
          </li>
        </ul>

        {/* Ações */}
        <div className="navbar-actions">
          <a
            href="http://www.instagram.com/pscjslz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="nav-icon-link"
          >
            <i className="ti ti-brand-instagram" aria-hidden="true" />
          </a>
          <a
            href="https://wa.me/5598988440733"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="nav-icon-link"
          >
            <i className="ti ti-brand-whatsapp" aria-hidden="true" />
          </a>
          <Link href="/eventos" className="btn-nav-cta">
            Eventos
          </Link>
        </div>
      </nav>
    </>
  );
}

const navbarCss = `
.nav-dropdown-wrap { position: relative; }

.nav-dropdown-trigger {
  display: flex; align-items: center; gap: 4px;
  font-size: 13px; font-weight: 500; color: var(--text, #111);
  background: none; border: none; cursor: pointer;
  padding: 6px 14px; border-radius: 6px;
  transition: background 0.15s, color 0.15s;
  font-family: inherit;
  white-space: nowrap;
}
.nav-dropdown-trigger:hover,
.nav-dropdown-wrap:hover .nav-dropdown-trigger {
  background: #f5e6e8; color: #C8102E;
}

.nav-chevron {
  font-size: 13px;
  transition: transform 0.2s;
}
.nav-dropdown-wrap:hover .nav-chevron {
  transform: rotate(180deg);
}

/* Dropdown panel */
.nav-dropdown {
  position: absolute; top: calc(100% + 8px); left: 50%;
  transform: translateX(-50%);
  width: 300px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  padding: 8px;
  opacity: 0; pointer-events: none;
  transform: translateX(-50%) translateY(-6px);
  transition: opacity 0.18s, transform 0.18s;
  z-index: 300;
}

/* Arrow tip */
.nav-dropdown::before {
  content: '';
  position: absolute; top: -6px; left: 50%;
  transform: translateX(-50%);
  width: 12px; height: 6px;
  background: #fff;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  filter: drop-shadow(0 -1px 0 #e2e8f0);
}

.nav-dropdown-wrap:hover .nav-dropdown {
  opacity: 1; pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}

.nav-dropdown a {
  display: flex; align-items: flex-start; gap: 12px;
  padding: 12px; border-radius: 8px;
  text-decoration: none; color: #111;
  transition: background 0.15s;
  margin-bottom: 2px;
}
.nav-dropdown a:last-child { margin-bottom: 0; }
.nav-dropdown a:hover { background: #faf9f7; }

.dropdown-icon {
  width: 36px; height: 36px; flex-shrink: 0;
  background: #f5e6e8; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  color: #C8102E; font-size: 18px;
  margin-top: 1px;
}
.nav-dropdown a:hover .dropdown-icon { background: #C8102E; color: #fff; }

.nav-dropdown a span:not(.dropdown-icon) {
  display: flex; flex-direction: column; gap: 2px;
}
.nav-dropdown a strong {
  font-size: 13px; font-weight: 600; color: #111; line-height: 1.3;
}
.nav-dropdown a small {
  font-size: 11px; color: #64748b; line-height: 1.4;
}

/* Mobile: dropdown becomes static block */
@media (max-width: 768px) {
  .nav-dropdown-wrap { display: none; }
}
`;