/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';
import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/shared/header';
import Footer from './components/shared/footer';
import MobileNav from './components/shared/mobile-nav';
import Homepage from './pages/Homepage';
import CollectionList from './pages/CollectionList';
import CollectionDetails from './pages/CollectionDetails';
import AnimeDetails from './pages/AnimeDetails';

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
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/collection-list" element={<CollectionList />} />
          <Route path="/collection-list/:collectionid" element={<CollectionDetails />} />
          <Route path="/anime/:animeid" element={<AnimeDetails />} />
        </Routes>
      </AppContainer>
      <Footer />
      <MobileNav />
    </Layout>
  );
};

export default App;
