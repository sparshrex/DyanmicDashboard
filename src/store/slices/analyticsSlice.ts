import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnalyticsState } from '../../types';

const initialState: AnalyticsState = {
  metrics: {
    totalUsers: 0,
    activeUsers: 0,
    deletedUsers: 0,
  },
  registrationTrend: [],
  usersByStatus: [],
  usersByRegion: [],
  loading: false,
  error: null,
};

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    fetchAnalyticsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchAnalyticsSuccess: (state, action: PayloadAction<Omit<AnalyticsState, 'loading' | 'error'>>) => {
      return { ...state, ...action.payload, loading: false, error: null };
    },
    fetchAnalyticsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateMetrics: (state, action: PayloadAction<Partial<typeof initialState.metrics>>) => {
      state.metrics = { ...state.metrics, ...action.payload };
    },
  },
});

export const {
  fetchAnalyticsStart,
  fetchAnalyticsSuccess,
  fetchAnalyticsFailure,
  updateMetrics,
} = analyticsSlice.actions;

export default analyticsSlice.reducer;