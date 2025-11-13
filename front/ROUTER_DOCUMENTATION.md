# Système de Navigation React Router

Ce projet utilise React Router pour gérer la navigation entre les différents écrans. Toute la configuration de routing est centralisée dans le fichier `src/router.tsx`.

## Architecture

### 1. Configuration centralisée (`src/router.tsx`)

Le fichier `router.tsx` contient :
- **ROUTES** : Objet avec toutes les routes de l'application
- **router** : Configuration React Router avec les composants associés
- **ProtectedRoute** : Composant pour protéger les routes authentifiées

### 2. Layouts

- **PublicLayout** : Layout pour les pages publiques (accueil, connexion, etc.)
- **AppLayout** : Layout pour les pages de l'application (tableau de bord, etc.)

### 3. Hooks personnalisés (`src/hooks/useNavigation.ts`)

- **useAppNavigation()** : Fournit des méthodes pour naviguer programmatiquement
- **useCurrentRoute()** : Donne des informations sur la route actuelle

### 4. Composants de navigation (`src/components/navigation/AppLink.tsx`)

- **AppLink** : Composant Link typé
- **NavLink** : Composants spécialisés pour chaque route

## Utilisation

### Navigation programmatique

```tsx
import { useAppNavigation } from '../hooks/useNavigation';

const MyComponent = () => {
  const navigation = useAppNavigation();
  
  const handleLogin = () => {
    // Après authentification réussie
    navigation.goToDashboard();
  };
  
  return (
    <button onClick={navigation.goToAbout}>
      Aller à la page À propos
    </button>
  );
};
```

### Navigation avec des liens

```tsx
import { NavLink } from '../components/navigation/AppLink';

const Menu = () => (
  <nav>
    <NavLink.Home>Accueil</NavLink.Home>
    <NavLink.About>À propos</NavLink.About>
    <NavLink.Dashboard>Tableau de bord</NavLink.Dashboard>
  </nav>
);
```

### Vérification de la route actuelle

```tsx
import { useCurrentRoute } from '../hooks/useNavigation';

const Header = () => {
  const route = useCurrentRoute();
  
  return (
    <header>
      <h1>
        {route.isHome && 'Page d\'accueil'}
        {route.isDashboard && 'Tableau de bord'}
        {route.isInApp && ' (Application)'}
      </h1>
    </header>
  );
};
```

## Routes disponibles

### Pages publiques
- `/` - Accueil (HomePage)
- `/a-propos` - À propos (AboutPage)
- `/connexion` - Connexion (LoginPage)
- `/inscription` - Inscription (SignupPage)
- `/confidentialite` - Confidentialité (PrivacyPage)
- `/conditions` - Conditions (TermsPage)
- `/aide` - Aide (PublicHelpPage)

### Pages de l'application (protégées)
- `/tableau-de-bord` - Tableau de bord (DashboardPage)
- `/importer-documents` - Importer des documents (ImportDocumentsPage)
- `/selection-checklist` - Sélection checklist (SelectChecklistPage)
- `/lancement-analyse` - Lancement analyse (LaunchAnalysisPage)
- `/resultats-analyse` - Résultats analyse (AnalysisResultsPage)
- `/generer-rapport` - Générer rapport (GenerateReportPage)
- `/historique-analyses` - Historique analyses (AnalysesHistoryPage)
- `/statistiques-globales` - Statistiques globales (GlobalStatsPage)
- `/gestion-utilisateurs` - Gestion utilisateurs (UserManagementPage)
- `/gestion-checklists` - Gestion checklists (ChecklistManagementPage)
- `/parametres` - Paramètres (SettingsPage)
- `/profil` - Profil (ProfilePage)
- `/centre-aide` - Centre d'aide (HelpCenterPage)

## Protection des routes

Les routes de l'application sont protégées par le composant `ProtectedRoute`. Actuellement configuré pour permettre l'accès (développement), mais à modifier pour intégrer le système d'authentification :

```tsx
// Dans router.tsx - À modifier selon votre système d'auth
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  // const isAuthenticated = useAuth(); // Remplacer par votre logique d'auth
  const isAuthenticated = true; // Temporaire
  
  if (!isAuthenticated) {
    window.location.href = ROUTES.LOGIN;
    return null;
  }
  
  return <AppLayout>{children}</AppLayout>;
};
```

## Ajout de nouvelles routes

1. Ajouter la route dans l'objet `ROUTES`
2. Créer le composant de page correspondant
3. Ajouter la configuration dans `router`
4. Optionnel : Ajouter des méthodes dans les hooks de navigation
5. Optionnel : Ajouter des composants NavLink spécialisés

Exemple :
```tsx
// 1. Dans ROUTES
SETTINGS: {
  NOTIFICATIONS: '/parametres/notifications'
}

// 2. Créer NotificationsSettingsPage.tsx

// 3. Dans router
{
  path: ROUTES.SETTINGS.NOTIFICATIONS,
  element: (
    <ProtectedRoute>
      <NotificationsSettingsPage />
    </ProtectedRoute>
  )
}
```