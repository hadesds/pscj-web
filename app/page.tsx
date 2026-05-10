import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PSCJ — Paróquia Sagrado Coração de Jesus do Bequimão",
  description:
    "Uma comunidade viva, acolhedora e comprometida com a fé desde 1979.",
};

// ─── Data ────────────────────────────────────────────────────────────────────

const avisos = [
  {
    tag: "Destaque",
    title: "XVI Retiro Espiritual Mariano",
    desc: '"Maria toda de Deus e tão humana" — Inscrições abertas para este momento de renovação interior.',
    href: "/avisos",
    linkLabel: "Saiba mais",
  },
  {
    tag: "Comunidade",
    title: "Celebrações Missionárias — CEM",
    desc: "Toda 4ª quinta-feira do mês nas ruas e residências da comunidade, às 19h30.",
    href: "#",
    linkLabel: "Ver calendário",
  },
  {
    tag: "Centro SCJ",
    title: "Centro de Acolhimento SCJ",
    desc: "Aberto para grupos, movimentos e pastorais. Entre em contato para agendamentos.",
    href: "/centro-scj",
    linkLabel: "Agendar visita",
  },
];

const missas = [
  { dia: "Sexta-feira", horario: "18h" },
  { dia: "Sábado", horario: "19h" },
  { dia: "Domingo", horario: "7h · 9h · 17h · 19h" },
  { dia: "4ª Quinta/mês (CEM)", horario: "19h30" },
];

const secretaria = [
  { dia: "Ter. a Sex.", horario: "8h–11h30 · 14h–17h30" },
  { dia: "Sábado", horario: "8h–11h30 · 15h30–20h" },
  { dia: "Domingo", horario: "6h30–10h30 · 16h30–20h30" },
];

const timeline = [
  { ano: "1979", desc: "Primeira missa no conjunto Bequimão." },
  { ano: "1985", desc: "Primeiros grupos pastorais e primeira capela." },
  { ano: "1997", desc: "Elevação oficial a paróquia." },
  { ano: "2008", desc: "Inauguração da atual Igreja Matriz." },
  { ano: "Hoje", desc: "Comunidade viva, com pastorais e Centro SCJ." },
];

const padreFormacoes = [
  { icon: "ti-school", label: "Teologia — FACMA" },
  { icon: "ti-award", label: "Cursou Filosofia e Teologia" },
  { icon: "ti-calendar", label: "Pároco desde 1998" },
];

const passos = [
  {
    num: "01",
    title: "Participe da Missa",
    desc: "Venha celebrar nos horários disponíveis durante a semana e fins de semana.",
  },
  {
    num: "02",
    title: "Conheça os Grupos",
    desc: "Encontre seu espaço em um de nossos grupos pastorais, movimentos e pastorais.",
  },
  {
    num: "03",
    title: "Faça Parte",
    desc: "Integre-se à comunidade e contribua com a evangelização e projetos sociais.",
  },
];

// ─── Navbar com Dropdown ──────────────────────────────────────────────────────

