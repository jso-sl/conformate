import { useNavigate, useLocation } from 'react-router-dom';
import { ROUTES } from '../router';

/**
 * Hook personnalisé pour la navigation
 * Fournit des méthodes type-safe pour naviguer dans l'application
 */
export const useAppNavigation = () => {
  const navigate = useNavigate();

  return {
    // Navigation vers les pages publiques
    goToHome: () => navigate(ROUTES.HOME),
    goToAbout: () => navigate(ROUTES.ABOUT),
    goToLogin: () => navigate(ROUTES.LOGIN),
    goToSignup: () => navigate(ROUTES.SIGNUP),
    goToPrivacy: () => navigate(ROUTES.PRIVACY),
    goToTerms: () => navigate(ROUTES.TERMS),
    goToHelp: () => navigate(ROUTES.HELP),

    // Navigation vers les pages de l'application
    goToDashboard: () => navigate(ROUTES.APP.DASHBOARD),
    goToImportDocuments: () => navigate(ROUTES.APP.IMPORT_DOCUMENTS),
    goToSelectChecklist: () => navigate(ROUTES.APP.SELECT_CHECKLIST),
    goToLaunchAnalysis: () => navigate(ROUTES.APP.LAUNCH_ANALYSIS),
    goToAnalysisResults: () => navigate(ROUTES.APP.ANALYSIS_RESULTS),
    goToGenerateReport: () => navigate(ROUTES.APP.GENERATE_REPORT),
    goToAnalysesHistory: () => navigate(ROUTES.APP.ANALYSES_HISTORY),
    goToGlobalStats: () => navigate(ROUTES.APP.GLOBAL_STATS),
    goToUserManagement: () => navigate(ROUTES.APP.USER_MANAGEMENT),
    goToChecklistManagement: () => navigate(ROUTES.APP.CHECKLIST_MANAGEMENT),
    goToSettings: () => navigate(ROUTES.APP.SETTINGS),
    goToProfile: () => navigate(ROUTES.APP.PROFILE),
    goToHelpCenter: () => navigate(ROUTES.APP.HELP_CENTER),

    // Navigation générique
    navigateTo: (path: string) => navigate(path),
    goBack: () => navigate(-1),
    goForward: () => navigate(1),
  };
};

/**
 * Hook pour obtenir l'URL courante et vérifier la route active
 */
export const useCurrentRoute = () => {
  const location = useLocation();

  return {
    pathname: location.pathname,
    search: location.search,
    hash: location.hash,
    
    // Helpers pour vérifier les routes publiques
    isHome: location.pathname === ROUTES.HOME,
    isAbout: location.pathname === ROUTES.ABOUT,
    isLogin: location.pathname === ROUTES.LOGIN,
    isSignup: location.pathname === ROUTES.SIGNUP,
    isPrivacy: location.pathname === ROUTES.PRIVACY,
    isTerms: location.pathname === ROUTES.TERMS,
    isHelp: location.pathname === ROUTES.HELP,
    
    // Helpers pour vérifier les pages de l'application
    isDashboard: location.pathname === ROUTES.APP.DASHBOARD,
    isImportDocuments: location.pathname === ROUTES.APP.IMPORT_DOCUMENTS,
    isSelectChecklist: location.pathname === ROUTES.APP.SELECT_CHECKLIST,
    isLaunchAnalysis: location.pathname === ROUTES.APP.LAUNCH_ANALYSIS,
    isAnalysisResults: location.pathname === ROUTES.APP.ANALYSIS_RESULTS,
    isGenerateReport: location.pathname === ROUTES.APP.GENERATE_REPORT,
    isAnalysesHistory: location.pathname === ROUTES.APP.ANALYSES_HISTORY,
    isGlobalStats: location.pathname === ROUTES.APP.GLOBAL_STATS,
    isUserManagement: location.pathname === ROUTES.APP.USER_MANAGEMENT,
    isChecklistManagement: location.pathname === ROUTES.APP.CHECKLIST_MANAGEMENT,
    isSettings: location.pathname === ROUTES.APP.SETTINGS,
    isProfile: location.pathname === ROUTES.APP.PROFILE,
    isHelpCenter: location.pathname === ROUTES.APP.HELP_CENTER,
    
    // Helper pour vérifier si on est dans l'app
    isInApp: Object.values(ROUTES.APP).includes(location.pathname as any),
  };
};