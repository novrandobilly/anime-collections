import React, { FC } from 'react';
import styled from '@emotion/styled';
import BulkAddPlus from '../../assets/icons/bulk-add-plus.svg';

const BulkAddContainer = styled.div`
  display: flex;
  justify-content: end;
  widht: 100%;
  align-items: center;
  gap: 0.25rem;
`;

const Label = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #484649;
`;

const BulkAddIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const BulkAdd: FC = () => {
  return (
    <BulkAddContainer>
      <Label>Bulk Add Collection </Label>
      <BulkAddIcon src={BulkAddPlus} alt="Bulk Add Plus" />
    </BulkAddContainer>
  );
};

export default BulkAdd;
