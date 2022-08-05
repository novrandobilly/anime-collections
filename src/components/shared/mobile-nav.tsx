import React, { FC } from 'react';
import styled from '@emotion/styled';
import HomeBlack from '../../assets/icons/home-icon-black.svg';
import CollectionBlack from '../../assets/icons/collection-icon-black.svg';
import Reset from '../../assets/icons/reset.svg';

const MobileNavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 32px;
  background-color: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  position: fixed;
  bottom: 0;
  box-sizing: border-box;
`;

const MobileNavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MobileNavIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
const MobileNavReset = styled.img`
  width: 2rem;
  height: 2rem;
`;

const MobileNavLabel = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #484649;
  margin: 0;
  width: 100%;
`;

const MobileNav: FC = () => {
  return (
    <MobileNavContainer>
      <MobileNavItem>
        <MobileNavIcon src={HomeBlack} alt="Home Icon" />
        <MobileNavLabel>Home</MobileNavLabel>
      </MobileNavItem>
      <MobileNavItem>
        <MobileNavIcon src={CollectionBlack} alt="Collection Icon" />
        <MobileNavLabel>Collection</MobileNavLabel>
      </MobileNavItem>
      <MobileNavItem>
        <MobileNavReset src={Reset} alt="Reset Icon" />
      </MobileNavItem>
    </MobileNavContainer>
  );
};

export default MobileNav;
