# Drak web v9 — jeden zdroj obsahu

Tahle verze sjednocuje obsah pro homepage, Ideas i Apps.

## Architektura

- `index.html` = šablona homepage
- `ideas.html` = šablona katalogu nápadů
- `apps.html` = šablona katalogu aplikací
- `content.js` = hlavní zdroj obsahu
- `script.js` = renderování obsahu, dark mode a animace
- `style.css` = vzhled
- `media/profile.webp` = profilový obrázek / avatar

## Jak upravovat obsah

Upravuj hlavně `content.js`.

### Přidání nového nápadu

V `content.js` najdi pole:

```js
ideas: [
```

a přidej položku:

```js
{
  tag: "Idea",
  title: "Název nápadu",
  text: "Krátký popis nápadu.",
  featured: true
}
```

`featured: true` znamená, že se položka objeví i v carouselu na homepage.

### Přidání nové aplikace

V `content.js` najdi pole:

```js
apps: [
```

a přidej položku:

```js
{
  tag: "Prototype",
  title: "Název aplikace",
  text: "Krátký popis aplikace.",
  href: "apps.html",
  role: "catalog"
}
```

Role:
- `main` = hlavní velká karta na homepage
- `side` = vedlejší karta na homepage
- `catalog` = jen v katalogu Apps

## Profilová fotka

Soubor je zde:

`media/profile.webp`

Pro výměnu nahraj nový obrázek se stejným názvem.
