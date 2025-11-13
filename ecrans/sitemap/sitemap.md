# 🗺️ Sitemap – Plateforme d’évaluation automatique de documents

## 📋 Vue d'ensemble

Ce sitemap liste tous les écrans wireframe à générer pour la plateforme d’évaluation automatique de documents selon les checklists CEE. Les écrans sont organisés par layout (non connecté / connecté) et numérotés séquentiellement à partir de 04.

**Total d'écrans :** 20  
**Layouts :** 2 (non connecté, connecté)  
**Spécifications de référence :** `specs/05-spec-fonctionnelles.md`, `specs/04-user-stories.md` (Persona 2 – Antoine Lefèvre)

---

## 🔓 Écrans non connectés (Layout : `ecrans/layout/02-layout-non-connecte.html`)

| N°  | Nom du fichier            | Titre           | Description                                                                   | Liens vers specs                          | Statut |
| --- | ------------------------- | --------------- | ----------------------------------------------------------------------------- | ----------------------------------------- | ------ |
| 04  | `04-accueil.html`         | Accueil         | Page d'accueil présentant la plateforme, avec CTA vers connexion/inscription. | specs/00-brief.md                         | Généré |
| 05  | `05-connexion.html`       | Connexion       | Formulaire de connexion (email/mot de passe).                                 | specs/05-spec-fonctionnelles.md (Étape 1) | Généré |
| 06  | `06-inscription.html`     | Inscription     | Formulaire d'inscription pour nouveaux utilisateurs.                          | -                                         | Généré |
| 07  | `07-a-propos.html`        | À propos        | Page informative sur la plateforme.                                           | -                                         | Généré |
| 08  | `08-aide.html`            | Aide            | FAQ et guides d'utilisation.                                                  | -                                         | Généré |
| 09  | `09-confidentialite.html` | Confidentialité | Politique de confidentialité.                                                 | -                                         | Généré |
| 10  | `10-conditions.html`      | Conditions      | Conditions générales d'utilisation.                                           | -                                         | Généré |

---

## 🔐 Écrans connectés (Layout : `ecrans/layout/03-layout-connecte.html`)

| N°  | Nom du fichier                  | Titre                 | Description                                                | Liens vers specs                                       | Statut |
| --- | ------------------------------- | --------------------- | ---------------------------------------------------------- | ------------------------------------------------------ | ------ |
| 11  | `11-tableau-de-bord.html`       | Tableau de bord       | Vue d'ensemble : stats, dossiers en attente, recherche.    | specs/05-spec-fonctionnelles.md (Étape 1)              | Généré |
| 12  | `12-importer-documents.html`    | Importer documents    | Téléversement de devis PDF, détection automatique du type. | specs/05-spec-fonctionnelles.md (Étape 2)              | Généré |
| 13  | `13-selection-checklist.html`   | Sélection checklist   | Choix manuel de la fiche CEE si nécessaire.                | specs/05-spec-fonctionnelles.md (Étape 2)              | Généré |
| 14  | `14-lancement-analyse.html`     | Lancement analyse     | Confirmation et déclenchement de l'analyse automatique.    | specs/05-spec-fonctionnelles.md (Étape 3)              | Généré |
| 15  | `15-resultats-analyse.html`     | Résultats analyse     | Affichage du score, critères validés/non, filtres.         | specs/05-spec-fonctionnelles.md (Étape 4)              | Généré |
| 16  | `16-generer-rapport.html`       | Générer rapport       | Interface pour créer et télécharger le rapport PDF.        | specs/05-spec-fonctionnelles.md (Étape 5)              | Généré |
| 17  | `17-historique-analyses.html`   | Historique analyses   | Liste des analyses passées, archivées.                     | specs/05-spec-fonctionnelles.md (Étape 6)              | Généré |
| 18  | `18-statistiques-globales.html` | Statistiques globales | Tableaux de bord synthétiques, classements artisans.       | specs/05-spec-fonctionnelles.md (Étape 6)              | Généré |
| 19  | `19-gestion-utilisateurs.html`  | Gestion utilisateurs  | Admin : ajout/modif/suppression utilisateurs.              | specs/05-spec-fonctionnelles.md (Acteurs)              | Généré |
| 20  | `20-gestion-checklists.html`    | Gestion checklists    | Admin : gestion des fiches CEE et pondérations.            | specs/05-spec-fonctionnelles.md (Fonctionnalités clés) | Généré |
| 21  | `21-parametres.html`            | Paramètres            | Réglages utilisateur : seuils, notifications.              | specs/05-spec-fonctionnelles.md (Étape 6)              | Généré |
| 22  | `22-profil.html`                | Profil                | Gestion du profil utilisateur.                             | -                                                      | Généré |
| 23  | `23-centre-aide.html`           | Centre d’aide         | Aide connectée, support.                                   | -                                                      | Généré |

---

## 📝 Notes

- **Responsive design :** Tous les écrans doivent inclure le menu hamburger coulissant CSS sur mobile.
- **Navigation :** Liens inter-écrans à implémenter lors de la génération par lots.
- **Admin screens :** Écrans 19-20 réservés aux administrateurs CEE.
- **Ambiguïtés :** L'inscription (06) n'est pas explicitement mentionnée dans les specs, mais requise par le layout non connecté. Le centre d’aide (23) est distinct de l'aide publique (08) pour utilisateurs connectés.
- **Ordre de génération :** Commencer par les layouts, puis écrans non connectés, puis connectés par ordre logique d'utilisation.

---

_Dernière mise à jour : 13 novembre 2025_</content>
<parameter name="filePath">d:\_\_\_GIACV1\controldoc\ecrans\sitemap\sitemap.md
