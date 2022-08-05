/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';
import { FC } from 'react';
import Header from './components/shared/header';
import Footer from './components/shared/footer';
import MobileNav from './components/shared/mobile-nav';
import CollectionDetails from './pages/CollectionDetails';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 100%;
  padding-bottom: 56px;
  min-height: 100vh;
  box-sizing: border-box;
`;

const AppContainer = styled.div`
  padding: 0 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: 100%;
`;

const App: FC = () => {
  return (
    <Layout>
      <AppContainer>
        <Header />
        <CollectionDetails />
      </AppContainer>
      <Footer />
      <MobileNav />
    </Layout>
  );
};

export default App;
