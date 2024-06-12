import Header from '@components/Header';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useAppSelector } from '@hooks/redux';
import { selectCurrentTheme } from '@store/theme/themeSlice';
import { darkTheme, lightTheme } from '@styles/theme';
import GlobalStyles from '@styles/global';

export default function Layout() {
  const currentTheme = useAppSelector(selectCurrentTheme);
  return (
    <ThemeProvider theme={currentTheme == 'LIGHT' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header />
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
}
