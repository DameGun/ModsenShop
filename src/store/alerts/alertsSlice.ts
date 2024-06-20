import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Alert } from 'types/alert';
import { RootState } from '../index';

export interface AlertsState {
  alertsStack: Alert[];
}

const initialState: AlertsState = {
  alertsStack: [],
};

const alertsSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    addAlert: (state, action: PayloadAction<Alert>) => {
      state.alertsStack.unshift(action.payload);
    },
    removeAlert: (state, action: PayloadAction<string>) => {
      const alertIndex = state.alertsStack.findIndex((alert) => alert.id == action.payload);

      if (alertIndex !== -1) {
        state.alertsStack.splice(alertIndex, 1);
      }
    },
  },
});

export const { addAlert, removeAlert } = alertsSlice.actions;

export const selectAlertStack = (state: RootState) => state.alerts.alertsStack;

export default alertsSlice.reducer;
