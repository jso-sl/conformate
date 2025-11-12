# 🧭 Projet : Plateforme d’évaluation automatique de documents selon une checklist de conformité

## 🎯 Objectif du projet

Créer un **site web ou une application mobile responsive** permettant à un utilisateur de **téléverser des documents** (PDF, DOCX, etc.) et de les **évaluer automatiquement** selon une **checklist** fournie dans un autre document.  
Le système calcule alors un **score de conformité** (de 0 à 100) et fournit un **rapport détaillé** indiquant les points forts et les non-conformités.  

Cette plateforme vise à **objectiver et accélérer** les processus de contrôle qualité, d’audit ou d’évaluation documentaire dans divers domaines.

---

## ⚙️ Fonctionnalités principales

- Téléversement de documents utilisateurs.  
- Téléversement ou sélection d’une **checklist de référence**.  
- Analyse automatique des écarts entre les documents et la checklist.  
- Calcul d’un **score global** et de **sous-scores** par catégorie.  
- **Visualisation graphique** (barres, jauge, radar) du niveau de conformité.  
- Téléchargement d’un **rapport synthétique** (PDF ou HTML).  
- Historique des évaluations et possibilité de comparer les scores.  

---

## 🧩 Cas d’usage

### 1. Conformité documentaire en architecture / BTP

**Contexte :**  
Un cabinet d’architecture ou un bureau d’études doit vérifier que les **pièces techniques d’un dossier de marché public** (plans, CCTP, notices, etc.) respectent la **checklist administrative exigée** par la maîtrise d’ouvrage.

**Problématique :**  
Les vérifications manuelles sont longues, sujettes à l’erreur, et ralentissent la préparation du dossier.

**Solution :**  
L’application analyse les documents déposés et les compare à la checklist du marché (présence des pièces obligatoires, conformité du contenu, format). Elle attribue un score de conformité et un rapport d’écarts.

**Bénéfices :**  
- Gain de temps pour les équipes projet.  
- Sécurisation des dépôts d’offres.  
- Amélioration continue de la qualité documentaire.  

---

### 2. Contrôle qualité de livrables en formation

**Contexte :**  
Une société de formation vérifie la conformité de ses **dossiers pédagogiques** (programmes, conventions, évaluations, attestations).

**Problématique :**  
Les audits internes et les exigences Qualiopi imposent des contrôles précis, souvent effectués manuellement.

**Solution :**  
L’application compare les documents livrés à une checklist qualité Qualiopi. Elle détecte les absences et calcule un score de conformité globale.

**Bénéfices :**  
- Standardisation des dossiers.  
- Simplification des audits.  
- Meilleure préparation à la certification Qualiopi.  

---

### 3. Audit de conformité RGPD

**Contexte :**  
Un consultant en protection des données reçoit les **politiques de confidentialité** de plusieurs clients.

**Problématique :**  
Comparer manuellement les textes aux exigences du RGPD (mentions légales, durée de conservation, droits, etc.) est fastidieux.

**Solution :**  
L’application utilise la checklist RGPD pour évaluer la conformité de chaque politique et attribue un score objectif.

**Bénéfices :**  
- Évaluation homogène de plusieurs clients.  
- Gain de temps sur les audits.  
- Justification écrite en cas de non-conformité.  

---

### 4. Vérification de dossiers administratifs

**Contexte :**  
Un service RH ou administratif reçoit des **dossiers de candidature** ou d’inscription contenant de multiples pièces justificatives.

**Problématique :**  
Le contrôle manuel est chronophage et source d’erreurs (pièces manquantes, mauvaise version, etc.).

**Solution :**  
L’application compare les fichiers reçus à une checklist (CNI, RIB, justificatif de domicile, CV, etc.) et calcule un score de complétude.

**Bénéfices :**  
- Traitement plus rapide des dossiers.  
- Moins d’erreurs humaines.  
- Suivi statistique de la complétude.  

---

### 5. Évaluation de rapports scientifiques ou étudiants

**Contexte :**  
Des enseignants souhaitent évaluer les **rapports de stage** ou **mémoires étudiants** selon une grille prédéfinie (structure, qualité d’analyse, clarté…).

**Problématique :**  
Les évaluations sont hétérogènes et peu traçables.

**Solution :**  
L’application compare le contenu du rapport à une checklist (présence d’introduction, d’analyse critique, de bibliographie…) et calcule un score de qualité.

**Bénéfices :**  
- Évaluation plus objective et homogène.  
- Gain de temps pour les correcteurs.  
- Historique des progrès par étudiant.  

---

### 6. Analyse de devis de rénovation énergétique

**Contexte :**  
Un **fournisseur d’énergie** (EDF, Engie, etc.) reçoit des **devis de travaux de rénovation énergétique** émis par des professionnels dans le cadre des **Certificats d’Économies d’Énergie (CEE)**.

**Problématique :**  
Avant d’accorder la prime, le fournisseur doit vérifier la **conformité réglementaire** du devis selon les fiches CEE (présence des mentions, performances thermiques, qualifications RGE, etc.).

**Solution :**  
L’application permet de téléverser le devis et la checklist correspondante (fiches CEE). Elle analyse les écarts et calcule un score de conformité (ex. 87/100), accompagné d’un rapport détaillé.

**Bénéfices :**  
- Gain de temps pour les équipes de validation.  
- Réduction des erreurs et fraudes.  
- Traçabilité et transparence des décisions.  
- Classement des artisans selon leur conformité moyenne.  

---

## 🚀 Pistes d’évolution

- Intégration d’un **moteur IA/LLM** pour l’analyse sémantique des documents.  
- Pondération des critères dans la checklist.  
- Gestion multi-utilisateurs et rôles (administrateur, vérificateur, audité).  
- API d’intégration avec CRM, ERP ou outils documentaires.  
- Génération automatique de rapports PDF certifiés.  
