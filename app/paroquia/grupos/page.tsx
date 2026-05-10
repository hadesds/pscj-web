import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar"; 

export const metadata: Metadata = {
  title: "Grupos, Movimentos e Pastorais — Paróquia Sagrado Coração de Jesus",
  description:
    "Conheça os grupos, movimentos e pastorais da Paróquia Sagrado Coração de Jesus de Bequimão.",
};

// ─── Types ────────────────────────────────────────────────────────────────────

interface GroupItem {
  name: string;
  img: string;
  href?: string; // se não tiver link, apenas exibe a imagem
}

// ─── Data (extraído do WordPress) ────────────────────────────────────────────

const grupos: GroupItem[] = [
  {
    name: "Grupo de Catequese",
    img: "https://pscjslz.com.br/wp-content/uploads/2023/08/C4F16E4C-D539-4ABD-B656-EB7E4C68D9CF-1024x1024.png",
    href: "/paroquia/grupos/catequese",
  },
  {
    name: "Grupo Bom Samaritano",
    img: "https://pscjslz.com.br/wp-content/uploads/2026/02/Logo-Grupo-Bom-Samaritano-1024x1024.png",
  },
  {
    name: "Grupo de Jovens",
    img: "https://pscjslz.com.br/wp-content/uploads/2023/06/13-3-1024x1024.png",
  },
  {
    name: "Apostolado de Oração",
    img: "https://pscjslz.com.br/wp-content/uploads/2023/09/19EA1470-E2DA-4353-A072-1DB574D546A6-1024x1024.png",
    href: "/paroquia/grupos/apostolado",
  },
  {
    name: "Ministros da Eucaristia",
    img: "https://pscjslz.com.br/wp-content/uploads/2023/06/11-3-1024x1024.png",
    href: "/paroquia/grupos/ministros",
  },
  {
    name: "Grupo de Oração",
    img: "https://pscjslz.com.br/wp-content/uploads/2023/06/12-3-1024x1024.png",
  },
];

const movimentos: GroupItem[] = [
  {
    name: "Renovação Carismática Católica",
    img: "https://pscjslz.com.br/wp-content/uploads/2023/06/16-3-1024x1024.png",
    href: "/paroquia/movimentos/rcc",
  },
  {
    name: "Pastorais",
    img: "https://pscjslz.com.br/wp-content/uploads/2023/07/pastorais-1024x1024.png",
    href: "/paroquia/movimentos/pastorais",
  },
  {
    name: "Movimento dos Focolares",
    img: "https://pscjslz.com.br/wp-content/uploads/2023/08/6E7E630C-78D5-41D8-A1F7-4209C80B5318-1024x1024.png",
    href: "/paroquia/movimentos/focolares",
  },
  {
    name: "Legião de Maria",
    img: "https://pscjslz.com.br/wp-content/uploads/2023/06/14-3-1024x1024.png",
  },
  {
    name: "Ordem Franciscana Secular",
    img: "https://pscjslz.com.br/wp-content/uploads/2023/07/pastorais-15-1024x1024.png",
    href: "/paroquia/movimentos/ofs",
  },
  {
    name: "Encontro de Casais com Cristo",
    img: "https://pscjslz.com.br/wp-content/uploads/2023/06/1-4-1024x1024.png",
    href: "/paroquia/movimentos/ecc",
  },
];

const pastorais: GroupItem[] = [
  {
    name: "Pastoral da Criança",
    img: "https://pscjslz.com.br/wp-content/uploads/2023/06/3-3-1024x1024.png",
    href: "/paroquia/pastorais/crianca",
  },
  {
    name: "Pastoral da Família",
    img: "https://pscjslz.com.br/wp-content/uploads/2023/06/4-3-1024x1024.png",
  },
  {
    name: "Pastoral da Saúde",
    img: "https://pscjslz.com.br/wp-content/uploads/2023/06/6-3-1024x1024.png",
    href: "/paroquia/pastorais/saude",
  },
  {
    name: "Pastoral do Batismo",
    img: "https://pscjslz.com.br/wp-content/uploads/2023/06/2-3-1024x1024.png",
    href: "/paroquia/pastorais/batismo",
  },
  {
    name: "Pastoral Carcerária",
    img: "https://pscjslz.com.br/wp-content/uploads/2023/07/40E2CCC8-4287-49A2-934B-98D2F3466028-1024x1024.png",
    href: "/paroquia/pastorais/carceraria",
  },
  {
    name: "Pastoral da Comunicação",
    img: "https://pscjslz.com.br/wp-content/uploads/2023/06/10-3-1024x1024.png",
    href: "/paroquia/pastorais/comunicacao",
  },
  {
    name: "Pastoral Vocacional",
    img: "https://pscjslz.com.br/wp-content/uploads/2023/06/5-3-1024x1024.png",
    href: "/paroquia/pastorais/vocacional",
  },
  {
    name: "Pastoral Litúrgica",
    img: "https://pscjslz.com.br/wp-content/uploads/2023/06/7-3-1024x1024.png",
    href: "/paroquia/pastorais/liturgica",
  },
];

