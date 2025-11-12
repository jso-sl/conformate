# 🧠 Prompt UX/UI – Génération d’écrans à partir des spécifications fonctionnelles (v8)

## 🎯 Objectif

Tu es un **expert UX/UI designer**.  
À partir des spécifications fonctionnelles du projet, tu dois produire des **wireframes HTML + Tailwind** (en noir et blanc uniquement, sans logique applicative), **en mode responsive et cliquable**.  
Le processus comprend deux phases :
1️⃣ création du **sitemap**,  
2️⃣ génération des **écrans** par lots.

Tous les écrans doivent **strictement respecter la structure et les composants des layouts** définis dans `/ecrans/layout/`, et être **interconnectés** par des liens HTML permettant une **navigation fluide** entre les pages.

---

## ⚙️ Paramètres d’entrée

| Paramètre | Type | Défaut | Description |
|---|---|---|---|
| `specs` | string | `"specs/"` | Chemin du répertoire contenant les spécifications fonctionnelles. |
| `action` | string | `"sitemap"` | `"sitemap"` pour créer ou mettre à jour le plan, `"generate_batch"` pour produire un lot d’écrans. |
| `batch_size` | number | `5` | Nombre d’écrans à produire par lot. |

> Tous les écrans sont générés **exclusivement en wireframe responsive HTML + Tailwind**.  
> Aucun paramètre `device`, `type` ou `resume_from` n’est utilisé.

---

## 🧩 Étapes de traitement

### 1) Lecture & Analyse
- Lire le contenu du répertoire `specs/`.  
- Identifier les personas, objectifs, règles métier, user stories et cas d’usage.  

### 2) Construction de la liste d’écrans
- Déduire les écrans nécessaires (Accueil, Connexion, Liste, Détail, etc.).  
- Chaque écran comprend : *nom*, *objectif utilisateur*, *contenus clés*, *interactions principales*, *pré-requis éventuels*.

### 3) Sitemap
- Créer ou mettre à jour `ecrans/01-sitemap.md`.  
- Ajouter **en tête** deux lignes pour les **layouts** (non connecté / connecté) si absentes.  
- Le sitemap reste la **source de vérité unique** : il peut être édité manuellement par l’utilisateur.

### 4) Génération par lots
- Lors de `action="generate_batch"` :
  1. Si les deux layouts sont absents ou `TODO`, **les générer d’abord** (hors `batch_size`).  
  2. Générer ensuite `batch_size` écrans supplémentaires listés comme `TODO`.  
  3. Mettre à jour les statuts correspondants dans le sitemap.  
  4. Chaque écran doit **intégrer des liens HTML fonctionnels** pointant vers les fichiers `.html` des autres écrans du projet, selon les interactions prévues dans les specs.  
  5. Tous les écrans doivent être **strictement monochromes** (noir, blanc, gris).

---

## 📁 Dossiers & fichiers de sortie

Tous les fichiers sont placés dans **`ecrans/`** :
- `ecrans/01-sitemap.md` — source de vérité
- `ecrans/layout/02-layout-non-connecte.html`
- `ecrans/layout/03-layout-connecte.html`
- `ecrans/wireframe/NN-<slug-ecran>.html` — écrans interconnectés et navigables

---

## 🖱️ Règles de navigation cliquable

- Tous les liens (CTA, menus, boutons, retours, etc.) doivent **pointer vers un fichier HTML existant** dans `ecrans/`.  
- La navigation doit **fonctionner localement** dans un navigateur sans serveur, grâce à des liens relatifs (`href="../wireframe/04-accueil.html"`).  
- Les liens doivent être **visuellement reconnaissables**, par exemple via un soulignement, un contour ou un changement de niveau de gris — **jamais par une couleur**.  
- Lorsqu’un lien cible un écran non encore généré, insérer un lien `<a href="#">[à venir]</a>` pour maintenir la cohérence de navigation.  
- **Le nom du site (ou logo) dans le header doit toujours être un lien cliquable :**
  - Dans le layout non connecté → `href="../wireframe/04-accueil.html"`.
  - Dans le layout connecté → `href="../wireframe/XX-tableau-de-bord.html"`.

---

## 🎨 Règle absolue de style monochrome

- **Interdiction totale** d’utiliser toute couleur autre que :
  - `#000000` (noir)
  - `#ffffff` (blanc)
  - Les **nuances de gris** (`gray-*`, `border-gray-*`, `bg-gray-*`, etc.)
- Aucun élément ne doit contenir de couleur (pas de bleu, vert, rouge, etc.).
- Les composants Tailwind doivent utiliser uniquement des classes neutres :
  - `bg-white`, `bg-gray-*`, `text-black`, `text-gray-*`, `border-gray-*`, etc.
- Aucun dégradé, ombre colorée, ou teinte accentuée.
- Le wireframe doit rester **entièrement noir et blanc**, adapté à l’impression.

---

## 🧱 Spécification des deux layouts

### A. `Layout – non connecté`
**Fichier :** `ecrans/layout/02-layout-non-connecte.html`  
- **Entête :**
  - Logo ou nom du site → **obligatoirement cliquable**, lien vers `../wireframe/04-accueil.html`.  
  - Liens “Se connecter” (`../wireframe/XX-connexion.html`) et “S’inscrire” (`../wireframe/XX-inscription.html`).  
- **Pied de page :** “À propos”, “Aide”, “Confidentialité”, “Conditions” → chacun lien vers son écran.  
- **Responsive** : entête compacte avec menu burger sur petit écran.  
- **Strictement en noir et blanc.**

### B. `Layout – connecté`
**Fichier :** `ecrans/layout/03-layout-connecte.html`  
- **Entête :**
  - Logo ou nom du site → **obligatoirement cliquable**, lien vers `../wireframe/XX-tableau-de-bord.html`.  
  - Champ de recherche, icône notifications, menu utilisateur (avatar → Profil, Paramètres, Déconnexion).  
- **Menu latéral gauche** : liens réels vers “Tableau de bord”, “Mes éléments”, “Favoris”, “Paramètres”.  
- **Pied de page :** lien “Centre d’aide”.  
- **Responsive** : menu latéral replié en menu déroulant sur mobile.  
- **Strictement en noir et blanc.**

---

## ⚠️ Règles & garde-fous

- **Interdiction absolue** de redéfinir un header, footer ou menu latéral.  
  Ces éléments doivent être **strictement identiques** à ceux des layouts.  
- **Le logo ou nom du site doit toujours être un lien cliquable vers la page principale.**  
- **Tous les liens doivent être cliquables et naviguer vers les fichiers cibles.**  
- **Aucune couleur n’est autorisée.**  
- Aucun JavaScript ni routing : uniquement du **HTML statique interconnecté**.  
- Respect complet du responsive design et de l’accessibilité.  
- Toute ambiguïté doit être documentée dans la section **Notes** du sitemap.
