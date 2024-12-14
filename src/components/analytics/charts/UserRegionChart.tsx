import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface UserRegionChartProps {
  data: Array<{ region: string; count: number }>;
}

const UserRegionChart: React.FC<UserRegionChartProps> = ({ data }) => (
  <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
    <h3 className="text-lg font-medium text-gray-900 mb-4">
      Users by Region
    </h3>
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="region" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#4F46E5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default UserRegionChart;