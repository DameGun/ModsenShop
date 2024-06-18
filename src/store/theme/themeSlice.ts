import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@store';
import { getTheme, setTheme } from '@utils/localStorageActions';
import { ColorMode } from 'types/theme';

export interface ThemeState {
  mode: ColorMode;
}

const initialState: ThemeState = {
  mode: getTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      const newMode = state.mode == 'LIGHT' ? 'DARK' : 'LIGHT';
      setTheme(newMode);
      state.mode = newMode;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export const selectCurrentTheme = (state: RootState) => state.theme.mode;

export default themeSlice.reducer;
