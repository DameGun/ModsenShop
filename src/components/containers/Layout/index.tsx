import { Outlet } from 'react-router-dom';
import ThemeContextProvider from '@components/common/ThemeProvider';
import Footer from '@components/containers/Footer';
import Header from '@components/containers/Header';
import GlobalStyles from '@styles/global';
import { MainContainer } from './styled';

export default function Layout() {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </ThemeContextProvider>
  );
}
