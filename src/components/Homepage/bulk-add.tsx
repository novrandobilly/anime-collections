import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import BulkAddPlus from '../../assets/icons/bulk-add-plus.svg';
import Backdrop from '../shared/backdrop';
import ModalBulkAddCollection from '../shared/modal-bulk-add-collection';

const BulkAddContainer = styled.div`
  display: flex;
  justify-content: end;
  widht: 100%;
  align-items: center;
  gap: 0.25rem;
  padding: 0 1rem;
  margin-bottom: 1rem;
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

const BulkAddAligner = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const BulkAdd: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Backdrop isOpen={isModalOpen} onClose={handleClose} />
      <ModalBulkAddCollection isOpen={isModalOpen} onClose={handleClose} />
      <BulkAddContainer>
        <BulkAddAligner onClick={handleOpen}>
          <Label>Bulk Add Collection </Label>
          <BulkAddIcon src={BulkAddPlus} alt="Bulk Add Plus" />
        </BulkAddAligner>
      </BulkAddContainer>
    </>
  );
};

export default BulkAdd;
