import Header from '@components/Header';
import { Outlet } from 'react-router-dom';
import GlobalStyles from '@styles/global';
import ThemeContextProvider from '@components/ThemeProvider';
import Footer from '@components/Footer';
import styled from 'styled-components';

const MainContainer = styled.main`
  flex-grow: 1;
`;

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