// ─── Components ───────────────────────────────────────────────────────────────

function PageHero() {
  return (
    <section className="page-hero">
      <div className="page-hero-pattern" aria-hidden="true" />
      <div className="container page-hero-content">
        <nav className="breadcrumb" aria-label="Navegação estrutural">
          <Link href="/">Início</Link>
          <span>/</span>
          <Link href="/paroquia">Paróquia</Link>
          <span>/</span>
          <span>Grupos, Movimentos e Pastorais</span>
        </nav>
        <h1>Grupos, Movimentos<br />e Pastorais</h1>
        <p>
          Conheça as expressões da vida comunitária da PSCJ — grupos de
          espiritualidade, movimentos de renovação e pastorais de serviço que
          acolhem e evangelizam.
        </p>
        <div className="hero-pills">
          <span className="hero-pill">
            <strong>{grupos.length}</strong>
            <span>Grupos</span>
          </span>
          <span className="hero-pill">
            <strong>{movimentos.length}</strong>
            <span>Movimentos</span>
          </span>
          <span className="hero-pill">
            <strong>{pastorais.length}</strong>
            <span>Pastorais</span>
          </span>
        </div>
      </div>
    </section>
  );
}

function QuickNav() {
  return (
    <div className="quicknav">
      <div className="container quicknav-inner">
        <span className="quicknav-label">Ir para:</span>
        <a href="#grupos">Grupos</a>
        <a href="#movimentos">Movimentos</a>
        <a href="#pastorais">Pastorais</a>
      </div>
    </div>
  );
}

function GroupCard({ item }: { item: GroupItem }) {
  const inner = (
    <div className="group-card">
      <div className="group-img-wrap">
        <Image
          src={item.img}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 200px"
          style={{ objectFit: "contain", padding: "12px" }}
        />
      </div>
      <div className="group-card-footer">
        <span className="group-name">{item.name}</span>
        {item.href && (
          <span className="group-link-icon" aria-hidden="true">
            <i className="ti ti-arrow-right" />
          </span>
        )}
      </div>
    </div>
  );

  if (item.href) {
    return (
      <Link href={item.href} className="group-card-link">
        {inner}
      </Link>
    );
  }

  return <div className="group-card-link no-link">{inner}</div>;
}

