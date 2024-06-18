import Header from '@components/containers/Header';
import { Outlet } from 'react-router-dom';
import GlobalStyles from '@styles/global';
import ThemeContextProvider from '@components/common/ThemeProvider';
import Footer from '@components/containers/Footer';
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
