# ⚙️ Spécification Technique – Version 100% Front-End (React + Vite + Tailwind)

## 🎯 Objectif du projet

Créer une application web **responsive et mobile-first** permettant d’évaluer des documents selon une checklist de conformité, avec un score de 0 à 100, **sans backend**.  
Toutes les données sont stockées **localement** dans le navigateur (`localStorage` ou `localForage`).  
L’analyse utilise éventuellement l’API OpenAI directement côté client (clé utilisateur).

---

## 🧱 Stack Technique

- **Framework** : React 18 + TypeScript
- **Builder** : Vite
- **UI** : Tailwind CSS 4 (mobile-first)
- **Routing** : React Router
- **Stockage local** : localForage (IndexedDB fallback localStorage)
- **LLM (optionnel)** : OpenAI API (clé utilisateur locale)
- **Extraction fichiers** : pdfjs-dist, mammoth, xlsx, tesseract.js (OCR)
- **Génération de rapport PDF** : jsPDF
- **PWA** : manifest + service worker (mode offline)
- **Déploiement** : GitHub Pages

---

## 📱 UX/UI Mobile-First

- Zones tactiles larges (≥44px)
- Layout en colonnes empilées sur mobile
- Composants : uploader, jauge de score, tableau d’écarts, prévisualisation PDF
- Accessibilité : ARIA, contrastes AA, focus visibles, navigation clavier

---

## 🗂️ Structure du projet

```
front/
  /src
    /components        # UI (Uploader, Gauge, FindingsTable, PdfViewer)
    /features
      /projects        # gestion des projets
      /analysis        # pipeline d’analyse (workers, scoring)
      /checklists      # CRUD local
      /reports         # génération de rapports
    /workers
      ocr.worker.ts
      pdf.worker.ts
    /lib
      storage.ts       # gestion localForage
      extractors.ts    # PDF/DOCX/XLSX
      normalize.ts     # unités, nombres, dates
      rules.ts         # présence, regex, numericRange, selection
      llm.ts           # appels OpenAI (facultatif)
      scoring.ts
    /pages
    /styles
  index.html
  vite.config.ts
```

---

## 🧩 Modèle de données (IndexedDB via localForage)

- **projects** : dossiers analysés
- **files** : métadonnées et blobs locaux
- **checklists** : critères de conformité (CEE, Qualiopi, etc.)
- **analyses** : résultats, scores et écarts
- **reports** : rapports PDF/CSV générés
- **preferences** : clé OpenAI, thème, seuils, langue

---

## 🔍 Pipeline d’analyse (Front uniquement)

1. Extraction texte (PDF, DOCX, XLSX, IMG→OCR)
2. Normalisation des unités, nombres, dates
3. Vérification par règles déterministes (regex, bornes, options)
4. Appel LLM (facultatif, critère par critère)
5. Calcul du score global (pondérations)
6. Génération du rapport PDF téléchargeable

---

## 🧮 Scoring

\(
score = \frac{\sum w_i \times v_i}{\sum w_i} \times 100
\)

- `v_i` = 1 si conforme, 0 sinon ; ou `confidence` (0–1) si LLM
- Critères requis non conformes → malus dur
- Seuils : Conforme ≥85, Partiel 60–84, Non conforme <60

---

## 🔐 Sécurité et confidentialité

- Clé OpenAI stockée localement, jamais transmise ailleurs
- Mode « sans LLM » possible
- Données 100% locales (aucun serveur tiers)
- Option de chiffrement local (passphrase Crypto API)
- Anonymisation possible dans les rapports

---

## 🧪 Qualité et tests

- **Tests unitaires** : Vitest + React Testing Library
- **E2E** : Cypress (parcours utilisateur complet)
- **Audit Lighthouse** : performances, accessibilité, PWA
- **Lint & Format** : ESLint + Prettier

---

## ⚙️ Scripts (Vite + bun)

```bash
# Installation
bun install

# Lancement en dev
bun run dev

# Build production
bun run build

# Prévisualisation
bun run preview
```

---

## 📦 Déploiement

- Déploiement statique sur **GitHub Pages** (ou Netlify)
- Redirection SPA (`404.html → index.html`)
- Service Worker + manifest PWA

---

## 🗺️ Roadmap

1. **MVP** : import fichiers, extraction, règles simples, score global, rapport PDF, stockage local
2. **V1** : OCR, sous-scores, checklist éditable, classement artisans, import/export ZIP, i18n
3. **V1.5** : LLM optionnel, anonymisation, chiffrement local, surlignage PDF
4. **V2** : synchronisation optionnelle avec backend (future extension)