function CategorySection({
  id,
  eyebrow,
  title,
  desc,
  items,
  accent,
}: {
  id: string;
  eyebrow: string;
  title: string;
  desc: string;
  items: GroupItem[];
  accent?: boolean;
}) {
  return (
    <section
      id={id}
      className={`cat-section ${accent ? "cat-section--accent" : ""}`}
    >
      <div className="container">
        <div className="cat-header">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="cat-title">{title}</h2>
            <p className="cat-desc">{desc}</p>
          </div>
          <div className="cat-count">
            <span>{items.length}</span>
          </div>
        </div>

        <div className="group-grid">
          {items.map((item) => (
            <GroupCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <h2>Quer participar?</h2>
          <p>
            Entre em contato com a secretaria paroquial ou venha pessoalmente.
            Há um espaço para você em nossa comunidade.
          </p>
        </div>
        <div className="cta-buttons">
          <a
            href="https://wa.me/5598988440733"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white"
          >
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
            <p>
              Evangelizando com amor e servindo com fé. Uma comunidade viva no
              coração de Bequimão desde 1979.
            </p>
            <div className="footer-social">
              <a
                href="http://www.instagram.com/pscjslz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="ti ti-brand-instagram" aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/5598988440733"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
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
              <i className="ti ti-brand-whatsapp" aria-hidden="true" /> (98)
              98844-0733
            </a>
            <a href="#">
              <i className="ti ti-map-pin" aria-hidden="true" /> Bequimão, São
              Luís — MA
            </a>
            <a href="#">
              <i className="ti ti-clock" aria-hidden="true" /> Secretaria:
              Ter–Sex, 8h–17h30
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

export default function GruposPage() {
  return (
    <>
      {/*
       * Arquivo: app/paroquia/grupos/page.tsx
       *
       * Adicione no app/layout.tsx:
       * <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
       * <link href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" rel="stylesheet" />
       */}
      <style>{css}</style>
      <Navbar />
      <main>
        <PageHero />
        <QuickNav />
        <CategorySection
          id="grupos"
          eyebrow="Grupos"
          title="Grupos"
          desc="Espaços de formação, fraternidade e serviço para toda a família paroquial."
          items={grupos}
        />
        <CategorySection
          id="movimentos"
          eyebrow="Movimentos"
          title="Movimentos"
          desc="Movimentos eclesiais que aprofundam a espiritualidade e a missão na Igreja."
          items={movimentos}
          accent
        />
        <CategorySection
          id="pastorais"
          eyebrow="Pastorais"
          title="Pastorais"
          desc="Pastorais que levam o cuidado e a presença da Igreja a diferentes realidades."
          items={pastorais}
        />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

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
a { text-decoration: none; }
ul { list-style: none; }
img { display: block; max-width: 100%; }

.container { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }

/* ── NAVBAR ── */
.navbar {
  position: sticky; top: 0; z-index: 200;
  background: var(--white); border-bottom: 1px solid var(--border);
  height: 68px; display: flex; align-items: center;
  padding: 0 2.5rem; gap: 2.5rem;
  box-shadow: 0 1px 16px rgba(0,0,0,0.07);
}
.navbar-brand { display: flex; align-items: center; gap: 10px; }
.brand-cross {
  width: 36px; height: 36px; background: var(--red); color: var(--white);
  border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 18px;
}
.brand-text { display: flex; flex-direction: column; line-height: 1.1; }
.brand-text strong { font-size: 15px; font-weight: 700; color: var(--red); letter-spacing: 0.04em; }
.brand-text span { font-size: 10px; color: var(--muted); }
.navbar-links { display: flex; gap: 0.2rem; flex: 1; }
.navbar-links a {
  font-size: 13px; font-weight: 500; color: var(--text);
  padding: 6px 14px; border-radius: 6px; transition: background 0.15s, color 0.15s;
}
.navbar-links a:hover { background: var(--red-l); color: var(--red); }
.navbar-actions { display: flex; align-items: center; gap: 14px; flex-shrink: 0; }
.nav-icon-link { font-size: 21px; color: var(--muted); transition: color 0.15s; }
.nav-icon-link:hover { color: var(--red); }
.btn-nav-cta {
  background: var(--red); color: var(--white);
  font-size: 13px; font-weight: 600; padding: 9px 20px; border-radius: 8px; transition: background 0.15s;
}
.btn-nav-cta:hover { background: var(--red-d); }

/* ── HERO ── */
.page-hero {
  position: relative; min-height: 360px;
  background: linear-gradient(160deg, var(--red-d) 0%, var(--red) 60%, #d63050 100%);
  display: flex; align-items: center; overflow: hidden;
}
.page-hero-pattern {
  position: absolute; inset: 0;
  background-image:
    repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.03) 50px, rgba(255,255,255,0.03) 51px),
    repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.03) 50px, rgba(255,255,255,0.03) 51px);
  pointer-events: none;
}
.page-hero-content { position: relative; z-index: 1; padding: 4rem 2rem; }
.breadcrumb {
  display: flex; align-items: center; gap: 8px;
  font-size: 12px; color: rgba(255,255,255,0.6); margin-bottom: 1.5rem; flex-wrap: wrap;
}
.breadcrumb a { color: rgba(255,255,255,0.6); transition: color 0.15s; }
.breadcrumb a:hover { color: var(--white); }
.breadcrumb span { color: rgba(255,255,255,0.35); }
.page-hero-content h1 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.8rem, 7vw, 5rem); color: var(--white);
  line-height: 0.95; letter-spacing: 0.02em; margin-bottom: 1rem;
}
.page-hero-content p {
  font-size: 15px; color: rgba(255,255,255,0.72);
  max-width: 500px; line-height: 1.7; margin-bottom: 2rem;
}
.hero-pills { display: flex; gap: 10px; flex-wrap: wrap; }
.hero-pill {
  display: flex; flex-direction: column; align-items: center;
  background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2);
  border-radius: 8px; padding: 10px 20px; min-width: 90px; text-align: center;
}
.hero-pill strong {
  font-family: 'Bebas Neue', sans-serif; font-size: 1.8rem;
  color: var(--white); line-height: 1; letter-spacing: 0.04em;
}
.hero-pill span { font-size: 11px; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 0.08em; margin-top: 2px; }

/* ── QUICK NAV ── */
.quicknav {
  background: var(--white); border-bottom: 1px solid var(--border);
  position: sticky; top: 68px; z-index: 100;
}
.quicknav-inner {
  display: flex; align-items: center; gap: 1.5rem;
  padding: 0.75rem 2rem; max-width: 1100px; margin: 0 auto;
}
.quicknav-label { font-size: 11px; color: var(--muted); font-weight: 500; text-transform: uppercase; letter-spacing: 0.08em; }
.quicknav a {
  font-size: 13px; font-weight: 600; color: var(--muted);
  padding: 4px 12px; border-radius: 20px; border: 1px solid transparent;
  transition: all 0.15s;
}
.quicknav a:hover { color: var(--red); border-color: var(--red-l); background: var(--red-l); }

/* ── CATEGORY SECTIONS ── */
.cat-section { padding: 5rem 0; background: var(--cream); }
.cat-section--accent { background: var(--white); }
.cat-header {
  display: flex; justify-content: space-between; align-items: flex-start;
  margin-bottom: 2.5rem; gap: 1rem;
}
.eyebrow {
  display: block; font-size: 11px; font-weight: 700;
  letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--red); margin-bottom: 0.4rem;
}
.cat-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2rem, 4vw, 3rem); color: var(--text);
  letter-spacing: 0.02em; line-height: 1;
}
.cat-desc { font-size: 14px; color: var(--muted); margin-top: 0.5rem; max-width: 500px; }
.cat-count {
  flex-shrink: 0;
  width: 64px; height: 64px;
  background: var(--red-l); border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
}
.cat-count span {
  font-family: 'Bebas Neue', sans-serif; font-size: 1.8rem;
  color: var(--red); letter-spacing: 0.02em;
}

