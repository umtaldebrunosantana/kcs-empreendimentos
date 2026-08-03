import {
  Factory,
  Zap,
  Wrench,
  BadgeCheck,
  HardHat,
  Ruler,
  X,
  Phone,
  Clock,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import heroImg from "@/assets/hero-montagem-estrutura.png.asset.json";
import equipeImg from "@/assets/equipe-kcs.png.asset.json";
import metroBhLogo from "@/assets/clientes/metro-bh.png.asset.json";
import sescLogo from "@/assets/clientes/sesc.png.asset.json";
import sestSenatLogo from "@/assets/clientes/sest-senat.png.asset.json";
import direcionalLogo from "@/assets/clientes/direcional.png.asset.json";
import delreyLogo from "@/assets/clientes/delrey.png.asset.json";
import hcUfmgLogo from "@/assets/clientes/hc-ufmg.png.asset.json";
import saoRafaelLogo from "@/assets/clientes/sao-rafael.png.asset.json";
import estruturaImg from "@/assets/servicos/estrutura-metalica.jpg.asset.json";
import galpoesImg from "@/assets/servicos/galpoes.jpg.asset.json";
import gradesImg from "@/assets/servicos/grades-portoes.jpg.asset.json";
import portaAcoImg from "@/assets/servicos/porta-aco.jpg.asset.json";
import mezaninoImg from "@/assets/servicos/mezanino.jpg.asset.json";
import guardaCorpoImg from "@/assets/servicos/guarda-corpo.jpg.asset.json";
import escadaImg from "@/assets/servicos/escada.jpg.asset.json";
import impermeabilizacaoImg from "@/assets/servicos/impermeabilizacao.jpg.asset.json";
import pinturaImg from "@/assets/servicos/pintura.jpg.asset.json";
import limpezaImg from "@/assets/servicos/limpeza.jpg.asset.json";
import { CtaButton, Counter, Logo, Reveal, WHATSAPP_URL, WhatsAppIcon } from "./primitives";

const SELOS = [
  "Mais de 20 anos de mercado",
  "Fabricação própria",
  "Equipe especializada",
  "Garantia em todos os serviços",
  "Entrega rápida",
];

const CLIENTES = [
  { nome: "Metrô BH", logo: metroBhLogo.url },
  { nome: "Sesc", logo: sescLogo.url },
  { nome: "Sest Senat", logo: sestSenatLogo.url },
  { nome: "Direcional Engenharia", logo: direcionalLogo.url },
  { nome: "Shopping Del Rey", logo: delreyLogo.url },
  { nome: "Hospital das Clínicas", logo: hcUfmgLogo.url },
  { nome: "Hospital São Rafael", logo: saoRafaelLogo.url },
];

const DIFERENCIAIS = [
  { Icon: Factory, title: "Fabricação própria", desc: "Estrutura interna completa, sem depender de terceiros" },
  { Icon: Zap, title: "Atendimento rápido", desc: "Orçamento ágil e cronograma cumprido" },
  { Icon: Wrench, title: "Montagem completa", desc: "Do projeto executivo à instalação final" },
  { Icon: BadgeCheck, title: "Garantia", desc: "Todo serviço executado com garantia contratual" },
  { Icon: HardHat, title: "Equipe especializada", desc: "Profissionais qualificados e experientes" },
  { Icon: Ruler, title: "Projetos sob medida", desc: "Soluções customizadas conforme a necessidade da obra" },
];

const SERVICOS = [
  ["Estrutura Metálica", "Sólida, resistente e econômica. Ganhe velocidade de obra, vãos livres generosos e flexibilidade total de layout.", estruturaImg.url],
  ["Galpões e Coberturas", "Proteção contra chuva, calor e umidade — operação a todo vapor independente do clima.", galpoesImg.url],
  ["Grades e Portões", "Mais controle de acesso e segurança para empresas, indústrias e residências.", gradesImg.url],
  ["Porta de Aço Automática", "Uma junção de segurança e praticidade — zero esforço manual e total comodidade no dia a dia.", portaAcoImg.url],
  ["Mezaninos Metálicos", "Para estoque, escritório ou área operacional — dobre sua área útil sem precisar ampliar o imóvel.", mezaninoImg.url],
  ["Guarda-Corpo e Corrimão", "Fabricação e instalação conforme NBR 14718, evitando acidentes, interdições e multas.", guardaCorpoImg.url],
  ["Escadas Metálicas", "Fabricação e instalação conforme NR12 garantindo segurança e circulação ágil entre os níveis do imóvel.", escadaImg.url],
  ["Impermeabilização", "Protege lajes, telhados, coberturas e paredes contra infiltrações e aumenta a vida útil da estrutura.", impermeabilizacaoImg.url],
  ["Pintura em Geral", "Revitalizamos estruturas metálicas, áreas internas e externas como paredes e fachadas — recuperando a proteção, o acabamento e a aparência.", pinturaImg.url],
  ["Limpeza Industrial", "Limpeza e lavagem técnica de telhados, pisos, paredes, caixas d'água, reservatórios e piscinas — removendo sujeira, mofo e resíduos acumulados.", limpezaImg.url],
] as const;


const PASSOS = [
  ["Envie seu projeto", "Compartilhe plantas, medidas ou apenas descreva a sua necessidade."],
  ["Análise técnica e visita", "Nossa equipe avalia o escopo e, quando preciso, realiza vistoria no local para garantir precisão no orçamento."],
  ["Proposta detalhada e prazo definido", "Você recebe orçamento claro, com material, prazo de fabricação e cronograma de montagem."],
  ["Fabricação e montagem completa", "Executamos tudo, da fabricação à instalação final, com agilidade, segurança e garantia."],
] as const;

const CIDADES = [
  "Belo Horizonte", "Contagem", "Betim", "Nova Lima", "Santa Luzia", "Vespasiano",
  "Ribeirão das Neves", "Pedro Leopoldo", "Sabará", "Sete Lagoas", "Itabira",
  "João Monlevade", "Caeté", "Confins", "Lagoa Santa", "Jaboticatubas",
  "Santa Bárbara", "São José da Lapa", "Serra do Cipó",
];

export function Hero() {
  return (
    <header className="relative isolate overflow-hidden bg-navy-900 text-white">
      <img
        src={heroImg.url}
        alt="Montagem de estrutura metálica executada pela KCS"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 size-full object-cover object-[30%_center] opacity-75"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(2,12,27,0.95) 0%, rgba(2,12,27,0.75) 40%, rgba(2,12,27,0.45) 65%, rgba(2,12,27,0.15) 85%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/80 via-navy-900/45 to-navy-900/80 sm:from-navy-950/55 sm:via-navy-900/30 sm:to-navy-900/55 lg:from-navy-950/30 lg:via-transparent lg:to-navy-900/35"
        aria-hidden="true"
      />

      <nav className="container-kcs flex items-center justify-between py-6">
        <Logo tone="light" />
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-md border border-white/25 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:inline-flex"
        >
          <Phone className="size-4" aria-hidden="true" />
          (31) 98108-3235
        </a>
      </nav>

      <div className="container-kcs grid gap-10 pb-20 pt-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pb-28 lg:pt-20">
        <div>
          <p className="mb-5 inline-block border-l-2 border-signal pl-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
            Belo Horizonte e Região Metropolitana
          </p>
          <h1 className="max-w-3xl text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            Estruturas Metálicas, Serralheria, Impermeabilização e Pintura em Geral.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Há mais de 20 anos atendendo indústrias, construtoras, comércios e condomínios de BH e
            Região com agilidade, qualidade e segurança.
          </p>
          <div className="mt-9">
            <CtaButton size="lg">Orçamento no WhatsApp</CtaButton>
          </div>
        </div>
      </div>

      <div className="border-y border-white/10 bg-navy-950/60 py-4">
        <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <ul className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
            {[...SELOS, ...SELOS].map((selo, i) => (
              <li
                key={i}
                className="flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-medium text-white/85"
              >
                <span className="text-signal" aria-hidden="true">
                  ✔
                </span>
                {selo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export function Clientes() {
  return (
    <section aria-labelledby="clientes-title" className="bg-background py-14">
      <div className="container-kcs">
        <h2 id="clientes-title" className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-steel-500">
          Alguns dos nossos clientes
        </h2>
      </div>
      <div className="mt-8 flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <ul className="flex shrink-0 animate-marquee items-center gap-6 pr-6">
          {[...CLIENTES, ...CLIENTES].map(({ nome, logo }, i) => (
            <li
              key={i}
              className="flex h-20 w-56 shrink-0 items-center justify-center rounded-md border border-border bg-background px-6"
            >
              <img
                src={logo}
                alt={`Logo ${nome}`}
                loading="lazy"
                className="max-h-12 w-auto max-w-full object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Dores() {
  return (
    <section aria-labelledby="dores-title" className="bg-gray-100 py-20">
      <div className="container-kcs grid gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 id="dores-title" className="text-3xl leading-tight sm:text-4xl">
            Quem gerencia obra sabe...
          </h2>
          <p className="mt-6 text-base leading-relaxed text-steel-500">
            Fornecedor que não entrega no prazo, não segue projeto ou não tem estrutura para atender
            sua demanda gera prejuízo, retrabalho e multas contratuais.
          </p>
          <p className="mt-6 font-semibold">Se você já passou por:</p>
          <ul className="mt-4 space-y-3">
            {[
              "Fornecedor que atrasa cronograma de obra",
              "Estrutura fora das normas técnicas (NBR)",
              "Falta de capacidade produtiva",
              "Comunicação lenta e sem retorno",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-steel-500">
                <X className="mt-0.5 size-5 shrink-0 text-destructive" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120} className="lg:pt-16">
          <div className="rounded-lg border-l-4 border-signal bg-background p-8">
            <p className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
              Com a KCS será diferente.
            </p>
            <p className="mt-4 leading-relaxed text-steel-500">
              Trabalhamos no cronograma definido, com equipe técnica especializada e fabricação
              própria — garantindo entregas dentro do prazo e do escopo.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Diferenciais() {
  return (
    <section aria-labelledby="diferenciais-title" className="bg-background py-20">
      <div className="container-kcs grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-display text-6xl font-bold leading-none text-navy-900 sm:text-7xl">
            <Counter />
          </p>
          <h2 id="diferenciais-title" className="mt-5 text-xl font-semibold leading-relaxed text-steel-500">
            Projetos sob medida para empresas, indústrias, construtoras, comércios, condomínios e
            residências.
          </h2>
        </div>
        <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
          {DIFERENCIAIS.map(({ Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="flex gap-4">
                <Icon className="size-6 shrink-0 text-signal" strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-steel-500">{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Servicos() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="bg-gray-100 py-20">
      <div className="container-kcs">
        <h2 id="servicos-title" className="text-3xl sm:text-4xl">
          Serviços
        </h2>
        <p className="mt-3 max-w-2xl text-steel-500">
          Soluções completas em estruturas metálicas, serralheria, impermeabilização e pintura.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICOS.map(([title, desc, img], i) => (
            <Reveal key={title} delay={(i % 4) * 70}>
              <article className="group h-full overflow-hidden rounded-md border border-border bg-background transition-shadow duration-200 hover:shadow-md">
                <img
                  src={img}
                  alt={`${title} — serviço executado pela KCS em Belo Horizonte`}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg leading-snug">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-500">{desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ComoFunciona() {
  return (
    <section aria-labelledby="como-title" className="bg-navy-900 py-20 text-white">
      <div className="container-kcs">
        <h2 id="como-title" className="text-3xl sm:text-4xl">
          Como funciona?
        </h2>

        <ol className="relative mt-12 grid gap-10 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute left-6 top-6 hidden h-px w-full bg-white/15 lg:block"
          />
          {PASSOS.map(([title, desc], i) => (
            <Reveal key={title} delay={i * 90}>
              <li className="relative flex gap-4 lg:block">
                <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-white/25 bg-navy-950 font-display text-lg font-bold text-signal">
                  {i + 1}
                </span>
                <div className="lg:mt-5 lg:pr-6">
                  <h3 className="text-lg leading-snug">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <div className="mt-14">
          <CtaButton>Solicitar Meu Orçamento Agora</CtaButton>
        </div>
      </div>
    </section>
  );
}

export function AreaAtuacao() {
  return (
    <section aria-labelledby="area-title" className="bg-background py-20">
      <div className="container-kcs">
        <h2 id="area-title" className="max-w-3xl text-3xl sm:text-4xl">
          Atendemos Belo Horizonte e Toda a Região Metropolitana
        </h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {CIDADES.map((cidade) => (
            <li key={cidade}>
              <span className="inline-flex items-center gap-2 rounded-md border border-border bg-gray-100 px-4 py-2 text-sm font-medium text-navy-900">
                <MapPin className="size-4 text-steel-500" strokeWidth={1.5} aria-hidden="true" />
                {cidade}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-steel-500">
          Sua cidade não está na lista?{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-navy-900 underline underline-offset-4"
          >
            Fale com a gente
          </a>{" "}
          e verifique a cobertura para o seu endereço.
        </p>
      </div>
    </section>
  );
}

export function Sobre() {
  return (
    <section aria-labelledby="sobre-title" className="bg-gray-100 py-20">
      <div className="container-kcs grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 id="sobre-title" className="text-3xl sm:text-4xl">
            Sobre nós
          </h2>
          <p className="mt-6 leading-relaxed text-steel-500">
            A KCS nasceu em 2025 trazendo na bagagem mais de 20 anos de experiência em projetos de
            estrutura metálica e serralheria. Thalisson, responsável geral, seguiu os passos do pai
            e ingressou no setor ainda jovem. Hoje, desenvolve projetos de todos os portes com
            fabricação própria e equipe especializada, o que garante controle total de qualidade,
            prazo e atendimento.
          </p>
          <p className="mt-4 leading-relaxed text-steel-500">
          </p>
        </Reveal>
        <Reveal delay={100}>
          <img
            src={equipeImg.url}
            alt="Equipe da KCS Serralheria e Estruturas Metálicas reunida na fábrica em Belo Horizonte"
            width={1080}
            height={1080}
            loading="lazy"
            className="w-full rounded-md object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

export function CtaFinal() {
  return (
    <section aria-labelledby="cta-title" className="bg-navy-900 py-24 text-center text-white">
      <div className="container-kcs">
        <h2 id="cta-title" className="mx-auto max-w-3xl text-3xl leading-tight sm:text-4xl">
          Se você deseja uma estrutura feita para durar…
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-white/75">
          Fale agora com a KCS e receba um orçamento rápido, sem compromisso.
        </p>
        <div className="mt-10">
          <CtaButton size="lg">Falar com a KCS</CtaButton>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-950 py-16 text-white/70">
      <div className="container-kcs grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-6 text-sm">
            <span className="font-semibold text-white">KCS Empreendimentos</span> — CNPJ:{" "}
            <span>60.308.945/0001-05</span>
          </p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed">
            Especialista em estruturas metálicas, serralheria industrial, galpões, mezaninos,
            portões, grades, escadas e corrimãos em Belo Horizonte e região metropolitana.
          </p>
          <ul className="mt-6 flex gap-3" data-placeholder="{{SOCIAL_ICON}}">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <li key={i}>
                <a
                  href="#"
                  aria-label="Rede social da KCS"
                  className="inline-flex size-10 items-center justify-center rounded-md border border-white/20 transition-colors hover:bg-white/10"
                >
                  <Icon className="size-4" strokeWidth={1.5} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="space-y-4 text-sm">
          <li className="flex gap-3">
            <WhatsAppIcon className="mt-0.5 size-4 shrink-0 text-signal" />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tnum font-semibold text-white underline underline-offset-4"
            >
              (31) 98108-3235
            </a>
          </li>
          <li className="flex gap-3">
            <Clock className="mt-0.5 size-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
            Seg a Sex - 07h às 17h | Sáb - 07h às 16h
          </li>
          <li className="flex gap-3">
            <MapPin className="mt-0.5 size-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
            R. Nélia, 271 - São Tomaz, Belo Horizonte - MG, 31741-130
          </li>
        </ul>
      </div>
      <div className="container-kcs mt-12 border-t border-white/10 pt-6 text-xs">
        © {new Date().getFullYear()} KCS Serralheria e Estruturas Metálicas. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
