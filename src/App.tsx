/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';
import { FC } from 'react';
import Header from './components/shared/header';

const AppContainer = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const App: FC = () => {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
};

export default App;
