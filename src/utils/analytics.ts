import { format, addMonths } from 'date-fns';
import { User } from '../types';

export const calculateMetrics = (users: User[]) => ({
  totalUsers: users.length,
  activeUsers: users.filter(user => user.status === 'active').length,
  inactiveUsers: users.filter(user => user.status === 'inactive').length,
});

export const generateRegistrationTrend = (users: User[]) => {
  const last6Months = Array.from({ length: 6 }, (_, i) => ({
    date: format(addMonths(new Date(), -i), 'MMM yyyy'),
    count: users.filter(user => 
      user.registrationDate.startsWith(format(addMonths(new Date(), -i), 'yyyy-MM'))
    ).length,
  })).reverse();

  return last6Months;
};

export const calculateUsersByStatus = (users: User[]) => {
  const statusCount = users.reduce((acc, user) => ({
    ...acc,
    [user.status]: (acc[user.status] || 0) + 1
  }), {} as Record<string, number>);

  return Object.entries(statusCount).map(([status, count]) => ({
    status: status.charAt(0).toUpperCase() + status.slice(1),
    count
  }));
};

export const calculateUsersByRegion = (users: User[]) => {
  const regionCount = users.reduce((acc, user) => ({
    ...acc,
    [user.region]: (acc[user.region] || 0) + 1
  }), {} as Record<string, number>);

  return Object.entries(regionCount).map(([region, count]) => ({
    region,
    count
  }));
};