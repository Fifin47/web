function getValueByPath(source, path) {
  return path.split(".").reduce((current, key) => current?.[key], source);
}

function setStaticContent() {
  document.querySelectorAll("[data-content]").forEach(element => {
    const value = getValueByPath(SITE_CONTENT, element.dataset.content);
    if (value !== undefined) element.textContent = value;
  });

  document.querySelectorAll("[data-html]").forEach(element => {
    const value = getValueByPath(SITE_CONTENT, element.dataset.html);
    if (value !== undefined) element.innerHTML = value;
  });
}

function createCard(item, extraClass = "feature-card") {
  const body = `
    <div class="tag">${item.tag}</div>
    <h3>${item.title}</h3>
    <p>${item.text}</p>
  `;

  if (item.href) {
    return `<a href="${item.href}" class="${extraClass} link-card">${body}</a>`;
  }

  return `<div class="${extraClass}">${body}</div>`;
}

function renderConceptTiles() {
  const container = document.getElementById("conceptTiles");
  if (!container) return;

  container.innerHTML = SITE_CONTENT.concept.tiles.map(tile => `
    <article class="adaptive-tile">
      <div class="tag">${tile.tag}</div>
      <h3>${tile.title}</h3>
      <p class="tile-preview">${tile.preview}</p>
      <p class="tile-detail">${tile.detail}</p>
    </article>
  `).join("");
}

function renderIdeasCarousel() {
  const container = document.getElementById("ideasCarousel");
  if (!container) return;

  const featuredIdeas = SITE_CONTENT.ideas.filter(item => item.featured);

  container.innerHTML = featuredIdeas.map(item => `
    <article class="carousel-card">
      <div class="tag">${item.tag}</div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function renderIdeasCatalog() {
  const container = document.getElementById("ideasCatalog");
  if (!container) return;

  container.innerHTML = SITE_CONTENT.ideas
    .map(item => createCard(item))
    .join("");
}

function renderAppsPreview() {
  const main = document.getElementById("mainAppCard");
  const side = document.getElementById("sideAppCards");
  if (!main || !side) return;

  const mainApp = SITE_CONTENT.apps.find(app => app.role === "main") || SITE_CONTENT.apps[0];
  const sideApps = SITE_CONTENT.apps.filter(app => app.role === "side").slice(0, 2);

  main.href = mainApp.href;
  main.innerHTML = `
    <div class="tag">${mainApp.tag}</div>
    <h3>${mainApp.title}</h3>
    <p>${mainApp.text}</p>
    <span class="text-link">${mainApp.linkText || "Otevřít →"}</span>
  `;

  side.innerHTML = sideApps.map(app => `
    <a href="${app.href}" class="showcase-card link-card">
      <div class="tag">${app.tag}</div>
      <h3>${app.title}</h3>
      <p>${app.text}</p>
    </a>
  `).join("");
}

function renderAppsCatalog() {
  const container = document.getElementById("appsCatalog");
  if (!container) return;

  container.innerHTML = SITE_CONTENT.apps
    .map(item => createCard(item))
    .join("");
}

function renderNextStep() {
  const container = document.getElementById("nextStepParagraphs");
  if (!container) return;

  container.innerHTML = SITE_CONTENT.nextStep.paragraphs
    .map(text => `<p>${text}</p>`)
    .join("");
}

function renderTimeline() {
  const container = document.getElementById("timeline");
  if (!container) return;

  container.innerHTML = SITE_CONTENT.timeline.map(item => `
    <div class="timeline-item">
      <span>${item.number}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </div>
  `).join("");
}

function renderContact() {
  const email = document.getElementById("emailLink");
  const linkedin = document.getElementById("linkedinLink");
  if (!email || !linkedin) return;

  email.href = `mailto:${SITE_CONTENT.contact.email}`;
  email.textContent = SITE_CONTENT.contact.emailLabel;

  linkedin.href = SITE_CONTENT.contact.linkedinUrl;
  linkedin.textContent = SITE_CONTENT.contact.linkedinLabel;
}

function initThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    if (themeToggle) themeToggle.textContent = "☀️";
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const isDark = document.body.classList.contains("dark");
      themeToggle.textContent = isDark ? "☀️" : "🌙";
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }
}

function initRevealAnimations() {
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.14 }
  );

  revealElements.forEach(element => revealObserver.observe(element));
}

setStaticContent();
renderConceptTiles();
renderIdeasCarousel();
renderIdeasCatalog();
renderAppsPreview();
renderAppsCatalog();
renderNextStep();
renderTimeline();
renderContact();
initThemeToggle();
initRevealAnimations();
