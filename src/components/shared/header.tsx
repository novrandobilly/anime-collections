import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import Backdrop from './backdrop';
import ModalReset from './modal-reset';

const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    justify-content: space-between;
    padding: 1rem 40px;
    box-sizing: border-box;
    border-bottom: 1px solid #ebebeb;
    margin-bottom: 1rem;
  }
`;

const NavContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    box-sizing: border-box;
  }
`;

const NavLink = styled(Link)`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #484649;
  text-decoration: none;
  &:hover {
    color: #7f67be;
  }
`;
const NavLinkReset = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #e92119;
  text-decoration: none;
  cursor: pointer;
`;

const Header: FC = () => {
  const [resetModalIsOpen, setResetModalIsOpen] = useState<boolean>(false);

  const openResetModal = () => {
    setResetModalIsOpen(true);
  };

  const closeResetModal = () => {
    setResetModalIsOpen(false);
  };

  return (
    <>
      <Backdrop isOpen={resetModalIsOpen} onClose={closeResetModal} />
      <ModalReset isOpen={resetModalIsOpen} onClose={closeResetModal} />
      <HeaderDiv>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <NavContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/collection-list">Collection</NavLink>
          <NavLinkReset onClick={openResetModal}>Reset</NavLinkReset>
        </NavContainer>
      </HeaderDiv>
    </>
  );
};

export default Header;
