import { User } from '../types';

export const filterUsersBySearchTerm = (users: User[], searchTerm: string): User[] => {
  const term = searchTerm.toLowerCase();
  return users.filter(user => 
    user.name.toLowerCase().includes(term) || 
    user.email.toLowerCase().includes(term)
  );
};

export const filterUsersByRegion = (users: User[], region: string): User[] => {
  if (region === 'all') return users;
  return users.filter(user => user.region.toLowerCase() === region.toLowerCase());
};

export const filterUsersByDateRange = (users: User[], months: number): User[] => {
  const cutoffDate = new Date();
  cutoffDate.setMonth(cutoffDate.getMonth() - months);
  
  return users.filter(user => 
    new Date(user.registrationDate) >= cutoffDate
  );
};