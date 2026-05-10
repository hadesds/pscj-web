import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "História — Paróquia Sagrado Coração de Jesus | Bequimão",
  description:
    "Conheça a história da Paróquia Sagrado Coração de Jesus de Bequimão, desde sua fundação em 1979 até os dias atuais.",
};

// ─── Types ────────────────────────────────────────────────────────────────────

interface TimelineEvent {
  date: string;
  title: string;
  desc: string;
  images?: { src: string; alt: string; caption?: string }[];
  highlight?: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const events: TimelineEvent[] = [
  {
    date: "Janeiro de 1979",
    title: "O início — concessão do terreno",
    desc: "Tudo começou em janeiro de 1979, ano da inauguração do conjunto Bequimão, quando da concessão do terreno para a construção da igreja. A primeira missa foi celebrada por Frei João de Deus Caragiolla da Paróquia do Anil.",
    highlight: true,
  },
  {
    date: "Agosto de 1979",
    title: "Frei Mário Paloni assume a comunidade",
    desc: "Após reunião do clero, concluiu-se que a comunidade do Bequimão pertencia à Paróquia de São João Batista dos Vinhais, com sede na Cohama, sob a orientação do Frei Mário Paloni – OFC, que assume a comunidade.",
    images: [
      {
        src: "https://pscjslz.com.br/wp-content/uploads/2023/09/image.png",
        alt: "Frei Mário Paloni",
      },
    ],
  },
  {
    date: "08 de setembro de 1979",
    title: "Criação dos primeiros grupos",
    desc: "Foram criados os primeiros grupos da comunidade: Catequese (coordenada por Luiza Queiroz e Maria do Rosário), os Praesidiuns Nossa Senhora Aparecida e Nossa Senhora da Luz, e a Ordem Franciscana Secular.",
  },
  {
    date: "02 de fevereiro de 1982",
    title: "Bênção do terreno por Dom Mota",
    desc: "O terreno da futura Igreja Matriz recebeu a bênção de Dom Mota, marcando o início formal da construção da estrutura da paróquia.",
    images: [
      {
        src: "https://pscjslz.com.br/wp-content/uploads/2023/09/image-1-1024x724.png",
        alt: "Bênção do terreno em 1982",
      },
    ],
  },
  {
    date: "24 de junho de 1982",
    title: "Primeira capela de palha e escolha do padroeiro",
    desc: "Foi construída a primeira capela de palha. Nessa mesma época, foi realizada uma votação para a escolha do padroeiro, sendo escolhido: Sagrado Coração de Jesus.",
  },
  {
    date: "1983",
    title: "Construção do salão de celebrações",
    desc: "Deu-se o início da construção do salão para a realização das celebrações, marcando um passo importante na estruturação física da comunidade.",
    images: [
      {
        src: "https://pscjslz.com.br/wp-content/uploads/2023/09/image-2-1024x671.png",
        alt: "Construção do salão em 1983",
      },
    ],
  },
  {
    date: "04 de novembro de 1984",
    title: "Bênção do salão com Dom Paulo Pontes",
    desc: "Foi realizada a bênção do Salão com a presença de Dom Paulo Pontes, consolidando o espaço de celebração da comunidade.",
    images: [
      {
        src: "https://pscjslz.com.br/wp-content/uploads/2023/09/image-3.png",
        alt: "Bênção do salão em 1984",
      },
    ],
  },
  {
    date: "1985",
    title: "Primeiro grupo de Ministros da Eucaristia",
    desc: "Foi criado o primeiro grupo de Ministros Extraordinários da Eucaristia, fortalecendo o serviço litúrgico da comunidade.",
  },
  {
    date: "1986",
    title: "Frei Carmine assume",
    desc: "Frei Mário ausenta-se e o Frei Carmine assume a liderança pastoral da comunidade de Bequimão.",
  },
  {
    date: "07 de setembro de 1990",
    title: "Apostolado de Oração e CPP",
    desc: "É criado o Grupo do Apostolado de Oração, por iniciativa de Marília e Luiza, tendo como primeira presidente Maria José Pires. Nessa época, surge também o primeiro grupo CPP.",
  },
  {
    date: "1992",
    title: "Construção de oito salas para encontros",
    desc: "Inicia-se a construção de 8 salas para encontros, ampliando significativamente a capacidade de acolhimento e formação da paróquia.",
    images: [
      {
        src: "https://pscjslz.com.br/wp-content/uploads/2023/09/image-4-1024x616.png",
        alt: "Construção das salas em 1992",
      },
    ],
  },
  {
    date: "18 de agosto de 1993",
    title: "Criação do movimento carismático",
    desc: "É criado o movimento carismático, com a orientação de Terezinha, Maria Costa, Cacilda Mota e Josecilde, trazendo nova dimensão à vida espiritual da comunidade.",
  },
  {
    date: "28 de janeiro de 1996",
    title: "Bequimão se torna sede da paróquia",
    desc: "A comunidade do Bequimão passa a ser sede da Paróquia São João Batista dos Vinhais. O Pároco Carmelino Pereira Farias assume.",
    images: [
      {
        src: "https://pscjslz.com.br/wp-content/uploads/2023/09/image-5.png",
        alt: "Padre Carmelino Pereira Farias",
      },
    ],
  },
  {
    date: "25 de janeiro de 1997",
    title: "Elevação a Paróquia",
    desc: "A comunidade do Sagrado Coração de Jesus torna-se oficialmente a Paróquia do Sagrado Coração de Jesus, permanecendo o mesmo pároco, Padre Carmelino Pereira Farias.",
    images: [
      {
        src: "https://pscjslz.com.br/wp-content/uploads/2023/09/image-6-1024x597.png",
        alt: "Sede da Paróquia em 1997",
        caption: "Sede da Paróquia Sagrado Coração de Jesus em 1997",
      },
    ],
    highlight: true,
  },
  {
    date: "1997",
    title: "Casa Paroquial e Área de Vivência",
    desc: "Inicia-se a construção da Casa Paroquial e da Área de Vivência, ampliando as instalações da recém-criada paróquia.",
    images: [
      {
        src: "https://pscjslz.com.br/wp-content/uploads/2023/09/image-7-1024x654.png",
        alt: "Construção da Casa Paroquial",
      },
      {
        src: "https://pscjslz.com.br/wp-content/uploads/2023/09/image-8-1024x592.png",
        alt: "Área de vivência",
      },
    ],
  },
  {
    date: "08 de março de 2003",
    title: "Frei Luis Henrique Reis Costa assume",
    desc: "Toma posse o novo pároco Frei Luis Henrique Reis Costa, oriundo de outra paróquia de São Luís.",
    images: [
      {
        src: "https://pscjslz.com.br/wp-content/uploads/2023/09/image-9.png",
        alt: "Frei Luis Henrique Reis Costa",
      },
    ],
  },
  {
    date: "20 de dezembro de 2003",
    title: "Lançamento da pedra fundamental",
    desc: "Aconteceu o lançamento da pedra fundamental do novo prédio da Igreja Matriz da Paróquia, marcando o início de um novo capítulo na história física da paróquia.",
    images: [
      {
        src: "https://pscjslz.com.br/wp-content/uploads/2023/09/image-12.png",
        alt: "Lançamento da pedra fundamental",
      },
      {
        src: "https://pscjslz.com.br/wp-content/uploads/2023/09/image-13.png",
        alt: "Cerimônia de lançamento",
      },
    ],
  },
  {
    date: "Fevereiro de 2004",
    title: "Início da construção da nova Igreja Matriz",
    desc: "Inicia-se efetivamente a construção da nova Igreja Matriz, um projeto que tomaria quatro anos até ser concluído.",
    images: [
      {
        src: "https://pscjslz.com.br/wp-content/uploads/2023/09/image-14.png",
        alt: "Construção da Igreja Matriz — 2004",
      },
      {
        src: "https://pscjslz.com.br/wp-content/uploads/2023/09/image-15.png",
        alt: "Construção da Igreja Matriz — fase inicial",
      },
    ],
  },
  {
    date: "Novembro de 2008",
    title: "Inauguração da Igreja Matriz",
    desc: "É inaugurada a nova Igreja Matriz da Paróquia Sagrado Coração de Jesus, símbolo da fé e da dedicação de décadas de trabalho da comunidade.",
    images: [
      {
        src: "https://pscjslz.com.br/wp-content/uploads/2023/09/image-18.png",
        alt: "Inauguração da Igreja Matriz em 2008",
      },
      {
        src: "https://pscjslz.com.br/wp-content/uploads/2023/09/image-19.png",
        alt: "Igreja Matriz — inauguração",
      },
    ],
    highlight: true,
  },
  {
    date: "04 de dezembro de 2012",
    title: "Padre Ricardo Moreira assume",
    desc: "Toma posse o Padre Ricardo Moreira, oriundo da Paróquia de São Francisco e Santa Clara no Turú, para onde se transfere o Frei Luis Henrique.",
    images: [
      {
        src: "https://pscjslz.com.br/wp-content/uploads/2023/09/image-20-1024x604.png",
        alt: "Posse do Padre Ricardo Moreira",
      },
    ],
  },
  {
    date: "28 de fevereiro de 2020",
    title: "Padre Jânio Reis assume a paróquia",
    desc: "Toma posse o novo pároco, Padre Jânio Reis, assumindo a liderança pastoral da comunidade.",
    images: [
      {
        src: "https://pscjslz.com.br/wp-content/uploads/2023/09/image-22.png",
        alt: "Padre Jânio Reis",
      },
    ],
  },
  {
    date: "23 de março de 2020",
    title: "Pandemia da COVID-19",
    desc: "A Arquidiocese suspende as missas presenciais em razão da pandemia da COVID-19. Em 5 de março de 2020 foi decretado o lockdown no Maranhão. Em 3 de julho de 2020, após quase 4 meses, houve o retorno das missas presenciais, com as primeiras celebrações dedicadas às famílias enlutadas.",
  },
  {
    date: "16 de setembro de 2020",
    title: "Centro de Acolhimento SCJ",
    desc: "A partir do cenário sombrio e angustiante da pandemia, surge o Centro de Acolhimento Sagrado Coração de Jesus, ampliando o alcance social da paróquia.",
    images: [
      {
        src: "https://pscjslz.com.br/wp-content/uploads/2023/09/image-23.png",
        alt: "Centro de Acolhimento SCJ",
      },
    ],
    highlight: true,
  },
  {
    date: "2020",
    title: "Reforma e modernização",
    desc: "Mesmo em meio à pandemia, acontecem: reforma do telhado da Igreja Matriz, reforma dos banheiros e salas paroquiais, substituição do sistema de som e informatização completa da Paróquia, com digitalização de toda a documentação e arquivo.",
  },
  {
    date: "26 de setembro de 2021",
    title: "Campanha Melhorando a Casa do Senhor",
    desc: "Ocorre o lançamento da Campanha Melhorando a Casa do Senhor, com o objetivo de reformar a Igreja Matriz — instalar ar condicionado, substituir forro, iluminação, janelas e grades, estampar a via sacra nas janelas, pintar as portas e reformar o altar.",
    images: [
      {
        src: "https://pscjslz.com.br/wp-content/uploads/2023/09/image-24.png",
        alt: "Campanha Melhorando a Casa do Senhor",
      },
    ],
  },
  {
    date: "Junho de 2023",
    title: "Conclusão da reforma da Igreja Matriz",
    desc: "Após quase 2 anos da Campanha Melhorando a Casa do Senhor, são instalados os equipamentos de ar condicionado. Além disso, o forro, a iluminação, as janelas e as grades foram substituídas; a via sacra foi estampada nas janelas; o altar ganhou uma nova arte; e as paredes foram pintadas com acabamento em gesso.",
    images: [
      {
        src: "https://pscjslz.com.br/wp-content/uploads/2023/09/IMG_4977-1024x768.jpeg",
        alt: "Igreja Matriz reformada em 2023",
      },
    ],
    highlight: true,
  },
];

// ─── Components ───────────────────────────────────────────────────────────────

function PageHero() {
  return (
    <section className="page-hero">
      <div className="page-hero-overlay" aria-hidden="true" />
      <div className="container page-hero-content">
        <nav className="breadcrumb" aria-label="Navegação estrutural">
          <a href="/">Início</a>
          <span aria-hidden="true">/</span>
          <a href="/paroquia">Paróquia</a>
          <span aria-hidden="true">/</span>
          <span>História</span>
        </nav>
        <h1>História da Paróquia</h1>
        <p>
          Mais de quatro décadas de fé, serviço e comunidade no coração do
          Bequimão.
        </p>
        <div className="page-hero-stats">
          {[
            { num: "1979", label: "Fundação" },
            { num: "1997", label: "Elevação a Paróquia" },
            { num: "2008", label: "Igreja Matriz" },
            { num: "2020", label: "Centro de Acolhimento" },
          ].map((s) => (
            <div key={s.label} className="hero-pill">
              <strong>{s.num}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="timeline-section">
      <div className="container">
        <div className="timeline-intro">
          <span className="eyebrow">Linha do Tempo</span>
          <h2>De 1979 até hoje</h2>
          <p>
            A história da PSCJ é a história de uma comunidade que cresceu junto
            — na fé, na fraternidade e no serviço.
          </p>
        </div>

        <div className="timeline-track">
          {events.map((ev, i) => (
            <article
              key={i}
              className={`timeline-event ${ev.highlight ? "highlighted" : ""} ${
                i % 2 === 0 ? "left" : "right"
              }`}
            >
              {/* Connector dot */}
              <div className="event-dot" aria-hidden="true">
                {ev.highlight && (
                  <div className="event-dot-ring" aria-hidden="true" />
                )}
              </div>

              {/* Card */}
              <div className="event-card">
                <time className="event-date">{ev.date}</time>
                <h3 className="event-title">{ev.title}</h3>
                <p className="event-desc">{ev.desc}</p>

                {ev.images && ev.images.length > 0 && (
                  <div
                    className={`event-images count-${ev.images.length}`}
                    aria-label="Fotos históricas"
                  >
                    {ev.images.map((img, j) => (
                      <figure key={j} className="event-figure">
                        <div className="event-img-wrap">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(max-width: 768px) 90vw, 380px"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        {img.caption && (
                          <figcaption>{img.caption}</figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}

          {/* Central spine */}
          <div className="timeline-spine" aria-hidden="true" />
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
          <h2>Faça parte dessa história</h2>
          <p>
            A PSCJ é feita de pessoas. Venha celebrar, servir e crescer na fé
            ao lado da nossa comunidade.
          </p>
        </div>
        <div className="cta-buttons">
          <a href="/" className="btn-white">
            <i className="ti ti-home" aria-hidden="true" /> Página inicial
          </a>
          <a
            href="https://wa.me/5598988440733"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white"
          >
            <i className="ti ti-brand-whatsapp" aria-hidden="true" /> Fale
            conosco
          </a>
        </div>
      </div>
    </section>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">
        <span className="brand-cross">
          <i className="ti ti-cross" aria-hidden="true" />
        </span>
        <span className="brand-text">
          <strong>PSCJ</strong>
          <span>Sagrado Coração de Jesus</span>
        </span>
      </a>
      <ul className="navbar-links">
        {[
          { label: "Início", href: "/" },
          { label: "Paróquia", href: "/paroquia" },
          { label: "Avisos", href: "/avisos" },
          { label: "Notícias", href: "/noticias" },
          { label: "Galeria", href: "/galeria" },
        ].map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
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
        <a href="/eventos" className="btn-nav-cta">
          Eventos
        </a>
      </div>
    </nav>
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
            <a href="/">Início</a>
            <a href="/paroquia">Paróquia</a>
            <a href="/paroquia/historia">História</a>
            <a href="/paroquia/grupos">Grupos e Pastorais</a>
            <a href="/avisos">Avisos</a>
            <a href="/noticias">Notícias</a>
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
          <span>
            © 1997–2026 Paróquia Sagrado Coração de Jesus — Bequimão
          </span>
          <span>Desenvolvido pela PASCOM</span>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HistoriaPage() {
  return (
    <>
      {/*
       * Adicione no app/layout.tsx:
       * <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
       * <link href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" rel="stylesheet" />
       *
       * Arquivo deve ficar em: app/paroquia/historia/page.tsx
       */}
      <style>{css}</style>
      <Navbar />
      <main>
        <PageHero />
        <TimelineSection />
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
  font-size: 13px; font-weight: 600; padding: 9px 20px; border-radius: 8px;
  transition: background 0.15s;
}
.btn-nav-cta:hover { background: var(--red-d); }

/* ── PAGE HERO ── */
.page-hero {
  position: relative; min-height: 380px;
  background: linear-gradient(160deg, var(--red-d) 0%, var(--red) 60%, #d63050 100%);
  display: flex; align-items: center;
  overflow: hidden;
}
.page-hero::before {
  content: '';
  position: absolute; inset: 0;
  background-image:
    repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.03) 50px, rgba(255,255,255,0.03) 51px),
    repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.03) 50px, rgba(255,255,255,0.03) 51px);
  pointer-events: none;
}
.page-hero-overlay { position: absolute; inset: 0; pointer-events: none; }
.page-hero-content {
  position: relative; z-index: 1; padding: 4rem 2rem;
}
.breadcrumb {
  display: flex; align-items: center; gap: 8px;
  font-size: 12px; color: rgba(255,255,255,0.65);
  margin-bottom: 1.5rem; flex-wrap: wrap;
}
.breadcrumb a { color: rgba(255,255,255,0.65); transition: color 0.15s; }
.breadcrumb a:hover { color: var(--white); }
.breadcrumb span { color: rgba(255,255,255,0.4); }
.page-hero-content h1 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(3rem, 7vw, 5.5rem);
  color: var(--white); line-height: 0.9; letter-spacing: 0.02em;
  margin-bottom: 1rem;
}
.page-hero-content p {
  font-size: 16px; color: rgba(255,255,255,0.75);
  max-width: 520px; line-height: 1.7; margin-bottom: 2rem;
}
.page-hero-stats {
  display: flex; gap: 10px; flex-wrap: wrap;
}
.hero-pill {
  display: flex; flex-direction: column;
  background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2);
  border-radius: 8px; padding: 10px 18px; text-align: center;
  min-width: 100px;
}
.hero-pill strong {
  font-family: 'Bebas Neue', sans-serif; font-size: 1.5rem;
  color: var(--white); letter-spacing: 0.04em; line-height: 1;
}
.hero-pill span {
  font-size: 10px; color: rgba(255,255,255,0.6);
  text-transform: uppercase; letter-spacing: 0.08em; margin-top: 3px;
}

/* ── EYEBROW / SECTION COMMONS ── */
.eyebrow {
  display: block; font-size: 11px; font-weight: 700;
  letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--red); margin-bottom: 0.5rem;
}

/* ── TIMELINE SECTION ── */
.timeline-section { padding: 5rem 0 6rem; background: var(--cream); }
.timeline-intro {
  text-align: center; max-width: 560px; margin: 0 auto 4rem;
}
.timeline-intro h2 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2rem, 4vw, 3rem); color: var(--text);
  letter-spacing: 0.02em; line-height: 1; margin-bottom: 0.75rem;
}
.timeline-intro p { font-size: 15px; color: var(--muted); line-height: 1.7; }

/* Track wrapper */
.timeline-track {
  position: relative; padding: 0 0 2rem;
}
.timeline-spine {
  position: absolute; top: 0; bottom: 0;
  left: 50%; transform: translateX(-50%);
  width: 2px; background: var(--border);
  z-index: 0;
}

/* Each event */
.timeline-event {
  position: relative; z-index: 1;
  display: flex; align-items: flex-start;
  margin-bottom: 3rem;
}
.timeline-event.left {
  flex-direction: row;
  padding-right: calc(50% + 40px);
}
.timeline-event.right {
  flex-direction: row-reverse;
  padding-left: calc(50% + 40px);
}

/* Dot */
.event-dot {
  position: absolute; left: 50%; top: 24px;
  transform: translateX(-50%);
  width: 14px; height: 14px;
  background: var(--red); border-radius: 50%;
  border: 3px solid var(--cream);
  box-shadow: 0 0 0 2px var(--red);
  z-index: 2; flex-shrink: 0;
}
.timeline-event.highlighted .event-dot {
  width: 18px; height: 18px;
  background: var(--red);
  box-shadow: 0 0 0 3px var(--red-l), 0 0 0 5px var(--red);
}
.event-dot-ring {
  position: absolute; inset: -6px;
  border: 2px solid var(--red-l); border-radius: 50%;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.3); }
}

/* Card */
.event-card {
  background: var(--white); border: 1px solid var(--border);
  border-radius: 12px; padding: 1.5rem 1.75rem;
  width: 100%;
  transition: box-shadow 0.2s, transform 0.2s;
}
.event-card:hover {
  box-shadow: 0 8px 32px rgba(200,16,46,0.08);
  transform: translateY(-2px);
}
.timeline-event.highlighted .event-card {
  border-top: 3px solid var(--red);
}
.event-date {
  display: inline-block;
  font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--red);
  background: var(--red-l); padding: 3px 10px; border-radius: 20px;
  margin-bottom: 10px;
}
.event-title {
  font-size: 16px; font-weight: 700; line-height: 1.35;
  margin-bottom: 8px; color: var(--text);
}
.event-desc {
  font-size: 13px; color: var(--muted); line-height: 1.75;
}

/* Images inside card */
.event-images {
  margin-top: 1rem;
  display: grid; gap: 8px;
}
.event-images.count-1 { grid-template-columns: 1fr; }
.event-images.count-2 { grid-template-columns: 1fr 1fr; }
.event-images.count-3 { grid-template-columns: 1fr 1fr 1fr; }

.event-figure { margin: 0; }
.event-img-wrap {
  position: relative; width: 100%; padding-top: 65%;
  border-radius: 8px; overflow: hidden; background: var(--cream);
}
figcaption {
  font-size: 11px; color: var(--muted); margin-top: 5px;
  text-align: center; font-style: italic;
}

/* ── CTA SECTION ── */
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
  font-size: 13px; font-weight: 700; padding: 13px 24px; border-radius: 8px;
  transition: opacity 0.15s;
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

  .timeline-spine { left: 20px; }
  .timeline-event.left,
  .timeline-event.right {
    flex-direction: column;
    padding: 0 0 0 52px;
  }
  .event-dot { left: 20px; transform: translateX(-50%); }
  .event-images.count-2,
  .event-images.count-3 { grid-template-columns: 1fr 1fr; }

  .page-hero-stats { gap: 8px; }
  .hero-pill { min-width: 80px; }

  .cta-inner { flex-direction: column; align-items: flex-start; }
  .cta-buttons { flex-direction: column; width: 100%; }
  .btn-white, .btn-outline-white { justify-content: center; }

  .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
  .footer-bottom { flex-direction: column; text-align: center; }
  .container { padding: 0 1.2rem; }
}

@media (max-width: 480px) {
  .event-images.count-2,
  .event-images.count-3 { grid-template-columns: 1fr; }
  .page-hero-stats { flex-direction: column; }
  .hero-pill { flex-direction: row; gap: 10px; align-items: center; }
}
`;