function Navbar() {
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

// ─── Sub-components ───────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="hero">
      <Image src="/hero-bg2.png" alt="" fill priority className="hero-img" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <span className="hero-eyebrow">
          <i className="ti ti-map-pin" aria-hidden="true" /> Bequimão, São Luís — MA
        </span>
        <h1 className="hero-title">
          SAGRADO CORAÇÃO
          <br />
          <span className="hero-title-light">DE JESUS</span>
        </h1>
        <p className="hero-sub">
          Evangelizando com amor e servindo com fé desde 1979.
          <br />
          Uma comunidade viva no coração de Bequimão.
        </p>
        <div className="hero-ctas">
          <a href="#horarios" className="btn-hero-primary">
            <i className="ti ti-calendar" aria-hidden="true" /> Horário de Missas
          </a>
          <Link href="/paroquia" className="btn-hero-outline">
            <i className="ti ti-heart" aria-hidden="true" /> Conheça a Paróquia
          </Link>
        </div>
      </div>
      <div className="hero-stats-bar">
        {[
          { num: "1979", label: "Fundação" },
          { num: "1997", label: "Elevação à Paróquia" },
          { num: "2008", label: "Igreja Matriz" },
          { num: "+40", label: "Anos de Fé" },
        ].map((s) => (
          <div key={s.label} className="hero-stat">
            <span className="hero-stat-num">{s.num}</span>
            <span className="hero-stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro-section">
      <div className="container">
        <div className="intro-grid">
          <div className="intro-left">
            <span className="section-eyebrow">Nossa missão</span>
            <h2 className="intro-title">
              Por que a PSCJ é o lar da sua fé em Bequimão
            </h2>
            <p className="intro-desc">
              Da evangelização à ação social, a paróquia une a comunidade em
              torno da fé católica com grupos pastorais, celebrações, retiros e
              projetos que transformam vidas.
            </p>
            <div className="intro-social">
              <a href="http://www.instagram.com/pscjslz" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="ti ti-brand-instagram" aria-hidden="true" />
              </a>
              <a href="https://wa.me/5598988440733" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="ti ti-brand-whatsapp" aria-hidden="true" />
              </a>
            </div>
            <div className="intro-metrics">
              {[
                { num: "45+", label: "Anos de história" },
                { num: "10+", label: "Grupos pastorais" },
                { num: "4", label: "Missas no domingo" },
              ].map((m) => (
                <div key={m.label} className="intro-metric">
                  <span className="metric-num">{m.num}</span>
                  <span className="metric-label">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="intro-right">
            {[
              { icon: "ti-map-pin", title: "Presença Comunitária", desc: "Atuamos em ruas, residências e espaços comunitários de Bequimão levando fé e acolhimento." },
              { icon: "ti-calendar-event", title: "Agenda Completa", desc: "Missas, retiros, celebrações missionárias e eventos durante todo o ano para sua família." },
              { icon: "ti-headphones", title: "Sempre Acolhendo", desc: "Nossa secretaria e grupos pastorais estão prontos para receber e apoiar toda a comunidade." },
            ].map((card) => (
              <div key={card.title} className="intro-card">
                <div className="intro-card-icon">
                  <i className={`ti ${card.icon}`} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="intro-card-title">{card.title}</h3>
                  <p className="intro-card-desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Avisos() {
  return (
    <section className="avisos-section" id="avisos">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="section-eyebrow">Comunicados</span>
            <h2 className="section-title">Avisos da Paróquia</h2>
          </div>
          <Link href="/avisos" className="btn-ghost">
            Ver todos <i className="ti ti-arrow-right" aria-hidden="true" />
          </Link>
        </div>
        <div className="avisos-grid">
          {avisos.map((a) => (
            <article key={a.title} className="aviso-card">
              <span className="aviso-tag">{a.tag}</span>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
              <Link href={a.href} className="aviso-link">
                {a.linkLabel} <i className="ti ti-arrow-right" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Horarios() {
  return (
    <section className="horarios-section" id="horarios">
      <div className="container">
        <div className="horarios-wrapper">
          <div className="horarios-head">
            <span className="section-eyebrow light">Liturgia</span>
            <h2 className="section-title light">
              Horários de<br />Missas e Secretaria
            </h2>
            <a href="https://wa.me/5598988440733" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <i className="ti ti-brand-whatsapp" aria-hidden="true" />
              WhatsApp da Paróquia
            </a>
          </div>
          <div className="horarios-cards">
            <div className="horario-card">
              <h3><i className="ti ti-building-church" aria-hidden="true" /> Missas</h3>
              <ul>
                {missas.map((m) => (
                  <li key={m.dia}>
                    <span className="h-dia">{m.dia}</span>
                    <span className="h-time">{m.horario}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="horario-card">
              <h3><i className="ti ti-clock" aria-hidden="true" /> Secretaria</h3>
              <ul>
                {secretaria.map((s) => (
                  <li key={s.dia}>
                    <span className="h-dia">{s.dia}</span>
                    <span className="h-time">{s.horario}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PadreAtual() {
  return (
    <section className="padre-section" id="padre">
      <div className="container">
        <div className="padre-grid">
          <div className="padre-photo-col">
            <div className="padre-photo-frame">
              <div className="padre-accent-block" aria-hidden="true" />
              <div className="padre-img-wrap">
                <Image
                  src="/padre.png"
                  alt="Padre pároco da PSCJ"
                  fill
                  sizes="(max-width: 768px) 90vw, 420px"
                  style={{ objectFit: "contain", objectPosition: "bottom center" }}
                />
              </div>
              <div className="padre-badge" aria-hidden="true">
                <i className="ti ti-cross" />
              </div>
            </div>
          </div>
          <div className="padre-info-col">
            <span className="section-eyebrow">Liderança Pastoral</span>
            <h2 className="padre-name">Pe. Flávio Colins</h2>
            <p className="padre-role">
              <i className="ti ti-building-church" aria-hidden="true" />
              Pároco da PSCJ — Bequimão
            </p>
            <p className="padre-bio">
              Reconhecido por sua dedicação à formação dos leigos, pela gestão pastoral
              e pelo cuidado com as comunidades, sempre atuou de forma humilde, fraterna
              e comprometida com o crescimento espiritual e humano dos fiéis.
            </p>
            <ul className="padre-tags">
              {padreFormacoes.map((f) => (
                <li key={f.label}>
                  <i className={`ti ${f.icon}`} aria-hidden="true" />
                  {f.label}
                </li>
              ))}
            </ul>
            <div className="padre-actions">
              <a href="https://wa.me/5598988440733" target="_blank" rel="noopener noreferrer" className="btn-red">
                <i className="ti ti-brand-whatsapp" aria-hidden="true" /> Contato
              </a>
              <a href="http://www.instagram.com/pscjslz" target="_blank" rel="noopener noreferrer" className="btn-outline-red">
                <i className="ti ti-brand-instagram" aria-hidden="true" /> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Historia() {
  return (
    <section className="historia-section" id="historia">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="section-eyebrow">Nossa história</span>
            <h2 className="section-title">A trajetória da PSCJ</h2>
          </div>
          <Link href="/paroquia/historia" className="btn-ghost">
            História completa <i className="ti ti-arrow-right" aria-hidden="true" />
          </Link>
        </div>
        <div className="historia-grid">
          <div className="historia-text">
            <p>
              A paróquia <strong>nasceu em 1979</strong>, junto com o conjunto Bequimão.
              Desde a primeira missa celebrada em um terreno simples, a comunidade cresceu,
              organizou grupos pastorais e construiu sua primeira capela.
            </p>
            <p>
              Em <strong>1997</strong> foi elevada oficialmente a paróquia, e em{" "}
              <strong>2008</strong> inaugurou a atual Igreja Matriz, símbolo vivo
              da fé e da dedicação da comunidade.
            </p>
          </div>
          <ol className="timeline">
            {timeline.map((t, i) => (
              <li key={t.ano} className="timeline-item">
                <div className="timeline-dot" aria-hidden="true">
                  {i + 1 < timeline.length && <div className="timeline-line" />}
                </div>
                <div>
                  <span className="timeline-year">{t.ano}</span>
                  <p className="timeline-desc">{t.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ComoParticipar() {
  return (
    <section className="passos-section">
      <div className="container">
        <span className="section-eyebrow center">Faça parte</span>
        <h2 className="section-title center">Participar é simples. Em 3 passos.</h2>
        <div className="passos-grid">
          {passos.map((p) => (
            <div key={p.num} className="passo-card">
              <span className="passo-num">{p.num}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-brand-icon">
              <i className="ti ti-cross" aria-hidden="true" />
            </span>
            <h3>Paróquia Sagrado Coração de Jesus</h3>
            <p>Evangelizando com amor e servindo com fé. Uma comunidade viva no coração de Bequimão desde 1979.</p>
            <div className="footer-social">
              <a href="http://www.instagram.com/pscjslz" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="ti ti-brand-instagram" aria-hidden="true" />
              </a>
              <a href="https://wa.me/5598988440733" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="ti ti-brand-whatsapp" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Navegação</h4>
            <Link href="/">Início</Link>
            <Link href="/paroquia">Paróquia</Link>
            <Link href="/paroquia/historia">História</Link>
            <Link href="/paroquia/grupos">Grupos e Pastorais</Link>
            <Link href="/avisos">Avisos</Link>
            <Link href="/noticias">Notícias</Link>
            <Link href="/galeria">Galeria</Link>
            <Link href="/eventos">Eventos e Ações</Link>
          </div>
          <div className="footer-col">
            <h4>Contato</h4>
            <a href="https://wa.me/5598988440733">
              <i className="ti ti-brand-whatsapp" aria-hidden="true" /> (98) 98844-0733
            </a>
            <a href="#">
              <i className="ti ti-map-pin" aria-hidden="true" /> Bequimão, São Luís — MA
            </a>
            <a href="#">
              <i className="ti ti-clock" aria-hidden="true" /> Secretaria: Ter–Sex, 8h–17h30
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 1997–2026 Paróquia Sagrado Coração de Jesus — Bequimão</span>
          <span>Desenvolvido pela PASCOM</span>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <style>{css}</style>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Avisos />
        <Horarios />
        <PadreAtual />
        <Historia />
        <ComoParticipar />
      </main>
      <Footer />
    </>
  );
}

// ─── Navbar Dropdown CSS ──────────────────────────────────────────────────────

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

// ─── Page CSS ─────────────────────────────────────────────────────────────────

const css = `
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap');
@import url('https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css');

:root {
  --red:   #C8102E;
  --red-d: #8B0000;
  --red-l: #f5e6e8;
  --white: #ffffff;
  --cream: #faf9f7;
  --text:  #111111;
  --muted: #64748b;
  --border:#e2e8f0;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Inter', sans-serif;
  background: var(--cream);
  color: var(--text);
  overflow-x: hidden;
  line-height: 1.6;
}
img { display: block; max-width: 100%; }
a { text-decoration: none; }
ul, ol { list-style: none; }

.container { max-width: 1160px; margin: 0 auto; padding: 0 2rem; }

/* NAVBAR */
.navbar {
  position: sticky; top: 0; z-index: 200;
  background: var(--white);
  border-bottom: 1px solid var(--border);
  height: 68px;
  display: flex; align-items: center;
  padding: 0 2.5rem; gap: 2rem;
  box-shadow: 0 1px 16px rgba(0,0,0,0.07);
}
.navbar-brand { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
.brand-text { display: flex; flex-direction: column; line-height: 1.1; }
.brand-text strong { font-size: 15px; font-weight: 700; color: var(--red); letter-spacing: 0.04em; }
.brand-text span { font-size: 10px; color: var(--muted); letter-spacing: 0.01em; }
.navbar-links { display: flex; gap: 0.1rem; flex: 1; align-items: center; }
.navbar-links > li > a {
  font-size: 13px; font-weight: 500; color: var(--text);
  padding: 6px 14px; border-radius: 6px; transition: background 0.15s, color 0.15s;
  display: block;
}
.navbar-links > li > a:hover { background: var(--red-l); color: var(--red); }
.navbar-actions { display: flex; align-items: center; gap: 14px; flex-shrink: 0; }
.nav-icon-link { font-size: 21px; color: var(--muted); transition: color 0.15s; }
.nav-icon-link:hover { color: var(--red); }
.btn-nav-cta {
  background: var(--red); color: var(--white);
  font-size: 13px; font-weight: 600; padding: 9px 20px; border-radius: 8px;
  transition: background 0.15s; white-space: nowrap;
}
.btn-nav-cta:hover { background: var(--red-d); }

/* HERO */
.hero { position: relative; min-height: 600px; display: flex; flex-direction: column; overflow: hidden; }
.hero-img { object-fit: cover; }
.hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to right, rgba(80,0,0,0.72) 0%, rgba(80,0,0,0.3) 65%, transparent 100%);
}
.hero-content {
  position: relative; z-index: 2; flex: 1;
  display: flex; flex-direction: column; justify-content: center;
  padding: 6rem 4rem 3rem; max-width: 680px;
}
.hero-eyebrow {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
  color: rgba(255,255,255,0.75); background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2); padding: 5px 14px; border-radius: 20px;
  margin-bottom: 1.5rem; width: fit-content;
}
.hero-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(4rem, 9vw, 7rem); line-height: 0.9;
  color: var(--white); letter-spacing: 0.02em; margin-bottom: 1.2rem;
}
.hero-title-light { color: rgba(255,255,255,0.4); }
.hero-sub { font-size: 15px; color: rgba(255,255,255,0.75); line-height: 1.7; max-width: 440px; margin-bottom: 2rem; }
.hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; }
.btn-hero-primary {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--white); color: var(--red);
  font-size: 13px; font-weight: 700; padding: 13px 26px; border-radius: 8px; transition: opacity 0.15s;
}
.btn-hero-primary:hover { opacity: 0.9; }
.btn-hero-outline {
  display: inline-flex; align-items: center; gap: 8px;
  background: transparent; color: var(--white);
  border: 1.5px solid rgba(255,255,255,0.5);
  font-size: 13px; font-weight: 600; padding: 13px 26px; border-radius: 8px;
  transition: border-color 0.15s, background 0.15s;
}
.btn-hero-outline:hover { border-color: var(--white); background: rgba(255,255,255,0.08); }
.hero-stats-bar {
  position: relative; z-index: 2;
  background: rgba(0,0,0,0.28); backdrop-filter: blur(6px);
  display: flex; border-top: 1px solid rgba(255,255,255,0.1);
}
.hero-stat {
  flex: 1; padding: 1.2rem 1.5rem; text-align: center;
  border-right: 1px solid rgba(255,255,255,0.1);
}
.hero-stat:last-child { border-right: none; }
.hero-stat-num {
  display: block; font-family: 'Bebas Neue', sans-serif;
  font-size: 2rem; color: var(--white); letter-spacing: 0.02em;
}
.hero-stat-label { display: block; font-size: 11px; color: rgba(255,255,255,0.55); text-transform: uppercase; letter-spacing: 0.08em; margin-top: 2px; }

/* INTRO */
.intro-section { padding: 5.5rem 0; background: var(--white); }
.intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
.section-eyebrow {
  font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--red); margin-bottom: 0.75rem; display: block;
}
.section-eyebrow.light { color: rgba(255,255,255,0.65); }
.section-eyebrow.center { text-align: center; }
.intro-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(1.8rem, 3vw, 2.8rem); line-height: 1.05;
  color: var(--text); margin-bottom: 1.2rem; letter-spacing: 0.02em;
}
.intro-desc { font-size: 14px; color: var(--muted); line-height: 1.75; margin-bottom: 1.5rem; }
.intro-social { display: flex; gap: 14px; margin-bottom: 2rem; }
.intro-social a { font-size: 22px; color: var(--muted); transition: color 0.15s; }
.intro-social a:hover { color: var(--red); }
.intro-metrics { display: flex; gap: 2.5rem; }
.metric-num { display: block; font-family: 'Bebas Neue', sans-serif; font-size: 2rem; color: var(--red); letter-spacing: 0.02em; }
.metric-label { font-size: 12px; color: var(--muted); margin-top: 2px; }
.intro-right { display: flex; flex-direction: column; gap: 12px; }
.intro-card {
  display: flex; gap: 1.2rem; align-items: flex-start;
  background: var(--cream); border: 1px solid var(--border); border-radius: 12px;
  padding: 1.4rem 1.5rem; transition: border-color 0.15s, transform 0.15s;
}
.intro-card:hover { border-color: var(--red); transform: translateX(4px); }
.intro-card-icon {
  width: 48px; height: 48px; flex-shrink: 0;
  background: var(--red-l); border-radius: 10px;
  display: flex; align-items: center; justify-content: center; color: var(--red); font-size: 22px;
}
.intro-card-title { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
.intro-card-desc { font-size: 13px; color: var(--muted); line-height: 1.6; }

/* SECTION HEADER */
.section-header {
  display: flex; justify-content: space-between; align-items: flex-end;
  margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem;
}
.section-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  color: var(--text); letter-spacing: 0.02em; line-height: 1.05;
}
.section-title.light { color: var(--white); }
.section-title.center { text-align: center; }
.btn-ghost {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 13px; font-weight: 600; color: var(--red);
  border: 1.5px solid var(--red-l); border-radius: 8px;
  padding: 8px 18px; transition: background 0.15s; white-space: nowrap;
}
.btn-ghost:hover { background: var(--red-l); }

/* AVISOS */
.avisos-section { padding: 5rem 0; background: var(--cream); }
.avisos-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.2rem; }
.aviso-card {
  background: var(--white); border: 1px solid var(--border); border-top: 3px solid var(--red);
  border-radius: 12px; padding: 1.6rem; transition: transform 0.2s, box-shadow 0.2s;
}
.aviso-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(200,16,46,0.1); }
.aviso-tag {
  display: inline-block; font-size: 10px; font-weight: 700; color: var(--red);
  background: var(--red-l); padding: 3px 10px; border-radius: 20px;
  text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 12px;
}
.aviso-card h3 { font-size: 15px; font-weight: 600; line-height: 1.4; margin-bottom: 8px; }
.aviso-card p { font-size: 13px; color: var(--muted); line-height: 1.65; }
.aviso-link { display: inline-flex; align-items: center; gap: 5px; margin-top: 14px; font-size: 12px; font-weight: 600; color: var(--red); transition: gap 0.15s; }
.aviso-link:hover { gap: 8px; }

/* HORARIOS */
.horarios-section { padding: 5rem 0; background: var(--red); }
.horarios-wrapper { display: grid; grid-template-columns: 1fr 2fr; gap: 4rem; align-items: start; }
.horarios-head { display: flex; flex-direction: column; gap: 1.5rem; }
.btn-whatsapp {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,0.15); border: 1.5px solid rgba(255,255,255,0.3);
  color: var(--white); font-size: 13px; font-weight: 600;
  padding: 11px 20px; border-radius: 8px; transition: background 0.15s; width: fit-content;
}
.btn-whatsapp:hover { background: rgba(255,255,255,0.25); }
.horarios-cards { display: flex; flex-direction: column; gap: 1.2rem; }
.horario-card {
  background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.18); border-radius: 12px; padding: 1.5rem;
}
.horario-card h3 {
  display: flex; align-items: center; gap: 8px;
  font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
  color: rgba(255,255,255,0.65); margin-bottom: 1rem;
}
.horario-card ul { display: flex; flex-direction: column; }
.horario-card li {
  display: flex; justify-content: space-between; align-items: center;
  padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.1);
}
.horario-card li:last-child { border-bottom: none; }
.h-dia { font-size: 13px; color: rgba(255,255,255,0.7); }
.h-time { font-size: 14px; font-weight: 600; color: var(--white); }

/* PADRE */
.padre-section { padding: 6rem 0; background: var(--white); }
.padre-grid { display: grid; grid-template-columns: 420px 1fr; gap: 5rem; align-items: center; }
.padre-photo-col { position: relative; }
.padre-photo-frame { position: relative; width: 100%; padding-top: 110%; }
.padre-accent-block {
  position: absolute; bottom: 0; left: 0; width: 80%; height: 80%;
  background: var(--red-l); border-radius: 16px; z-index: 0;
}
.padre-img-wrap { position: absolute; inset: 0; z-index: 1; border-radius: 16px; overflow: hidden; }
.padre-badge {
  position: absolute; bottom: 16px; right: -16px; z-index: 2;
  width: 72px; height: 72px;
  background: var(--red); color: var(--white); border: 4px solid var(--white);
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-size: 26px; box-shadow: 0 8px 24px rgba(200,16,46,0.3);
}
.padre-info-col { display: flex; flex-direction: column; gap: 1rem; }
.padre-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2rem, 3.5vw, 3rem); color: var(--text); letter-spacing: 0.02em; line-height: 1;
}
.padre-role { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: var(--red); letter-spacing: 0.04em; }
.padre-bio { font-size: 14px; color: var(--muted); line-height: 1.8; }
.padre-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.padre-tags li {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 12px; font-weight: 500; background: var(--cream);
  border: 1px solid var(--border); color: var(--text); padding: 6px 14px; border-radius: 20px;
}
.padre-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 0.5rem; }
.btn-red {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--red); color: var(--white);
  font-size: 13px; font-weight: 700; padding: 12px 24px; border-radius: 8px; transition: background 0.15s;
}
.btn-red:hover { background: var(--red-d); }
.btn-outline-red {
  display: inline-flex; align-items: center; gap: 8px;
  background: transparent; color: var(--red); border: 1.5px solid var(--red);
  font-size: 13px; font-weight: 600; padding: 12px 24px; border-radius: 8px; transition: background 0.15s;
}
.btn-outline-red:hover { background: var(--red-l); }

/* HISTORIA */
.historia-section { padding: 5rem 0; background: var(--cream); }
.historia-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; margin-top: 1rem; }
.historia-text { display: flex; flex-direction: column; gap: 1rem; }
.historia-text p { font-size: 15px; color: var(--muted); line-height: 1.8; }
.historia-text strong { color: var(--text); font-weight: 600; }
.timeline { display: flex; flex-direction: column; }
.timeline-item { display: flex; gap: 1.2rem; align-items: flex-start; padding-bottom: 1.4rem; }
.timeline-item:last-child { padding-bottom: 0; }
.timeline-dot { display: flex; flex-direction: column; align-items: center; padding-top: 4px; flex-shrink: 0; }
.timeline-dot::before {
  content: ''; width: 10px; height: 10px;
  background: var(--red); border-radius: 50%; border: 2px solid var(--white);
  box-shadow: 0 0 0 2px var(--red); flex-shrink: 0;
}
.timeline-line { width: 2px; flex: 1; background: var(--border); margin-top: 6px; min-height: 24px; }
.timeline-year { display: block; font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem; color: var(--red); letter-spacing: 0.04em; line-height: 1; margin-bottom: 4px; }
.timeline-desc { font-size: 13px; color: var(--muted); line-height: 1.6; }

/* PASSOS */
.passos-section { padding: 5.5rem 0; background: var(--white); }
.passos-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 3rem; }
.passo-card {
  background: var(--cream); border: 1px solid var(--border); border-radius: 14px;
  padding: 2rem; transition: border-color 0.15s, transform 0.15s;
}
.passo-card:hover { border-color: var(--red); transform: translateY(-3px); }
.passo-num {
  display: block; font-family: 'Bebas Neue', sans-serif;
  font-size: 3.5rem; color: var(--red-l); line-height: 1; margin-bottom: 0.5rem;
  letter-spacing: 0.02em; -webkit-text-stroke: 2px var(--red);
}
.passo-card h3 { font-size: 15px; font-weight: 700; margin-bottom: 8px; }
.passo-card p { font-size: 13px; color: var(--muted); line-height: 1.7; }

/* FOOTER */
.footer { background: var(--red); padding: 4rem 0 0; color: var(--white); }
.footer-grid {
  display: grid; grid-template-columns: 2fr 1.2fr 1.2fr; gap: 3.5rem;
  padding-bottom: 3rem; border-bottom: 1px solid rgba(255,255,255,0.15);
}
.footer-brand-icon {
  display: inline-flex; align-items: center; justify-content: center;
  width: 44px; height: 44px; background: rgba(255,255,255,0.12); border-radius: 10px;
  font-size: 20px; margin-bottom: 1rem;
}
.footer-brand h3 { font-size: 16px; font-weight: 700; margin-bottom: 0.75rem; line-height: 1.3; }
.footer-brand p { font-size: 13px; color: rgba(255,255,255,0.65); line-height: 1.75; }
.footer-social { display: flex; gap: 12px; margin-top: 1.2rem; }
.footer-social a { font-size: 22px; color: rgba(255,255,255,0.6); transition: color 0.15s; }
.footer-social a:hover { color: var(--white); }
.footer-col h4 { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.5); margin-bottom: 1.2rem; }
.footer-col a { display: flex; align-items: center; gap: 7px; font-size: 13px; color: rgba(255,255,255,0.8); margin-bottom: 10px; transition: color 0.15s; }
.footer-col a:hover { color: var(--white); }
.footer-bottom {
  display: flex; justify-content: space-between; align-items: center;
  font-size: 12px; color: rgba(255,255,255,0.4); padding: 1.5rem 0; flex-wrap: wrap; gap: 8px;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .padre-grid { grid-template-columns: 1fr 1fr; gap: 3rem; }
  .intro-grid { gap: 3rem; }
}
@media (max-width: 768px) {
  .navbar { padding: 0 1rem; gap: 1rem; }
  .navbar-links { display: none; }
  .hero-content { padding: 4rem 1.5rem 2rem; max-width: 100%; }
  .hero-title { font-size: clamp(3rem, 14vw, 5rem); }
  .hero-stats-bar { flex-wrap: wrap; }
  .hero-stat { min-width: 50%; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); }
  .intro-grid, .padre-grid, .historia-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .padre-photo-frame { padding-top: 85%; max-width: 340px; margin: 0 auto; }
  .horarios-wrapper { grid-template-columns: 1fr; gap: 2rem; }
  .avisos-grid, .passos-grid { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
  .footer-bottom { flex-direction: column; text-align: center; }
  .section-header { flex-direction: column; align-items: flex-start; }
  .container { padding: 0 1.2rem; }
}
@media (max-width: 480px) {
  .hero-ctas { flex-direction: column; }
  .btn-hero-primary, .btn-hero-outline { justify-content: center; }
}
`;