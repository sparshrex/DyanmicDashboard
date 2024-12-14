export interface User {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'inactive';
  region: string;
  registrationDate: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: null | { username: string };
  loading: boolean;
  error: string | null;
}

export interface UsersState {
  users: User[];
  filteredUsers: User[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  deletedUsers: number;
}

export interface AnalyticsState {
  metrics: {
    totalUsers: number;
    activeUsers: number;
    deletedUsers: number;
  };
  registrationTrend: {
    date: string;
    count: number;
  }[];
  usersByStatus: {
    status: string;
    count: number;
  }[];
  usersByRegion: {
    region: string;
    count: number;
  }[];
  loading: boolean;
  error: string | null;
}