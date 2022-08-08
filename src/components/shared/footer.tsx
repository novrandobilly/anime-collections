import React, { FC } from 'react';
import Logo from '../../assets/logo.svg';
import styled from '@emotion/styled';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 8px 0px;
  gap: 4px;
  width: 100%;
  background-color: #eaddff;
`;

const FooterLogo = styled.img`
  width: 100px;
  height: 17px;
`;
const CopyrightLabel = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.5px;
  color: #313033;
  margin: 0;
`;

const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterLogo src={Logo} alt="Logo" />
      <CopyrightLabel>© 2022 GeeXoduS All Rights Reserved | Billy Novrando</CopyrightLabel>
    </FooterContainer>
  );
};

export default Footer;
