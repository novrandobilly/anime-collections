import React, { FC } from 'react';
import ExampleImage from '../../assets/default/Example.jpg';
import EditPurple from '../../assets/icons/edit-purple.svg';
import DeleteWhite from '../../assets/icons/delete-white.svg';
import styled from '@emotion/styled';

const ShadowGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 144px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5) 19.71%, rgba(0, 0, 0, 0) 41.13%);
  border-radius: 12px;
  z-index: 5;
  top: 0;
`;

const CollectionCardContainer = styled.div`
  width: 100%;
  height: 144px;
  position: relative;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const CollectionCardBanner = styled.img`
  width: 100%;
  height: 144px;
  object-fit: cover;
  border-radius: 12px;
  z-index: 1;
`;

const Title = styled.h2`
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #fff;
  z-index: 10;
`;

const CTAContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0.5rem;
  right: 1rem;
  z-index: 10;
  gap: 0.5rem;
`;

const CTA = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const CollectionNumber = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0 12px 0 12px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #7f67be;
  width: 50%;
  padding: 0 8px;
  box-sizing: border-box;
`;

const CollectionNumberText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.5px;
  color: #ffffff;
`;

const CollectionCard: FC = () => {
  return (
    <CollectionCardContainer>
      <CollectionCardBanner src={ExampleImage} alt="Collection Banner" />
      <Title>Liberl Arc</Title>
      <CTAContainer>
        <CTA src={EditPurple} alt="Edit" />
        <CTA src={DeleteWhite} alt="Delete" />
      </CTAContainer>
      <CollectionNumber>
        <CollectionNumberText>Contains 3 Animes</CollectionNumberText>
      </CollectionNumber>
      <ShadowGradient />
    </CollectionCardContainer>
  );
};

export default CollectionCard;
