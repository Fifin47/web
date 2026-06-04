# ondrejfila.cz

Osobní statický web nasazený přes GitHub Pages.

Repozitář slouží pro jednoduchý osobní web, neveřejně propagovanou pracovní sekci `/lab/` a menší klientské projekty bez backendu.

## Aktuální URL struktura

```text
https://ondrejfila.cz/
```

Neutrální placeholder stránky.

```text
https://ondrejfila.cz/lab/
```

Skutečný osobní web Drak.

```text
https://ondrejfila.cz/lab/apps.html
```

Katalog aplikací a projektů.

```text
https://ondrejfila.cz/lab/projekty/rodokmen/
```

Projekt Rodokmen.

## Struktura repozitáře

```text
web/
├── index.html
├── README.md
├── .gitignore
├── .nojekyll
└── lab/
    ├── index.html
    ├── ideas.html
    ├── apps.html
    ├── style.css
    ├── script.js
    ├── content.js
    ├── README_EDITACE.md
    └── projekty/
        └── rodokmen/
            └── index.html
```

## Princip

Root domény `ondrejfila.cz` záměrně obsahuje jen neutrální placeholder.

Reálný obsah webu je posunutý pod cestu:

```text
/lab/
```

Tato cesta není aktivně propagovaná. Nejde ale o skutečné zabezpečení — kdo zná přesnou URL, může obsah otevřít.

## Deployment

Hosting běží přes GitHub Pages.

Produkční větev:

```text
main
```

Publikační zdroj:

```text
main / root
```

Každý push do větve `main` automaticky nasadí novou verzi webu.

## Běžný pracovní postup

```cmd
cd /d C:\GIT\web
git pull
git status

REM upravit soubory

git status
git add .
git commit -m "Popis zmeny"
git push
```

Po pushi je potřeba ověřit příslušnou URL na doméně `ondrejfila.cz`.

## Důležité poznámky

- Repozitář je veřejný, protože GitHub Pages na bezplatném plánu publikuje z public repozitáře.
- Do repozitáře nepatří hesla, tokeny, soukromé dokumenty ani citlivá data.
- Data projektu Rodokmen se ukládají lokálně v prohlížeči přes `localStorage`.
- Zálohy Rodokmenu je potřeba dělat ručně přes export JSON.
- Soubor `style.css` neměnit bez důvodu; drží vizuální baseline webu.
- Obsah hlavního webu je řízený zejména přes `lab/content.js`.

## DNS

Doména je registrovaná u Forpsi.

DNS záznamy míří na GitHub Pages:

```text
ondrejfila.cz      A      185.199.108.153
ondrejfila.cz      A      185.199.109.153
ondrejfila.cz      A      185.199.110.153
ondrejfila.cz      A      185.199.111.153
www.ondrejfila.cz  CNAME  fifin47.github.io
```

GitHub Pages má nastavenou custom domain:

```text
ondrejfila.cz
```

HTTPS je vynucené přes GitHub Pages.
