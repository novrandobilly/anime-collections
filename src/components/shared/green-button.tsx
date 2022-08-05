import React, { FC } from 'react';
import styled from '@emotion/styled';

const GreenButtonItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #36b33b;
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  color: #fff;
  border: none;
`;

type Props = {
  children: string;
};

const GreenButton: FC<Props> = ({ children }) => {
  return <GreenButtonItem>{children}</GreenButtonItem>;
};

export default GreenButton;
