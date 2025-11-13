import { useAuth } from '../contexts/AuthContext';
import type { User } from '../types/auth';

/**
 * Hook utilitaire pour les fonctions d'authentification courantes
 */
export function useAuthUtils() {
  const { state, logout } = useAuth();

  /**
   * Vérifie si l'utilisateur a un rôle spécifique
   */
  const hasRole = (role: User['role']): boolean => {
    return state.user?.role === role;
  };

  /**
   * Vérifie si l'utilisateur est admin
   */
  const isAdmin = (): boolean => {
    return hasRole('admin');
  };

  /**
   * Vérifie si l'utilisateur est consultant
   */
  const isConsultant = (): boolean => {
    return hasRole('consultant');
  };

  /**
   * Vérifie si l'utilisateur est auditeur
   */
  const isAuditeur = (): boolean => {
    return hasRole('auditeur');
  };

  /**
   * Vérifie si l'utilisateur a les permissions d'administration
   */
  const canManageUsers = (): boolean => {
    return isAdmin();
  };

  /**
   * Vérifie si l'utilisateur peut voir les statistiques globales
   */
  const canViewGlobalStats = (): boolean => {
    return isAdmin();
  };

  /**
   * Vérifie si l'utilisateur peut gérer les checklists
   */
  const canManageChecklists = (): boolean => {
    return isAdmin() || isConsultant();
  };

  /**
   * Obtient le nom complet de l'utilisateur
   */
  const getFullName = (): string => {
    if (!state.user) return '';
    return `${state.user.firstName} ${state.user.lastName}`.trim();
  };

  /**
   * Obtient les initiales de l'utilisateur
   */
  const getInitials = (): string => {
    if (!state.user) return '';
    const firstInitial = state.user.firstName?.charAt(0) || '';
    const lastInitial = state.user.lastName?.charAt(0) || '';
    return (firstInitial + lastInitial).toUpperCase();
  };

  /**
   * Déconnexion avec confirmation optionnelle
   */
  const handleLogout = (confirm = false): void => {
    if (confirm && !window.confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
      return;
    }
    logout();
  };

  return {
    // État
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    isLoading: state.isLoading,
    error: state.error,

    // Vérifications de rôle
    hasRole,
    isAdmin,
    isConsultant,
    isAuditeur,

    // Permissions
    canManageUsers,
    canViewGlobalStats,
    canManageChecklists,

    // Utilitaires
    getFullName,
    getInitials,
    handleLogout,
  };
}