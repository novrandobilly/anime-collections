import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;

  width: 100%;
`;

const Header: FC = () => {
  return (
    <Link to="/">
      <HeaderDiv>
        <img src={Logo} alt="Logo" />
      </HeaderDiv>
    </Link>
  );
};

export default Header;
