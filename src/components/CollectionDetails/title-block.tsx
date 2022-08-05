import React, { FC } from 'react';
import styled from '@emotion/styled';
import Edit from '../../assets/icons/edit-purple.svg';

const TitleBlockContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const TitleText = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: #313033;
`;

const EditCollectionIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const TitleBlock: FC = () => {
  return (
    <TitleBlockContainer>
      <TitleText>Liberl Arc</TitleText>

      <EditCollectionIcon src={Edit} alt="Edit Collection Icon" />
    </TitleBlockContainer>
  );
};

export default TitleBlock;
