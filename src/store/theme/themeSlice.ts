import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@store';

type ColorMode = 'LIGHT' | 'DARK';

export interface ThemeState {
  mode: ColorMode;
}

const initialState: ThemeState = {
  mode: (localStorage.getItem('colorMode') ?? 'LIGHT') as ColorMode,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      const newMode = state.mode == 'LIGHT' ? 'DARK' : 'LIGHT';
      localStorage.setItem('colorMode', newMode);
      state.mode = newMode;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export const selectCurrentTheme = (state: RootState) => state.theme.mode;

export default themeSlice.reducer;
