import React, { FC, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Edit from '../../assets/icons/edit-purple.svg';
import ModalEditCollectionName from '../shared/modal-edit-collection-name';
import Backdrop from '../shared/backdrop';
import UserCollectionContext from '../../UserCollectionContext';

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

type TitleBlockProps = {
  title: string;
  onEdit?: () => void;
};

const TitleBlock: FC<TitleBlockProps> = ({ title }) => {
  const navigate = useNavigate();
  const { editCollectionName } = useContext(UserCollectionContext);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newCollectionTitle, setNewCollectionTitle] = useState(title);

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };
  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleNewCollectionTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCollectionTitle(e.target.value);
  };

  const handleUpdateCollectionTitle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editCollectionName(title, newCollectionTitle);
    setIsEditModalOpen(false);
    navigate(`/collection-list/${newCollectionTitle.split(' ').join('-')}`);
  };
  return (
    <>
      <ModalEditCollectionName
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        onEditCollectionTitle={handleNewCollectionTitle}
        newCollectionTitle={newCollectionTitle}
        onUpdateCollectionTitle={handleUpdateCollectionTitle}
      />
      <Backdrop isOpen={isEditModalOpen} onClose={handleCloseEditModal} />
      <TitleBlockContainer>
        <TitleText>{title}</TitleText>

        <EditCollectionIcon src={Edit} alt="Edit Collection Icon" onClick={handleOpenEditModal} />
      </TitleBlockContainer>
    </>
  );
};

export default TitleBlock;
