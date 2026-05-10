import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Centro de Acolhimento SCJ — Paróquia Sagrado Coração de Jesus",
  description:
    "O Centro de Acolhimento SCJ oferece atendimentos gratuitos em psicologia, fisioterapia, nutrição, fonoaudiologia e mais. Conheça o projeto.",
};

// ─── Data ────────────────────────────────────────────────────────────────────

const especialidades = [
  {
    icon: "ti-brain",
    label: "Psicologia",
    count: "19 psicólogos",
    form: "https://docs.google.com/forms/d/e/1FAIpQLScf2nmY-j0NHuCb4IbO0d0hxvEkVR37JpikfHkD-3ynYa8amA/viewform",
  },
  {
    icon: "ti-activity",
    label: "Fisioterapia",
    count: "8 fisioterapeutas",
    form: "https://docs.google.com/forms/d/e/1FAIpQLScIubid1JJOnLOe2Uq8twhRWQnUETxoqV-6owPs_N9lbassTA/viewform",
  },
  {
    icon: "ti-apple",
    label: "Nutrição",
    count: "4 nutricionistas",
    form: "https://docs.google.com/forms/d/e/1FAIpQLSdgbzUaLyNX9eGUFv1y-_dh3UjlnYHYQhYwcFP1RHg0Qig5XQ/viewform",
  },
  {
    icon: "ti-ear",
    label: "Fonoaudiologia",
    count: "1 fonoaudióloga",
    form: "https://docs.google.com/forms/d/e/1FAIpQLSdL390zHVDIUUN0aLJHiHIseN7JvqDtL3wFh5yfzFLlvyEVPw/viewform",
  },
  {
    icon: "ti-psychiatry",
    label: "Psiquiatria",
    count: "1 psiquiatra",
    form: null,
  },
  {
    icon: "ti-tooth",
    label: "Odontologia",
    count: "10 profissionais (em breve)",
    form: null,
  },
  {
    icon: "ti-users",
    label: "Equipes de Acolhida",
    count: "38 voluntários em 15 equipes",
    form: null,
  },
  {
    icon: "ti-device-heart-monitor",
    label: "Psicanálise",
    count: "1 psicanalista",
    form: null,
  },
];

const programas = [
  {
    label: "Estimulação Cognitiva para Idosos",
    href: "https://forms.gle/m4Jchoq1xhxkRHEQA",
    icon: "ti-heart-handshake",
  },
  {
    label: "Sobriedade Feminina",
    href: "/centro-scj/sobriedade-feminina",
    icon: "ti-heart",
  },
];

const numeros = [
  { num: "81", label: "Voluntários e missionários" },
  { num: "800+", label: "Cadastros realizados" },
  { num: "700+", label: "Pessoas atendidas ou em tratamento" },
  { num: "200+", label: "Bairros já atendidos" },
];

// ─── Components ───────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <>
      <style>{navbarCss}</style>
      <nav className="navbar">
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

        <ul className="navbar-links">
          <li><Link href="/">Início</Link></li>
          <li className="nav-dropdown-wrap">
            <button className="nav-dropdown-trigger" aria-haspopup="true">
              Paróquia
              <i className="ti ti-chevron-down nav-chevron" aria-hidden="true" />
            </button>
            <div className="nav-dropdown" role="menu">
              <Link href="/paroquia/historia" role="menuitem">
                <span className="dropdown-icon"><i className="ti ti-book" aria-hidden="true" /></span>
                <span>
                  <strong>História</strong>
                  <small>A trajetória da PSCJ desde 1979</small>
                </span>
              </Link>
              <Link href="/paroquia/grupos" role="menuitem">
                <span className="dropdown-icon"><i className="ti ti-users-group" aria-hidden="true" /></span>
                <span>
                  <strong>Grupos, Movimentos e Pastorais</strong>
                  <small>Encontre sua comunidade dentro da paróquia</small>
                </span>
              </Link>
            </div>
          </li>
          <li><Link href="/centro-scj" aria-current="page">Centro de Acolhimento SCJ</Link></li>
          <li><Link href="/avisos">Avisos</Link></li>
          <li><Link href="/noticias">Notícias</Link></li>
          <li><Link href="/galeria">Galeria</Link></li>
        </ul>

        <div className="navbar-actions">
          <a href="http://www.instagram.com/pscjslz" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="nav-icon-link">
            <i className="ti ti-brand-instagram" aria-hidden="true" />
          </a>
          <a href="https://wa.me/5598988440733" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="nav-icon-link">
            <i className="ti ti-brand-whatsapp" aria-hidden="true" />
          </a>
          <Link href="/eventos" className="btn-nav-cta">Eventos</Link>
        </div>
      </nav>
    </>
  );
}

