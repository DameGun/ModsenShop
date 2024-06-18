import { ReactNode } from 'react';
import { useAppSelector } from '@hooks/redux';
import { selectCurrentTheme } from '@store/theme/themeSlice';
import { darkTheme, lightTheme } from '@styles/theme';
import { ThemeProvider } from 'styled-components';

interface ThemeContextProviderProps {
  children: ReactNode;
}

export default function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const currentTheme = useAppSelector(selectCurrentTheme);

  return (
    <ThemeProvider theme={currentTheme == 'LIGHT' ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
}
