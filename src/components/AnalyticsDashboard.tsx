import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchAnalyticsSuccess } from '../store/slices/analyticsSlice';
import { mockAnalytics } from '../mockData';
import { Users, UserCheck, UserMinus } from 'lucide-react';
import MetricCard from './analytics/MetricCard';
import AnalyticsFilters from './analytics/AnalyticsFilters';
import RegistrationTrendChart from './analytics/charts/RegistrationTrendChart';
import UserStatusChart from './analytics/charts/UserStatusChart';
import UserRegionChart from './analytics/charts/UserRegionChart';

const AnalyticsDashboard = () => {
  const dispatch = useDispatch();
  const analytics = useSelector((state: RootState) => state.analytics);
  const [dateRange, setDateRange] = useState('6m');
  const [selectedRegion, setSelectedRegion] = useState('all');

  useEffect(() => {
    dispatch(fetchAnalyticsSuccess(mockAnalytics));
  }, [dispatch]);

  return (
    <div className="p-6">
      <AnalyticsFilters
        dateRange={dateRange}
        selectedRegion={selectedRegion}
        onDateRangeChange={setDateRange}
        onRegionChange={setSelectedRegion}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <MetricCard
          title="Total Users"
          value={analytics.metrics.totalUsers}
          icon={Users}
        />
        <MetricCard
          title="Active Users"
          value={analytics.metrics.activeUsers}
          icon={UserCheck}
        />
        <MetricCard
          title="Deleted Users"
          value={analytics.metrics.deletedUsers}
          icon={UserMinus}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RegistrationTrendChart data={analytics.registrationTrend} />
        <UserStatusChart data={analytics.usersByStatus} />
        <UserRegionChart data={analytics.usersByRegion} />
      </div>
    </div>
  );
};

export default AnalyticsDashboard;