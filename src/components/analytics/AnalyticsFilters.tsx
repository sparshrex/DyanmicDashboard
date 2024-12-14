import React from 'react';

interface AnalyticsFiltersProps {
  dateRange: string;
  selectedRegion: string;
  onDateRangeChange: (value: string) => void;
  onRegionChange: (value: string) => void;
}

const AnalyticsFilters: React.FC<AnalyticsFiltersProps> = ({
  dateRange,
  selectedRegion,
  onDateRangeChange,
  onRegionChange,
}) => (
  <div className="mb-6 flex space-x-4">
    <select
      value={dateRange}
      onChange={(e) => onDateRangeChange(e.target.value)}
      className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
    >
      <option value="1m">Last Month</option>
      <option value="3m">Last 3 Months</option>
      <option value="6m">Last 6 Months</option>
    </select>
    <select
      value={selectedRegion}
      onChange={(e) => onRegionChange(e.target.value)}
      className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
    >
      <option value="all">All Regions</option>
      <option value="north">North</option>
      <option value="south">South</option>
      <option value="east">East</option>
      <option value="west">West</option>
    </select>
  </div>
);

export default AnalyticsFilters;