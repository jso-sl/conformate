# ⚙️ Spécifications Fonctionnelles – Plateforme d’évaluation automatique de documents
### Focus : Persona 2 – Antoine Lefèvre, Responsable conformité CEE

---

## 🎯 1. Objectif principal

Permettre à un **fournisseur d’énergie** de **vérifier la conformité des devis de travaux de rénovation énergétique** transmis par des artisans, en les comparant automatiquement aux **checklists réglementaires CEE (Certificats d’Économies d’Énergie)**.  
L’objectif est de :  
- **accélérer les validations**,  
- **réduire les erreurs humaines**,  
- **fournir une traçabilité complète** des contrôles effectués.  

---

## 👤 2. Acteurs

| **Acteur** | **Rôle** | **Actions principales** |
|-------------|-----------|--------------------------|
| **Responsable conformité (Antoine)** | Utilisateur principal. | Importe les devis, sélectionne les checklists, lance les analyses, consulte les scores, télécharge les rapports. |
| **Évaluateur secondaire / collègue** | Utilisateur avec droits restreints. | Consulte et commente les résultats. |
| **Administrateur CEE** | Superviseur. | Gère les utilisateurs, les checklists, et les seuils de conformité. |

---

## 🧭 3. Parcours utilisateur principal

### Étape 1 : Connexion et tableau de bord
- L’utilisateur accède à un tableau de bord listant :
  - le nombre de dossiers en attente,  
  - les dossiers conformes / non conformes,  
  - la moyenne des scores par artisan.  
- Il peut rechercher un dossier par **nom d’artisan, code CEE ou date**.

### Étape 2 : Téléversement des documents
- L’utilisateur **importe un ou plusieurs devis PDF** (ou formats équivalents).  
- Le système **identifie automatiquement le type de travaux** (ex : isolation, chauffage, etc.) à partir du contenu.  
- L’utilisateur peut aussi **sélectionner manuellement la fiche CEE** correspondante si nécessaire.  
- Une **checklist de conformité** est alors associée au devis.

### Étape 3 : Lancement de l’analyse
- L’utilisateur déclenche l’évaluation automatique.  
- Le système compare le contenu du devis (texte, données, tableaux) à chaque critère de la checklist :  
  - mentions légales (RGE, référence du client, signature avant travaux, etc.)  
  - performances techniques (valeur R, COP, surfaces, etc.)  
  - éléments administratifs (date, cachet, montant TTC, etc.)  
- Chaque critère reçoit une **note binaire ou pondérée**, selon sa criticité.  
- Un **score global sur 100** est calculé.  

### Étape 4 : Affichage des résultats
- L’utilisateur visualise les résultats sous forme de :
  - **score global de conformité** (ex. 87/100)  
  - **critères validés / non validés**  
  - **commentaires automatiques** expliquant les anomalies détectées.  
- Il peut **filtrer les résultats par type d’erreur** (ex. données manquantes, mentions absentes, valeurs incorrectes).  
- Un indicateur de **niveau de risque** (faible / moyen / critique) est associé au score.  

### Étape 5 : Rapport de conformité
- L’utilisateur peut **générer un rapport PDF** comprenant :
  - les informations générales du dossier (artisans, fiche CEE, date d’analyse)  
  - le score global et les détails critère par critère  
  - les éléments manquants ou non conformes  
  - une synthèse claire (« Conforme », « Partiellement conforme », « Non conforme »)  
- Le rapport est **archivé automatiquement** dans l’historique des analyses.  

### Étape 6 : Suivi et reporting global
- L’utilisateur consulte :
  - la **liste des artisans classés par taux moyen de conformité** ;  
  - l’évolution des scores dans le temps ;  
  - les **dossiers rejetés pour non-conformité** ;  
  - un **export global des données d’analyse** (CSV, PDF, etc.).  
- Il peut **fixer des seuils automatiques** pour alerter les équipes quand un dossier est en dessous d’un certain score.  

---

## 📊 4. Fonctionnalités clés

| **Catégorie** | **Fonctionnalité** | **Description** |
|----------------|--------------------|-----------------|
| **Gestion documentaire** | Import de fichiers | Téléversement de devis, factures ou pièces justificatives. |
| | Reconnaissance de contenu | Détection automatique du type de travaux et de la fiche CEE correspondante. |
| **Checklists** | Gestion des checklists | Ajout, modification ou suppression des fiches CEE par l’administrateur. |
| | Pondération des critères | Chaque critère peut avoir un poids (ex. mention RGE = 20 points). |
| **Analyse** | Calcul du score de conformité | Comparaison texte / données avec la checklist. |
| | Rapport d’écarts | Détail des points manquants ou non conformes. |
| **Rapports et historique** | Génération de rapports PDF | Résumé du score et des anomalies. |
| | Historique des analyses | Archivage chronologique des validations. |
| **Suivi global** | Statistiques de conformité | Tableau de bord synthétique multi-artisans. |
| | Alertes et seuils | Notification si un score est inférieur à un seuil défini. |

---

## 🔒 5. Règles fonctionnelles

1. Chaque devis analysé doit être **associé à une fiche CEE** précise.  
2. Les scores doivent être **compris entre 0 et 100**, calculés selon la pondération des critères.  
3. Une **analyse est archivée automatiquement** dès qu’elle est lancée.  
4. Un **rapport de conformité** doit pouvoir être généré à tout moment à partir de l’historique.  
5. Les **checklists CEE** sont modifiables uniquement par les administrateurs.  
6. Aucune donnée ne doit être supprimée définitivement : tout doit être **traçable et auditable**.  

---

## 🧾 6. Cas d’usage complémentaires

- **Cas d’erreur :** un fichier non lisible ou mal formaté est rejeté avec un message explicite.  
- **Cas de relance :** si le score est inférieur au seuil, une alerte invite à demander un devis corrigé à l’artisan.  
- **Cas d’audit :** l’administrateur peut télécharger l’ensemble des rapports d’un mois pour un audit de conformité.  

---

## 📌 7. Critères d’acceptation

| **N°** | **Critère** | **Condition de validation** |
|--------|--------------|-----------------------------|
| 1 | Analyse automatique | L’analyse produit un score cohérent et des anomalies identifiées. |
| 2 | Rapport PDF | Le rapport inclut score, anomalies, et nom du dossier. |
| 3 | Historique | Chaque analyse est enregistrée et accessible ultérieurement. |
| 4 | Classement artisans | Les artisans peuvent être triés par taux moyen de conformité. |
| 5 | Alerte seuil | Une notification s’affiche quand un dossier est en dessous du seuil défini. |

---
