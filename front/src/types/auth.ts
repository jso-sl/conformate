export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'consultant' | 'auditeur';
  firstName: string;
  lastName: string;
  organization: string;
  createdAt: string;
  isActive: boolean;
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface UserSession {
  user: Omit<User, 'password'>;
  token: string;
  expiresAt: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: Omit<User, 'password'> | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

export interface LoginResponse {
  success: boolean;
  user?: Omit<User, 'password'>;
  token?: string;
  error?: string;
}