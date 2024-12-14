import { addMonths, format } from 'date-fns';

export const mockUsers = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  status: Math.random() > 0.3 ? 'active' : 'inactive',
  region: ['North', 'South', 'East', 'West'][Math.floor(Math.random() * 4)],
  registrationDate: format(
    addMonths(new Date(2023, 0, 1), Math.floor(Math.random() * 12)),
    'yyyy-MM-dd'
  ),
}));

export const mockAnalytics = {
  metrics: {
    totalUsers: mockUsers.length,
    activeUsers: mockUsers.filter(user => user.status === 'active').length,
    deletedUsers: 0,
  },
  registrationTrend: Array.from({ length: 6 }, (_, i) => ({
    date: format(addMonths(new Date(2023, 6, 1), i), 'MMM yyyy'),
    count: Math.floor(Math.random() * 20) + 5,
  })),
  usersByStatus: [
    { status: 'Active', count: mockUsers.filter(u => u.status === 'active').length },
    { status: 'Inactive', count: mockUsers.filter(u => u.status === 'inactive').length },
  ],
  usersByRegion: ['North', 'South', 'East', 'West'].map(region => ({
    region,
    count: mockUsers.filter(u => u.region === region).length,
  })),
};