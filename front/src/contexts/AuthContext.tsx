import { createContext, useContext, useReducer, useEffect, type ReactNode } from 'react';
import type { AuthState, UserCredentials, LoginResponse } from '../types/auth';
import { authService } from '../lib/auth';

// Actions du reducer
type AuthAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: { user: AuthState['user']; token: string } }
  | { type: 'LOGIN_FAILURE'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'RESTORE_SESSION'; payload: { user: AuthState['user']; token: string } }
  | { type: 'CLEAR_ERROR' };

// État initial
const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

// Reducer
function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
        isLoading: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
        isLoading: false,
        error: null,
      };
    case 'RESTORE_SESSION':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
        error: null,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}

// Interface du contexte
interface AuthContextType {
  state: AuthState;
  login: (credentials: UserCredentials) => Promise<LoginResponse>;
  logout: () => void;
  clearError: () => void;
  refreshSession: () => boolean;
}

// Création du contexte
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Props du provider
interface AuthProviderProps {
  children: ReactNode;
}

// Provider du contexte
export function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Restaurer la session au démarrage
  useEffect(() => {
    const session = authService.getCurrentSession();
    if (session) {
      dispatch({
        type: 'RESTORE_SESSION',
        payload: {
          user: session.user,
          token: session.token,
        },
      });
    }
  }, []);

  // Fonction de connexion
  const login = async (credentials: UserCredentials): Promise<LoginResponse> => {
    dispatch({ type: 'LOGIN_START' });

    try {
      const response = await authService.login(credentials);

      if (response.success && response.user && response.token) {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: {
            user: response.user,
            token: response.token,
          },
        });
      } else {
        dispatch({
          type: 'LOGIN_FAILURE',
          payload: response.error || 'Erreur de connexion',
        });
      }

      return response;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erreur de connexion';
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: errorMessage,
      });

      return {
        success: false,
        error: errorMessage,
      };
    }
  };

  // Fonction de déconnexion
  const logout = () => {
    authService.logout();
    dispatch({ type: 'LOGOUT' });
  };

  // Fonction pour effacer les erreurs
  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  // Fonction pour rafraîchir la session
  const refreshSession = (): boolean => {
    return authService.refreshSession();
  };

  const value: AuthContextType = {
    state,
    login,
    logout,
    clearError,
    refreshSession,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook pour utiliser le contexte d'authentification
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}