function PageHero() {
  return (
    <section className="hero">
      {/* Banner image from WordPress */}
      <div className="hero-img-wrap">
        <Image
          src="https://pscjslz.com.br/wp-content/uploads/2023/07/imagem_centro_acolhimento-1024x256.png"
          alt="Centro de Acolhimento SCJ"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="hero-img-overlay" aria-hidden="true" />
      </div>

      <div className="container hero-content">
        <nav className="breadcrumb" aria-label="Navegação estrutural">
          <Link href="/">Início</Link>
          <span>/</span>
          <span>Centro de Acolhimento SCJ</span>
        </nav>
        <span className="hero-badge">
          <i className="ti ti-heart-handshake" aria-hidden="true" /> Serviço Social da PSCJ
        </span>
        <h1>Centro de Acolhimento<br /><span>Sagrado Coração de Jesus</span></h1>
        <p>
          Cuidado integral ao ser humano necessitado — independente de credo,
          opção afetiva, bairro ou cidade. Desde 16 de setembro de 2020.
        </p>
        <div className="hero-actions">
          <a href="#especialidades" className="btn-white">
            <i className="ti ti-calendar-plus" aria-hidden="true" /> Agendar atendimento
          </a>
          <a href="#sobre" className="btn-outline-white">
            <i className="ti ti-info-circle" aria-hidden="true" /> Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
}

function Numeros() {
  return (
    <div className="numeros-bar">
      <div className="container numeros-grid">
        {numeros.map((n) => (
          <div key={n.label} className="numero-item">
            <span className="numero-val">{n.num}</span>
            <span className="numero-label">{n.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Sobre() {
  return (
    <section className="section-white" id="sobre">
      <div className="container">
        <div className="sobre-grid">
          <div className="sobre-text">
            <span className="eyebrow">Sobre o projeto</span>
            <h2>Um projeto nascido da compaixão</h2>
            <p>
              O <strong>Centro de Acolhimento da Paróquia Sagrado Coração de Jesus</strong> começou
              suas atividades em <strong>16 de setembro de 2020</strong> com a dimensão psicológica,
              e atualmente é composto por <strong>81 voluntários e missionários</strong>, oferecendo
              seis dimensões de serviços.
            </p>
            <p>
              Desde sua criação, o Centro já chegou a atender cerca de{" "}
              <strong>200 bairros do município de São Luís</strong>, incluindo as quatro cidades
              que compõem a Grande Ilha, bem como cidades circunvizinhas, ampliando de forma
              contínua o alcance de sua ação pastoral, social e humanitária.
            </p>

            <div className="horario-destaque">
              <i className="ti ti-clock" aria-hidden="true" />
              <div>
                <strong>Funcionamento</strong>
                <span>Segunda a sexta-feira — 8h às 11h e 14h às 20h30</span>
              </div>
            </div>

            <p className="obs-text">
              Todos os atendimentos são feitos por <strong>agendamento prévio</strong>, mediante
              preenchimento de uma ficha cadastral de acordo com a especialidade buscada.
            </p>

            <div className="contribuicao-box">
              <i className="ti ti-coin" aria-hidden="true" />
              <p>
                Para melhor valorização dos serviços, é solicitado por sessão um valor simbólico de{" "}
                <strong>R$ 10,00</strong> ou <strong>1 kg de alimento não perecível</strong>.
                Em caso de dificuldade financeira, a contribuição é totalmente isentada. Os recursos
                são destinados à formação de cestas básicas para a dimensão Samaritana do projeto.
              </p>
            </div>
          </div>

          <div className="sobre-img-col">
            <div className="sobre-img-wrap">
              <Image
                src="https://pscjslz.com.br/wp-content/uploads/2023/09/IMG_5090.jpeg"
                alt="Atendimento no Centro de Acolhimento SCJ"
                fill
                sizes="(max-width: 768px) 90vw, 500px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <blockquote className="citacao">
              <i className="ti ti-quote" aria-hidden="true" />
              <p>
                "Mas um samaritano que viajava, chegando àquele lugar, viu-o e moveu-se de
                compaixão" (Lc 10,24)
              </p>
              <cite>A mística que nos move</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

function Especialidades() {
  return (
    <section className="section-cream" id="especialidades">
      <div className="container">
        <span className="eyebrow">Agendamento</span>
        <h2 className="section-title">Especialidades disponíveis</h2>
        <p className="section-desc">
          Clique em "Agendar" na especialidade desejada para acessar o formulário de cadastro.
          Após o preenchimento, nossa secretaria entrará em contato para confirmar data e horário.
        </p>

        <div className="esp-grid">
          {especialidades.map((e) => (
            <div key={e.label} className={`esp-card ${e.form ? "has-form" : ""}`}>
              <div className="esp-icon">
                <i className={`ti ${e.icon}`} aria-hidden="true" />
              </div>
              <div className="esp-info">
                <strong>{e.label}</strong>
                <span>{e.count}</span>
              </div>
              {e.form ? (
                <a
                  href={e.form}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="esp-btn"
                  aria-label={`Agendar ${e.label}`}
                >
                  Agendar <i className="ti ti-external-link" aria-hidden="true" />
                </a>
              ) : (
                <span className="esp-btn esp-btn--disabled">Em breve</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programas() {
  return (
    <section className="section-red">
      <div className="container">
        <span className="eyebrow light">Programas especiais</span>
        <h2 className="section-title light">Programas e iniciativas</h2>
        <div className="programas-grid">
          {programas.map((p) => (
            <a
              key={p.label}
              href={p.href}
              target={p.href.startsWith("http") ? "_blank" : undefined}
              rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="programa-card"
            >
              <div className="programa-icon">
                <i className={`ti ${p.icon}`} aria-hidden="true" />
              </div>
              <span>{p.label}</span>
              <i className="ti ti-arrow-right programa-arrow" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuemPodeBeneficiar() {
  return (
    <section className="section-white">
      <div className="container">
        <div className="quem-grid">
          <div>
            <span className="eyebrow">Público-alvo</span>
            <h2>Quem pode se beneficiar?</h2>
            <p>
              O Centro de Acolhimento SCJ é um projeto que nasceu para oferecer ajuda ao ser humano
              necessitado — esse é o critério, <strong>independente do seu credo, sua opção afetiva,
              ou mesmo do seu bairro ou cidade.</strong>
            </p>
            <p>
              Até o momento já foram atendidas pessoas de <strong>170 bairros e cidades</strong> da
              Grande Ilha São Luís, além de cidades situadas fora da Ilha.
            </p>
            <blockquote className="frase-destaque">
              <i className="ti ti-quote" aria-hidden="true" />
              <em>Quando a vida está ameaçada todas as outras questões tornam-se irrelevantes.</em>
            </blockquote>
          </div>

          <div className="banner-img-wrap">
            <Image
              src="https://pscjslz.com.br/wp-content/uploads/2023/09/BDFF8E42-C72B-48E4-83C5-DA7BFD0ABF9E-1024x341.png"
              alt="Centro de Acolhimento SCJ"
              fill
              sizes="(max-width: 768px) 90vw, 500px"
              style={{ objectFit: "cover", borderRadius: "12px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SaibaMais() {
  return (
    <section className="section-cream">
      <div className="container">
        <span className="eyebrow">Leia mais</span>
        <h2 className="section-title">Saiba mais sobre o Centro</h2>
        <div className="saiba-grid">
          <Link href="/centro-scj/como-comecou" className="saiba-card">
            <div className="saiba-card-icon">
              <i className="ti ti-history" aria-hidden="true" />
            </div>
            <div>
              <strong>Como tudo começou</strong>
              <p>A história da criação do Centro de Acolhimento SCJ em meio à pandemia de 2020.</p>
            </div>
            <i className="ti ti-arrow-right saiba-arrow" aria-hidden="true" />
          </Link>
          <Link href="/centro-scj/importancia" className="saiba-card">
            <div className="saiba-card-icon">
              <i className="ti ti-heart" aria-hidden="true" />
            </div>
            <div>
              <strong>Qual a importância para a comunidade</strong>
              <p>Entenda o impacto do projeto na vida de centenas de pessoas em São Luís.</p>
            </div>
            <i className="ti ti-arrow-right saiba-arrow" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CtaContato() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <h2>Precisa de ajuda ou quer ser voluntário?</h2>
          <p>
            Entre em contato com a secretaria da paróquia ou venha pessoalmente.
            Todos são bem-vindos.
          </p>
        </div>
        <div className="cta-buttons">
          <a href="https://wa.me/5598988440733" target="_blank" rel="noopener noreferrer" className="btn-white">
            <i className="ti ti-brand-whatsapp" aria-hidden="true" /> WhatsApp
          </a>
          <Link href="/" className="btn-outline-white">
            <i className="ti ti-home" aria-hidden="true" /> Página inicial
          </Link>
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
            <Link href="/centro-scj">Centro de Acolhimento SCJ</Link>
            <Link href="/avisos">Avisos</Link>
            <Link href="/noticias">Notícias</Link>
            <Link href="/galeria">Galeria</Link>
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
              <i className="ti ti-clock" aria-hidden="true" /> Centro SCJ: Seg–Sex, 8h–11h e 14h–20h30
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

export default function CentroScjPage() {
  return (
    <>
      {/*
       * Arquivo: app/centro-scj/page.tsx
       *
       * Adicione no app/layout.tsx:
       * <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
       * <link href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" rel="stylesheet" />
       */}
      <style>{css}</style>
      <Navbar />
      <main>
        <PageHero />
        <Numeros />
        <Sobre />
        <Especialidades />
        <Programas />
        <QuemPodeBeneficiar />
        <SaibaMais />
        <CtaContato />
      </main>
      <Footer />
    </>
  );
}

// ─── Navbar CSS ───────────────────────────────────────────────────────────────

const navbarCss = `
.nav-dropdown-wrap { position: relative; }
.nav-dropdown-trigger {
  display: flex; align-items: center; gap: 4px;
  font-size: 13px; font-weight: 500; color: var(--text, #111);
  background: none; border: none; cursor: pointer;
  padding: 6px 14px; border-radius: 6px;
  transition: background 0.15s, color 0.15s; font-family: inherit;
}
.nav-dropdown-trigger:hover,
.nav-dropdown-wrap:hover .nav-dropdown-trigger { background: #f5e6e8; color: #C8102E; }
.nav-chevron { font-size: 13px; transition: transform 0.2s; }
.nav-dropdown-wrap:hover .nav-chevron { transform: rotate(180deg); }
.nav-dropdown {
  position: absolute; top: calc(100% + 8px); left: 50%;
  transform: translateX(-50%) translateY(-6px);
  width: 300px; background: #fff;
  border: 1px solid #e2e8f0; border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  padding: 8px; opacity: 0; pointer-events: none;
  transition: opacity 0.18s, transform 0.18s; z-index: 300;
}
.nav-dropdown::before {
  content: ''; position: absolute; top: -6px; left: 50%;
  transform: translateX(-50%); width: 12px; height: 6px;
  background: #fff; clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
.nav-dropdown-wrap:hover .nav-dropdown { opacity: 1; pointer-events: auto; transform: translateX(-50%) translateY(0); }
.nav-dropdown a {
  display: flex; align-items: flex-start; gap: 12px;
  padding: 12px; border-radius: 8px; text-decoration: none;
  color: #111; transition: background 0.15s; margin-bottom: 2px;
}
.nav-dropdown a:hover { background: #faf9f7; }
.dropdown-icon {
  width: 36px; height: 36px; flex-shrink: 0;
  background: #f5e6e8; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  color: #C8102E; font-size: 18px;
}
.nav-dropdown a:hover .dropdown-icon { background: #C8102E; color: #fff; }
.nav-dropdown a span:not(.dropdown-icon) { display: flex; flex-direction: column; gap: 2px; }
.nav-dropdown a strong { font-size: 13px; font-weight: 600; color: #111; }
.nav-dropdown a small { font-size: 11px; color: #64748b; }
@media (max-width: 768px) { .nav-dropdown-wrap { display: none; } }
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
body { font-family: 'Inter', sans-serif; background: var(--cream); color: var(--text); overflow-x: hidden; line-height: 1.6; }
a { text-decoration: none; }
ul { list-style: none; }
img { display: block; max-width: 100%; }

.container { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }

/* NAVBAR */
.navbar {
  position: sticky; top: 0; z-index: 200;
  background: var(--white); border-bottom: 1px solid var(--border);
  height: 68px; display: flex; align-items: center;
  padding: 0 2.5rem; gap: 2rem;
  box-shadow: 0 1px 16px rgba(0,0,0,0.07);
}
.navbar-brand { display: flex; align-items: center; gap: 10px; }
.brand-text { display: flex; flex-direction: column; line-height: 1.1; }
.brand-text strong { font-size: 15px; font-weight: 700; color: var(--red); letter-spacing: 0.04em; }
.brand-text span { font-size: 10px; color: var(--muted); }
.navbar-links { display: flex; gap: 0.1rem; flex: 1; align-items: center; }
.navbar-links > li > a {
  font-size: 13px; font-weight: 500; color: var(--text);
  padding: 6px 14px; border-radius: 6px; transition: background 0.15s, color 0.15s; display: block;
}
.navbar-links > li > a:hover,
.navbar-links > li > a[aria-current="page"] { background: var(--red-l); color: var(--red); }
.navbar-actions { display: flex; align-items: center; gap: 14px; flex-shrink: 0; }
.nav-icon-link { font-size: 21px; color: var(--muted); transition: color 0.15s; }
.nav-icon-link:hover { color: var(--red); }
.btn-nav-cta {
  background: var(--red); color: var(--white);
  font-size: 13px; font-weight: 600; padding: 9px 20px; border-radius: 8px; transition: background 0.15s;
}
.btn-nav-cta:hover { background: var(--red-d); }

/* HERO */
.hero {
  position: relative; min-height: 420px;
  display: flex; flex-direction: column; justify-content: flex-end;
  overflow: hidden;
}
.hero-img-wrap { position: absolute; inset: 0; }
.hero-img-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(60,0,0,0.88) 0%, rgba(60,0,0,0.55) 50%, rgba(0,0,0,0.2) 100%);
}
.hero-content {
  position: relative; z-index: 2;
  padding: 3rem 2rem 4rem; max-width: 1100px; margin: 0 auto; width: 100%;
}
.breadcrumb {
  display: flex; align-items: center; gap: 8px;
  font-size: 12px; color: rgba(255,255,255,0.6); margin-bottom: 1.5rem; flex-wrap: wrap;
}
.breadcrumb a { color: rgba(255,255,255,0.6); transition: color 0.15s; }
.breadcrumb a:hover { color: var(--white); }
.breadcrumb span { color: rgba(255,255,255,0.35); }
.hero-badge {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
  color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.2); padding: 5px 14px; border-radius: 20px;
  margin-bottom: 1rem; width: fit-content;
}
.hero h1 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  color: var(--white); line-height: 0.95; letter-spacing: 0.02em; margin-bottom: 1rem;
}
.hero h1 span { color: rgba(255,255,255,0.55); font-style: normal; }
.hero p { font-size: 15px; color: rgba(255,255,255,0.75); max-width: 520px; line-height: 1.7; margin-bottom: 1.8rem; }
.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
.btn-white {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--white); color: var(--red);
  font-size: 13px; font-weight: 700; padding: 13px 24px; border-radius: 8px; transition: opacity 0.15s;
}
.btn-white:hover { opacity: 0.9; }
.btn-outline-white {
  display: inline-flex; align-items: center; gap: 8px;
  background: transparent; color: var(--white);
  border: 1.5px solid rgba(255,255,255,0.5);
  font-size: 13px; font-weight: 600; padding: 13px 24px; border-radius: 8px;
  transition: border-color 0.15s, background 0.15s;
}
.btn-outline-white:hover { border-color: var(--white); background: rgba(255,255,255,0.08); }

/* NUMEROS BAR */
.numeros-bar { background: var(--red); padding: 2rem 0; }
.numeros-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
}
.numero-item {
  display: flex; flex-direction: column; align-items: center; text-align: center;
  padding: 1rem 1.5rem; border-right: 1px solid rgba(255,255,255,0.2);
}
.numero-item:last-child { border-right: none; }
.numero-val {
  font-family: 'Bebas Neue', sans-serif; font-size: 2.2rem; color: var(--white); letter-spacing: 0.02em; line-height: 1;
}
.numero-label { font-size: 12px; color: rgba(255,255,255,0.65); margin-top: 4px; text-align: center; line-height: 1.4; }

/* SECTIONS */
.section-white { padding: 5rem 0; background: var(--white); }
.section-cream { padding: 5rem 0; background: var(--cream); }
.section-red   { padding: 4rem 0; background: var(--red); }

.eyebrow {
  display: block; font-size: 11px; font-weight: 700;
  letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--red); margin-bottom: 0.6rem;
}
.eyebrow.light { color: rgba(255,255,255,0.65); }
.section-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  color: var(--text); letter-spacing: 0.02em; line-height: 1.05; margin-bottom: 1rem;
}
.section-title.light { color: var(--white); }
.section-desc { font-size: 14px; color: var(--muted); line-height: 1.75; margin-bottom: 2rem; max-width: 620px; }

/* SOBRE */
.sobre-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 4rem; align-items: start; }
.sobre-text h2 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(1.8rem, 3vw, 2.6rem); color: var(--text);
  letter-spacing: 0.02em; line-height: 1; margin-bottom: 1.2rem;
}
.sobre-text p { font-size: 14px; color: var(--muted); line-height: 1.8; margin-bottom: 1rem; }
.sobre-text strong { color: var(--text); }
.horario-destaque {
  display: flex; align-items: flex-start; gap: 12px;
  background: var(--red-l); border: 1px solid rgba(200,16,46,0.2);
  border-radius: 10px; padding: 1rem 1.25rem; margin: 1.5rem 0;
  color: var(--red);
}
.horario-destaque i { font-size: 22px; flex-shrink: 0; margin-top: 2px; }
.horario-destaque strong { display: block; font-size: 13px; font-weight: 700; margin-bottom: 2px; }
.horario-destaque span { font-size: 14px; font-weight: 600; }
.obs-text { font-size: 14px; color: var(--muted); line-height: 1.8; margin-bottom: 1rem; }
.contribuicao-box {
  display: flex; align-items: flex-start; gap: 12px;
  background: var(--cream); border: 1px solid var(--border);
  border-radius: 10px; padding: 1rem 1.25rem; margin-top: 1rem;
  color: var(--muted);
}
.contribuicao-box i { font-size: 22px; flex-shrink: 0; color: var(--red); margin-top: 2px; }
.contribuicao-box p { font-size: 13px; line-height: 1.7; }
.contribuicao-box strong { color: var(--text); }
.sobre-img-col { display: flex; flex-direction: column; gap: 1.5rem; }
.sobre-img-wrap {
  position: relative; width: 100%; padding-top: 66%;
  border-radius: 12px; overflow: hidden;
  box-shadow: 0 16px 48px rgba(0,0,0,0.12);
}
.citacao {
  background: var(--red); color: var(--white);
  border-radius: 12px; padding: 1.5rem;
}
.citacao i { font-size: 28px; opacity: 0.5; margin-bottom: 0.5rem; display: block; }
.citacao p { font-size: 14px; line-height: 1.7; font-style: italic; margin-bottom: 0.75rem; }
.citacao cite { font-size: 12px; opacity: 0.7; font-style: normal; }

/* ESPECIALIDADES */
.esp-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem;
  margin-top: 2rem;
}
.esp-card {
  display: flex; align-items: center; gap: 1rem;
  background: var(--white); border: 1px solid var(--border);
  border-radius: 10px; padding: 1rem 1.25rem;
  transition: border-color 0.15s, transform 0.15s;
}
.esp-card.has-form:hover { border-color: var(--red); transform: translateY(-2px); }
.esp-icon {
  width: 44px; height: 44px; flex-shrink: 0;
  background: var(--red-l); border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  color: var(--red); font-size: 22px;
}
.esp-info { flex: 1; }
.esp-info strong { display: block; font-size: 14px; font-weight: 600; color: var(--text); }
.esp-info span { font-size: 12px; color: var(--muted); }
.esp-btn {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 12px; font-weight: 600; color: var(--red);
  background: var(--red-l); padding: 6px 14px; border-radius: 6px;
  transition: background 0.15s, color 0.15s; white-space: nowrap; flex-shrink: 0;
}
.esp-btn:hover { background: var(--red); color: var(--white); }
.esp-btn--disabled { color: var(--muted); background: var(--cream); cursor: default; }
.esp-btn--disabled:hover { background: var(--cream); color: var(--muted); }

/* PROGRAMAS */
.programas-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; margin-top: 1.5rem; }
.programa-card {
  display: flex; align-items: center; gap: 1rem;
  background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2);
  border-radius: 10px; padding: 1.25rem;
  color: var(--white); transition: background 0.15s;
}
.programa-card:hover { background: rgba(255,255,255,0.2); }
.programa-icon {
  width: 44px; height: 44px; flex-shrink: 0;
  background: rgba(255,255,255,0.15); border-radius: 10px;
  display: flex; align-items: center; justify-content: center; font-size: 22px;
}
.programa-card span { flex: 1; font-size: 14px; font-weight: 600; }
.programa-arrow { font-size: 18px; opacity: 0.6; flex-shrink: 0; }

/* QUEM PODE */
.quem-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
.quem-grid h2 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(1.8rem, 3vw, 2.6rem); color: var(--text);
  letter-spacing: 0.02em; margin-bottom: 1rem;
}
.quem-grid p { font-size: 14px; color: var(--muted); line-height: 1.8; margin-bottom: 1rem; }
.quem-grid strong { color: var(--text); }
.frase-destaque {
  border-left: 3px solid var(--red); padding: 1rem 1.25rem;
  background: var(--red-l); border-radius: 0 8px 8px 0; margin-top: 1.5rem;
  display: flex; align-items: flex-start; gap: 10px;
}
.frase-destaque i { color: var(--red); font-size: 20px; flex-shrink: 0; margin-top: 2px; }
.frase-destaque em { font-size: 14px; color: var(--red-d); font-style: italic; line-height: 1.6; }
.banner-img-wrap { position: relative; width: 100%; padding-top: 44%; border-radius: 12px; overflow: hidden; }

/* SAIBA MAIS */
.saiba-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; margin-top: 2rem; }
.saiba-card {
  display: flex; align-items: flex-start; gap: 1rem;
  background: var(--white); border: 1px solid var(--border); border-radius: 12px;
  padding: 1.5rem; transition: border-color 0.15s, transform 0.15s;
}
.saiba-card:hover { border-color: var(--red); transform: translateY(-2px); }
.saiba-card-icon {
  width: 48px; height: 48px; flex-shrink: 0;
  background: var(--red-l); border-radius: 10px;
  display: flex; align-items: center; justify-content: center; color: var(--red); font-size: 22px;
}
.saiba-card > div { flex: 1; }
.saiba-card strong { display: block; font-size: 14px; font-weight: 600; color: var(--text); margin-bottom: 6px; }
.saiba-card p { font-size: 13px; color: var(--muted); line-height: 1.6; }
.saiba-arrow { font-size: 18px; color: var(--red); opacity: 0.5; flex-shrink: 0; margin-top: 4px; transition: opacity 0.15s; }
.saiba-card:hover .saiba-arrow { opacity: 1; }

/* CTA */
.cta-section { padding: 5rem 0; background: var(--red); }
.cta-inner { display: flex; justify-content: space-between; align-items: center; gap: 2rem; flex-wrap: wrap; }
.cta-inner h2 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(1.8rem, 3vw, 2.6rem); color: var(--white);
  letter-spacing: 0.02em; line-height: 1; margin-bottom: 0.5rem;
}
.cta-inner p { font-size: 14px; color: rgba(255,255,255,0.75); max-width: 420px; line-height: 1.7; }
.cta-buttons { display: flex; gap: 12px; flex-shrink: 0; flex-wrap: wrap; }

/* FOOTER */
.footer { background: var(--red); padding: 4rem 0 0; color: var(--white); border-top: 1px solid rgba(255,255,255,0.15); }
.footer-grid {
  display: grid; grid-template-columns: 2fr 1.2fr 1.2fr; gap: 3.5rem;
  padding-bottom: 3rem; border-bottom: 1px solid rgba(255,255,255,0.15);
}
.footer-brand-icon {
  display: inline-flex; align-items: center; justify-content: center;
  width: 44px; height: 44px; background: rgba(255,255,255,0.12);
  border-radius: 10px; font-size: 20px; margin-bottom: 1rem;
}
.footer-brand h3 { font-size: 16px; font-weight: 700; margin-bottom: 0.75rem; }
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
@media (max-width: 768px) {
  .navbar { padding: 0 1rem; gap: 1rem; }
  .navbar-links { display: none; }
  .numeros-grid { grid-template-columns: repeat(2, 1fr); }
  .numero-item:nth-child(2) { border-right: none; }
  .numero-item { border-bottom: 1px solid rgba(255,255,255,0.2); }
  .numero-item:nth-child(3), .numero-item:nth-child(4) { border-bottom: none; }
  .sobre-grid, .quem-grid, .saiba-grid { grid-template-columns: 1fr; gap: 2rem; }
  .esp-grid { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
  .footer-bottom { flex-direction: column; text-align: center; }
  .cta-inner { flex-direction: column; align-items: flex-start; }
  .cta-buttons { flex-direction: column; width: 100%; }
  .btn-white, .btn-outline-white { justify-content: center; }
  .container { padding: 0 1.2rem; }
  .hero-content { padding: 2rem 1.2rem 3rem; }
  .hero h1 { font-size: clamp(2rem, 10vw, 3.5rem); }
  .hero-actions { flex-direction: column; }
}
`;