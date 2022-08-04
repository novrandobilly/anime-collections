import React, { FC } from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: #333;
  font-size: 14px;
  padding: 5px 10px;
  margin: 0 10px;
  &:hover {
    background-color: #e0e0e0;
  }
`;
const App: FC = () => {
  return (
    <div>
      <Button>Test Bro</Button>
    </div>
  );
};

export default App;
