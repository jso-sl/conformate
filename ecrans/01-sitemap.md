# Sitemap - Plateforme d'évaluation automatique de documents

## Layouts

- 02-layout-non-connecte.html: DONE
- 03-layout-connecte.html: DONE

## Écrans

### 04-accueil

**Nom :** Accueil  
**Objectif utilisateur :** Découvrir la plateforme de conformité documentaire et accéder aux fonctionnalités de connexion ou inscription.  
**Contenus clés :** Titre principal, description de la plateforme, avantages clés (gain de temps, objectivité, traçabilité), témoignages ou cas d'usage, appels à l'action (Se connecter, S'inscrire).  
**Interactions principales :** Cliquer sur "Se connecter" (vers connexion), "S'inscrire" (vers inscription), liens footer (À propos, Aide, etc.).  
**Prérequis :** Aucun (accès public).  
**Statut :** DONE

### 05-connexion

**Nom :** Connexion  
**Objectif utilisateur :** Se connecter à son compte pour accéder au tableau de bord.  
**Contenus clés :** Formulaire avec champs email/mot de passe, lien "Mot de passe oublié", lien vers inscription.  
**Interactions principales :** Saisir credentials, valider connexion (vers tableau de bord), créer compte.  
**Prérequis :** Avoir un compte utilisateur.  
**Statut :** DONE

### 06-inscription

**Nom :** Inscription  
**Objectif utilisateur :** Créer un compte pour utiliser la plateforme.  
**Contenus clés :** Formulaire avec nom, email, mot de passe, confirmation, conditions d'utilisation.  
**Interactions principales :** Remplir formulaire, valider inscription (vers connexion ou tableau de bord), lien vers connexion.  
**Prérequis :** Aucun.  
**Statut :** DONE

### 07-a-propos

**Nom :** À propos  
**Objectif utilisateur :** En savoir plus sur la plateforme et ses objectifs.  
**Contenus clés :** Présentation de la plateforme, équipe, mission, cas d'usage.  
**Interactions principales :** Navigation vers autres pages.  
**Prérequis :** Aucun.  
**Statut :** DONE

### 08-aide

**Nom :** Centre d'aide  
**Objectif utilisateur :** Trouver des réponses aux questions fréquentes et guides d'utilisation.  
**Contenus clés :** FAQ, guides pas à pas, contact support.  
**Interactions principales :** Rechercher, naviguer dans les sections.  
**Prérequis :** Aucun.  
**Statut :** DONE

### 09-confidentialite

**Nom :** Politique de confidentialité  
**Objectif utilisateur :** Comprendre comment les données sont gérées.  
**Contenus clés :** Description des données collectées, utilisation, droits utilisateur.  
**Interactions principales :** Lecture du texte.  
**Prérequis :** Aucun.  
**Statut :** DONE

### 10-conditions

**Nom :** Conditions d'utilisation  
**Objectif utilisateur :** Accepter les termes d'utilisation de la plateforme.  
**Contenus clés :** Texte des conditions, acceptation.  
**Interactions principales :** Lecture et acceptation.  
**Prérequis :** Aucun.  
**Statut :** DONE

### 11-tableau-de-bord

**Nom :** Tableau de bord  
**Objectif utilisateur :** Avoir une vue d'ensemble de ses projets et analyses récentes.  
**Contenus clés :** Statistiques (nombre de projets, scores moyens), liste des projets récents, accès rapide à créer projet.  
**Interactions principales :** Cliquer sur un projet (vers détails), créer nouveau projet, accéder à historique.  
**Prérequis :** Être connecté.  
**Statut :** DONE

### 12-creer-projet

**Nom :** Créer un projet  
**Objectif utilisateur :** Initialiser un nouveau projet d'évaluation.  
**Contenus clés :** Formulaire nom du projet, description, type de checklist.  
**Interactions principales :** Remplir formulaire, valider (vers téléversement).  
**Prérequis :** Être connecté.  
**Statut :** DONE

### 13-mes-elements

**Nom :** Mes éléments  
**Objectif utilisateur :** Gérer et consulter la liste de ses projets.  
**Contenus clés :** Liste des projets avec statut, score, date, filtres.  
**Interactions principales :** Filtrer, trier, ouvrir un projet, supprimer.  
**Prérequis :** Être connecté, avoir des projets.  
**Statut :** DONE

### 14-favoris

**Nom :** Favoris  
**Objectif utilisateur :** Accéder rapidement aux checklists favorites.  
**Contenus clés :** Liste des checklists marquées comme favorites.  
**Interactions principales :** Sélectionner une checklist, gérer favoris.  
**Prérequis :** Être connecté.  
**Statut :** DONE

### 15-parametres

**Nom :** Paramètres  
**Objectif utilisateur :** Configurer les préférences utilisateur.  
**Contenus clés :** Options de notification, seuils de score, clé API OpenAI.  
**Interactions principales :** Modifier paramètres, sauvegarder.  
**Prérequis :** Être connecté.  
**Statut :** DONE

### 16-profil

**Nom :** Profil  
**Objectif utilisateur :** Gérer les informations personnelles.  
**Contenus clés :** Champs nom, email, photo, changer mot de passe.  
**Interactions principales :** Éditer, sauvegarder, déconnexion.  
**Prérequis :** Être connecté.  
**Statut :** DONE

### 17-televersement

**Nom :** Téléversement de documents  
**Objectif utilisateur :** Importer les documents à analyser.  
**Contenus clés :** Zone de drag & drop, liste des fichiers uploadés, bouton analyser.  
**Interactions principales :** Sélectionner fichiers, supprimer, lancer analyse.  
**Prérequis :** Avoir créé un projet.  
**Statut :** DONE

### 18-selection-checklist

**Nom :** Sélection de checklist  
**Objectif utilisateur :** Choisir la checklist de conformité applicable.  
**Contenus clés :** Liste des checklists disponibles, recherche, favoris.  
**Interactions principales :** Sélectionner checklist, confirmer.  
**Prérequis :** Avoir des documents uploadés.  
**Statut :** DONE

### 19-resultats-analyse

**Nom :** Résultats de l'analyse  
**Objectif utilisateur :** Consulter le score et les détails de conformité.  
**Contenus clés :** Score global, graphique, liste des critères validés/non, anomalies.  
**Interactions principales :** Filtrer résultats, générer rapport, relancer analyse.  
**Prérequis :** Avoir lancé une analyse.  
**Statut :** DONE

### 20-rapport

**Nom :** Rapport de conformité  
**Objectif utilisateur :** Télécharger ou visualiser le rapport détaillé.  
**Contenus clés :** Vue du rapport PDF, options de téléchargement.  
**Interactions principales :** Télécharger PDF, partager.  
**Prérequis :** Avoir des résultats d'analyse.  
**Statut :** DONE

### 21-historique

**Nom :** Historique des analyses  
**Objectif utilisateur :** Consulter les analyses passées.  
**Contenus clés :** Liste chronologique des analyses, filtres par date/projet.  
**Interactions principales :** Ouvrir ancienne analyse, exporter données.  
**Prérequis :** Être connecté, avoir des analyses.  
**Statut :** DONE

## Notes

- Les écrans sont interconnectés via des liens HTML relatifs.
- Tous les écrans utilisent les layouts appropriés.
- Navigation fluide entre pages.
