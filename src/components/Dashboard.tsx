import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import { Users, BarChart2, LogOut } from 'lucide-react';
import UserManagement from './UserManagement';
import AnalyticsDashboard from './AnalyticsDashboard';

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 border-b">
            <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
          </div>
          <nav className="flex-1 p-4">
            <NavLink
              to=""
              end
              className={({ isActive }) =>
                `flex items-center p-3 text-gray-700 rounded-lg ${
                  isActive ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-50'
                }`
              }
            >
              <Users className="w-5 h-5 mr-3" />
              User Management
            </NavLink>
            <NavLink
              to="analytics"
              className={({ isActive }) =>
                `flex items-center p-3 text-gray-700 rounded-lg ${
                  isActive ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-50'
                }`
              }
            >
              <BarChart2 className="w-5 h-5 mr-3" />
              Analytics
            </NavLink>
          </nav>
          <div className="p-4 border-t">
            <button
              onClick={() => dispatch(logout())}
              className="flex items-center w-full p-3 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="" element={<UserManagement />} />
          <Route path="analytics" element={<AnalyticsDashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;