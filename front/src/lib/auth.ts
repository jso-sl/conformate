import type { User, UserCredentials, LoginResponse, UserSession } from '../types/auth';

class AuthService {
  private users: User[] = [];
  private readonly SESSION_KEY = 'conformate_session';
  private readonly TOKEN_EXPIRY_HOURS = 24;

  constructor() {
    this.loadUsers();
  }

  /**
   * Charge les utilisateurs depuis le fichier pwd.json
   */
  private async loadUsers(): Promise<void> {
    try {
      const response = await fetch('/pwd.json');
      if (!response.ok) {
        throw new Error('Impossible de charger les utilisateurs');
      }
      const data = await response.json();
      this.users = data.users;
    } catch (error) {
      console.error('Erreur lors du chargement des utilisateurs:', error);
      this.users = [];
    }
  }

  /**
   * Authentifie un utilisateur
   */
  async login(credentials: UserCredentials): Promise<LoginResponse> {
    try {
      // S'assurer que les utilisateurs sont chargés
      if (this.users.length === 0) {
        await this.loadUsers();
      }

      const user = this.users.find(
        u => u.username === credentials.username && 
            u.password === credentials.password &&
            u.isActive
      );

      if (!user) {
        return {
          success: false,
          error: 'Nom d\'utilisateur ou mot de passe incorrect'
        };
      }

      // Générer un token simple (dans un vrai système, utiliser JWT)
      const token = this.generateToken(user);
      const expiresAt = new Date();
      expiresAt.setHours(expiresAt.getHours() + this.TOKEN_EXPIRY_HOURS);

      // Créer la session
      const session: UserSession = {
        user: this.sanitizeUser(user),
        token,
        expiresAt: expiresAt.toISOString()
      };

      // Sauvegarder la session
      localStorage.setItem(this.SESSION_KEY, JSON.stringify(session));

      return {
        success: true,
        user: session.user,
        token: session.token
      };
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      return {
        success: false,
        error: 'Erreur lors de la connexion'
      };
    }
  }

  /**
   * Déconnecte l'utilisateur
   */
  logout(): void {
    localStorage.removeItem(this.SESSION_KEY);
  }

  /**
   * Récupère la session courante
   */
  getCurrentSession(): UserSession | null {
    try {
      const sessionData = localStorage.getItem(this.SESSION_KEY);
      if (!sessionData) return null;

      const session: UserSession = JSON.parse(sessionData);
      
      // Vérifier si la session a expiré
      if (new Date() > new Date(session.expiresAt)) {
        this.logout();
        return null;
      }

      return session;
    } catch (error) {
      console.error('Erreur lors de la récupération de la session:', error);
      return null;
    }
  }

  /**
   * Vérifie si l'utilisateur est authentifié
   */
  isAuthenticated(): boolean {
    return this.getCurrentSession() !== null;
  }

  /**
   * Récupère l'utilisateur courant
   */
  getCurrentUser(): Omit<User, 'password'> | null {
    const session = this.getCurrentSession();
    return session ? session.user : null;
  }

  /**
   * Génère un token simple (à remplacer par JWT en production)
   */
  private generateToken(user: User): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substr(2, 9);
    return btoa(`${user.id}-${timestamp}-${random}`);
  }

  /**
   * Supprime le mot de passe des données utilisateur
   */
  private sanitizeUser(user: User): Omit<User, 'password'> {
    const { password, ...sanitizedUser } = user;
    return sanitizedUser;
  }

  /**
   * Rafraîchit la session (prolonge l'expiration)
   */
  refreshSession(): boolean {
    const session = this.getCurrentSession();
    if (!session) return false;

    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + this.TOKEN_EXPIRY_HOURS);
    
    const newSession: UserSession = {
      ...session,
      expiresAt: expiresAt.toISOString()
    };

    localStorage.setItem(this.SESSION_KEY, JSON.stringify(newSession));
    return true;
  }

  /**
   * Récupère la liste des utilisateurs (admin seulement)
   */
  async getUsers(): Promise<Omit<User, 'password'>[]> {
    const currentUser = this.getCurrentUser();
    if (!currentUser || currentUser.role !== 'admin') {
      throw new Error('Accès non autorisé');
    }

    if (this.users.length === 0) {
      await this.loadUsers();
    }

    return this.users.map(user => this.sanitizeUser(user));
  }
}

export const authService = new AuthService();