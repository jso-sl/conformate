import { Navigate, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import { useAuth } from '../../contexts/AuthContext';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: 'admin' | 'consultant' | 'auditeur';
  redirectTo?: string;
}

export function ProtectedRoute({ 
  children, 
  requiredRole, 
  redirectTo = '/login' 
}: ProtectedRouteProps) {
  const { state } = useAuth();
  const location = useLocation();

  // Si pas authentifié, rediriger vers la page de connexion
  if (!state.isAuthenticated || !state.user) {
    return (
      <Navigate 
        to={redirectTo} 
        state={{ from: location }} 
        replace 
      />
    );
  }

  // Si un rôle spécifique est requis, vérifier les permissions
  if (requiredRole && state.user.role !== requiredRole) {
    // Rediriger vers une page d'accès refusé ou le dashboard
    return (
      <Navigate 
        to="/app/dashboard" 
        state={{ error: 'Accès non autorisé pour ce rôle' }}
        replace 
      />
    );
  }

  return <>{children}</>;
}

// Composant pour les routes publiques (redirection si déjà connecté)
interface PublicRouteProps {
  children: ReactNode;
  redirectTo?: string;
}

export function PublicRoute({ 
  children, 
  redirectTo = '/app/dashboard' 
}: PublicRouteProps) {
  const { state } = useAuth();

  // Si déjà authentifié, rediriger vers l'application
  if (state.isAuthenticated && state.user) {
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
}