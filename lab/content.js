/**
 * ============================================================================
 * content.js
 * ============================================================================
 *
 * CENTRÁLNÍ OBSAHOVÝ SOUBOR WEBU DRAK
 *
 * Tady upravuješ obsah webu:
 * - texty na homepage,
 * - katalog nápadů,
 * - katalog aplikací,
 * - kontakty,
 * - patičku.
 *
 * Důležité:
 * NEMĚŇ názvy hlavních objektů:
 * hero, profile, concept, ideasPage, ideasPreview, ideas,
 * appsPage, appsPreview, apps, nextStep, timeline, contact, footer
 *
 * Tyto názvy používá script.js.
 * Pokud je přejmenuješ, web se nebude správně renderovat.
 */

const SITE_CONTENT = {
  /**
   * HERO
   * --------------------------------------------------------------------------
   * Hlavní úvodní sekce homepage.
   */
  hero: {
    // Malý modrý text nad hlavním nadpisem.
    eyebrow: "Osobní web · portfolio · storage nápadů",

    // Hlavní velký nadpis homepage.
    title: "Stavím věci, které dávají smysl.",

    // Krátký text pod hlavním nadpisem.
    text: "Jsem Ondřej. Tohle je můj digitální prostor pro nápady, aplikace, experimenty a projekty, které postupně rostou z poznámky do funkčního řešení.",

    // Text hlavního tlačítka.
    primaryButton: "Prohlédnout aplikace",

    // Text vedlejšího tlačítka.
    secondaryButton: "Otevřít nápady"
  },

  /**
   * PROFILE
   * --------------------------------------------------------------------------
   * Pravá karta v úvodní hero sekci.
   *
   * Profilová fotka:
   * - soubor je v media/profile.webp
   * - pokud obrázek chybí, zobrazí se hodnota initial
   */
  profile: {
    initial: "D",
    metaLeft: "Digital workspace",
    metaRight: "2026",
    title: "Nekonečný prostor pro tvorbu.",
    text: "Nápady, prototypy, mini aplikace a experimenty s AI."
  },

  /**
   * CONCEPT
   * --------------------------------------------------------------------------
   * Sekce „Více než vizitka. Živý workspace.“
   *
   * tiles:
   * - každá položka je jedna interaktivní dlaždice
   * - preview je vidět vždy
   * - detail se na desktopu zobrazí po najetí myší
   * - na mobilu je detail vidět rovnou
   */
  concept: {
    eyebrow: "Kdo jsem",
    title: "Data, technologie.<br>A chuť tvořit.",
    lead: "Tenhle web není jen vizitka. Je to osobní rozcestník, kde se potkává moje profesní zaměření, praktické nápady a záliby, které mají společné jedno: rád věci promýšlím, stavím a posouvám dál.",

    tiles: [
      {
		id: "data-architecture",
        tag: "Profese",
        title: "Datový architekt",
        preview: "Navrhuji datová řešení, modely a systémy, které mají být srozumitelné, udržitelné a použitelné.",
        detail: "Baví mě hledat rovnováhu mezi technickou přesností, dlouhodobou architekturou a tím, aby výsledné řešení dávalo smysl lidem, kteří s daty skutečně pracují."
      },
      {
        id: "hands-on-making",
        tag: "Tvorba",
        title: "Rukodělné věci",
        preview: "Mám rád praktickou tvorbu, opravy, 3D tisk, práci s materiálem a věci, u kterých je vidět výsledek.",
        detail: "Ať jde o dílnu, tiskárnu, drobný prototyp nebo fyzický výrobek, baví mě proces, kdy se nápad postupně mění v něco hmatatelného."
      },
      {
		id: "technology-and-ideas",
        tag: "Záliby",
        title: "Technologie a nápady",
        preview: "Zajímá mě AI, weby, automatizace, chytré nástroje a malé aplikace, které řeší konkrétní problém.",
        detail: "Tenhle web je i moje experimentální plocha — místo, kde si můžu zkoušet nové přístupy, ukládat nápady a postupně z nich dělat funkční mini produkty."
      }
    ]
  },

  /**
   * IDEAS PAGE
   * --------------------------------------------------------------------------
   * Nadpisová část stránky ideas.html.
   */
  ideasPage: {
    eyebrow: "Storage nápadů",
    title: "Ideas",
    lead: "Katalog nápadů, konceptů a poznámek. Některé jsou jen semínka. Jiné se časem přesunou do aplikací."
  },

  /**
   * IDEAS PREVIEW
   * --------------------------------------------------------------------------
   * Náhled nápadů na homepage.
   *
   * Samotné položky se berou z pole ideas.
   * Na homepage se zobrazí jen položky s featured: true.
   */
  ideasPreview: {
    eyebrow: "Ideas preview",
    title: "Nápady jako backlog budoucích věcí.",
    lead: "Krátký výběr z katalogu nápadů. Horizontální carousel funguje jako náhled. Celý katalog je na samostatné stránce.",
    button: "Otevřít celý katalog Ideas"
  },

  /**
   * IDEAS
   * --------------------------------------------------------------------------
   * Centrální katalog nápadů.
   *
   * Vlastnosti:
   * id       = interní jednoznačný název bez mezer a diakritiky
   * tag      = štítek/stav položky
   * title    = název karty
   * text     = krátký popis
   * href     = odkaz; pokud není potřeba, nech null
   * featured = true znamená, že se položka zobrazí i na homepage
   */
  ideas: [
    {
      id: "personal-knowledge-base",
      tag: "Idea",
      title: "Osobní knowledge base",
      text: "Systém pro ukládání poznámek, odkazů, promptů a pracovních postupů.",
      href: null,
      featured: true
    },
    {
      id: "ai-landing-page-generator",
      tag: "Prototype",
      title: "AI generátor landing pages",
      text: "Nástroj, který z krátkého zadání připraví jednoduchou HTML stránku.",
      href: null,
      featured: true
    },
    {
      id: "personal-goals-dashboard",
      tag: "Experiment",
      title: "Dashboard osobních cílů",
      text: "Lehký dashboard pro sledování návyků, projektů a osobních metrik.",
      href: null,
      featured: true
    },
    {
      id: "public-changelog",
      tag: "Backlog",
      title: "Veřejný changelog",
      text: "Přehled změn, verzí, nasazených úprav a dalších plánů webu.",
      href: null,
      featured: false
    },
    {
      id: "animated-experiments",
      tag: "Later",
      title: "Animované experimenty",
      text: "Samostatná sekce pro vizuální efekty, animovaná pozadí a frontend pokusy.",
      href: null,
      featured: true
    },
    {
      id: "idea-to-app",
      tag: "Next",
      title: "Z nápadu do aplikace",
      text: "Jakmile nápad dozraje, přesune se do sekce Apps jako prototyp nebo hotový nástroj.",
      href: "apps.html",
      featured: false
    }
  ],

  /**
   * APPS PAGE
   * --------------------------------------------------------------------------
   * Nadpisová část stránky apps.html.
   */
  appsPage: {
    eyebrow: "Mini aplikace & prototypy",
    title: "Apps",
    lead: "Rozcestník malých aplikací, experimentů a nástrojů. Některé budou hotové, jiné zatím jen jako pracovní prototypy."
  },

  /**
   * APPS PREVIEW
   * --------------------------------------------------------------------------
   * Náhled aplikací na homepage.
   *
   * Samotné položky se berou z pole apps.
   */
  appsPreview: {
    eyebrow: "Apps preview",
    title: "Mini aplikace jako další vrstva webu.",
    lead: "Na indexu jen ochutnávka. Po rozkliknutí jdeš na Apps stránku, kde bude katalog nástrojů, prototypů a experimentů."
  },

  /**
   * APPS
   * --------------------------------------------------------------------------
   * Centrální katalog aplikací.
   *
   * Vlastnosti:
   * id       = interní jednoznačný název bez mezer a diakritiky
   * tag      = štítek/stav položky
   * title    = název karty
   * text     = krátký popis
   * href     = odkaz
   * role     = způsob zobrazení
   *            main    = hlavní velká karta na homepage
   *            side    = menší karta na homepage
   *            catalog = pouze v katalogu Apps
   * linkText = text odkazu u hlavní karty
   */
  apps: [
    {
      id: "idea-vault",
      tag: "Planned",
      title: "Idea Vault",
      text: "Jednoduchý katalog nápadů s kategoriemi, stavem a krátkým popisem.",
      href: "ideas.html",
      role: "main",
      linkText: "Prozkoumat Apps →"
    },
    {
      id: "prompt-library",
      tag: "Prototype",
      title: "Prompt Library",
      text: "Knihovna promptů pro coding, texty, práci, AI experimenty a produktivitu.",
      href: "apps.html",
      role: "side",
      linkText: null
    },
    {
      id: "css-playground",
      tag: "Experiment",
      title: "CSS Playground",
      text: "Místo pro testování animací, efektů, layoutů a vizuálních experimentů.",
      href: "apps.html",
      role: "side",
      linkText: null
    },
    {
      id: "personal-dashboard",
      tag: "Planned",
      title: "Personal Dashboard",
      text: "Malý dashboard pro přehled projektů, úkolů, cílů a poznámek.",
      href: "apps.html",
      role: "catalog",
      linkText: null
    },
    {
      id: "static-site-tools",
      tag: "Later",
      title: "Static Site Tools",
      text: "Pomocné nástroje pro práci se statickým webem, deploymentem a obsahem.",
      href: "apps.html",
      role: "catalog",
      linkText: null
    },
    {
      id: "changelog",
      tag: "Backlog",
      title: "Changelog",
      text: "Přehled verzí webu, nasazených změn a dalších plánů.",
      href: "apps.html",
      role: "catalog",
      linkText: null
    }
  ],

  /**
   * NEXT STEP
   * --------------------------------------------------------------------------
   * Textová sekce na homepage.
   *
   * paragraphs:
   * Každá položka pole se vykreslí jako samostatný odstavec.
   */
  nextStep: {
    eyebrow: "Jak bych to stavěl dál",
    title: "Homepage jako výkladní skříň. Detaily jako produktové vrstvy.",
    paragraphs: [
      "Index bych nezahltil vším. Měl by ukazovat nejlepší výřezy: nejzajímavější nápady, nejnovější aplikace, jasný důvod existence webu a jednoduché cesty dál.",
      "Detailní stránky bych použil jako katalogy. Až bude konkrétní aplikace hotová, dostane vlastní stránku typu idea-vault.html."
    ]
  },

  /**
   * TIMELINE
   * --------------------------------------------------------------------------
   * Tři kroky na homepage.
   */
  timeline: [
    {
      id: "capture-idea",
      number: "01",
      title: "Zachytit nápad",
      text: "Krátká poznámka, kategorie, stav a potenciální hodnota."
    },
    {
      id: "build-prototype",
      number: "02",
      title: "Udělat prototyp",
      text: "Jednoduchá HTML/CSS/JS verze bez složité architektury."
    },
    {
      id: "deploy-and-iterate",
      number: "03",
      title: "Nasadit a iterovat",
      text: "GitHub → Cloudflare Pages → vlastní doména → další verze."
    }
  ],

  /**
   * CONTACT
   * --------------------------------------------------------------------------
   * Kontaktní sekce na homepage.
   */
  contact: {
    eyebrow: "Kontakt",
    title: "Pojďme něco vymyslet.",
    lead: "Nápad, spolupráce, otázka nebo jen chuť mrknout, co právě vzniká.",
    email: "tvoje.emailova.adresa@example.com",
    emailLabel: "E-mail",
    linkedinUrl: "https://www.linkedin.com/in/tvuj-profil",
    linkedinLabel: "LinkedIn"
  },

  /**
   * FOOTER
   * --------------------------------------------------------------------------
   * Patička všech stránek.
   */
  footer: "© 2026 drak. Built clean, simple and without frameworks."
};