/* ── GROUP GRID ── */
.group-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.2rem;
}

/* ── GROUP CARD ── */
.group-card-link {
  display: block; text-decoration: none;
  border-radius: 12px; overflow: hidden;
  border: 1px solid var(--border);
  background: var(--white);
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
}
.group-card-link:not(.no-link):hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(200,16,46,0.12);
  border-color: var(--red);
}
.group-card-link.no-link { cursor: default; }
.group-img-wrap {
  position: relative; width: 100%; padding-top: 100%;
  background: var(--cream);
}
.group-card-footer {
  display: flex; align-items: center; justify-content: space-between;
  padding: 10px 12px;
  border-top: 1px solid var(--border);
  gap: 6px;
}
.group-name {
  font-size: 12px; font-weight: 600; color: var(--text); line-height: 1.3;
  flex: 1;
}
.group-link-icon {
  color: var(--red); font-size: 14px; flex-shrink: 0;
  opacity: 0; transition: opacity 0.15s;
}
.group-card-link:hover .group-link-icon { opacity: 1; }

/* ── CTA ── */
.cta-section { padding: 5rem 0; background: var(--red); }
.cta-inner {
  display: flex; justify-content: space-between; align-items: center;
  gap: 2rem; flex-wrap: wrap;
}
.cta-inner h2 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(1.8rem, 3vw, 2.6rem); color: var(--white);
  letter-spacing: 0.02em; line-height: 1; margin-bottom: 0.5rem;
}
.cta-inner p { font-size: 14px; color: rgba(255,255,255,0.75); max-width: 420px; line-height: 1.7; }
.cta-buttons { display: flex; gap: 12px; flex-shrink: 0; flex-wrap: wrap; }
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

/* ── FOOTER ── */
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
.footer-col h4 {
  font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
  text-transform: uppercase; color: rgba(255,255,255,0.5); margin-bottom: 1.2rem;
}
.footer-col a {
  display: flex; align-items: center; gap: 7px;
  font-size: 13px; color: rgba(255,255,255,0.8); margin-bottom: 10px; transition: color 0.15s;
}
.footer-col a:hover { color: var(--white); }
.footer-bottom {
  display: flex; justify-content: space-between; align-items: center;
  font-size: 12px; color: rgba(255,255,255,0.4); padding: 1.5rem 0;
  flex-wrap: wrap; gap: 8px;
}

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .navbar { padding: 0 1rem; gap: 1rem; }
  .navbar-links { display: none; }
  .group-grid { grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 0.8rem; }
  .cat-header { flex-direction: column; }
  .cat-count { display: none; }
  .cta-inner { flex-direction: column; align-items: flex-start; }
  .cta-buttons { flex-direction: column; width: 100%; }
  .btn-white, .btn-outline-white { justify-content: center; }
  .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
  .footer-bottom { flex-direction: column; text-align: center; }
  .container { padding: 0 1.2rem; }
  .quicknav-inner { gap: 0.75rem; overflow-x: auto; padding: 0.75rem 1.2rem; }
  .hero-pills { gap: 8px; }
}
@media (max-width: 480px) {
  .group-grid { grid-template-columns: repeat(2, 1fr); }
}
`;