import React, { FC } from 'react';
import styled from '@emotion/styled';
import Plus from '../../assets/icons/plus-white-plain.svg';

const TitleBlockContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const TitleText = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  color: #000000;
`;

const AddCollectionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: #7f67be;
  border-radius: 15px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
`;

const AddCollentionIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const AddCollectionText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.5px;
  color: #ffffff;
`;

type TitleBlockProps = {
  handleAddNewCollection: () => void;
};

const TitleBlock: FC<TitleBlockProps> = ({ handleAddNewCollection }) => {
  return (
    <TitleBlockContainer>
      <TitleText>Collection List</TitleText>
      <AddCollectionButton onClick={handleAddNewCollection}>
        <AddCollentionIcon src={Plus} alt="Add Collection Icon" />
        <AddCollectionText>Add Collection</AddCollectionText>
      </AddCollectionButton>
    </TitleBlockContainer>
  );
};

export default TitleBlock;
