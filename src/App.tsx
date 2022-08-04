/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';
import { FC } from 'react';
import Header from './components/shared/header';
import BulkAdd from './components/Homepage/bulk-add';
import Footer from './components/shared/footer';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;

const AppContainer = styled.div`
  padding: 0 1rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  min-height: 100%;
`;

const App: FC = () => {
  return (
    <Layout>
      <AppContainer>
        <Header />
        <BulkAdd />
      </AppContainer>
      <Footer />
    </Layout>
  );
};

export default App;
