/** @jsxImportSource @emotion/react */

import React, { FC, useContext, useState } from 'react';
import styled from '@emotion/styled';
import UserCollectionContext from '../UserCollectionContext';
import { css } from '@emotion/react';

import ModalAddNewCollection from '../components/shared/modal-add-new-collection';
import ModalEditCollectionName from '../components/shared/modal-edit-collection-name';
import ModalDelete from '../components/shared/modal-delete';
import CollectionCard from '../components/CollectionList/collection-card';
import TitleBlock from '../components/CollectionList/title-block';
import Backdrop from '../components/shared/backdrop';

const CollectionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const EmptyLabel = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.5px;
  color: #606060;
  text-align: center;
  margin-top: 1rem;
`;

const CollectionList: FC = () => {
  const [showAddNewCollection, setShowAddNewCollection] = useState<boolean>(false);

  const [showEditCollection, setShowEditCollection] = useState<boolean>(false);
  const [selectedCollection, setSelectedCollection] = useState<string>('');
  const [newCollectionTitle, setNewCollectionTitle] = useState<string>('');

  const [showDeleteCollection, setShowDeleteCollection] = useState<boolean>(false);
  const [selectedCollectionToDelete, setSelectedCollectionToDelete] = useState<string>('');

  const { collectionList, editCollectionName, removeCollection } = useContext(UserCollectionContext);

  const handleAddNewCollection = () => {
    setShowAddNewCollection(true);
  };

  const handleEditCollection = (title: string) => {
    setShowEditCollection(true);
    setSelectedCollection(title);
    setNewCollectionTitle(title);
  };

  const handleNewCollectionTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCollectionTitle(e.target.value);
  };

  const handleUpdateCollectionTitle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editCollectionName(selectedCollection, newCollectionTitle);
    setShowEditCollection(false);
    setSelectedCollection('');
    setNewCollectionTitle('');
  };

  const handleDeleteCollection = (title: string) => {
    setShowDeleteCollection(true);
    setSelectedCollectionToDelete(title);
  };

  const handleCloseModal = () => {
    setShowAddNewCollection(false);
    setShowEditCollection(false);
    setShowDeleteCollection(false);
  };

  const handleRemoveCollection = () => {
    removeCollection(selectedCollectionToDelete);
    setShowDeleteCollection(false);
  };

  const content = collectionList.length ? (
    collectionList.map((collection) => (
      <CollectionCard
        key={collection.collectionTitle}
        title={collection.collectionTitle}
        numberOfItems={collection.animeCollection.length}
        collectionBanner={collection.animeCollection[0]?.coverImage.large}
        onEdit={(title: string) => handleEditCollection(title)}
        onDelete={handleDeleteCollection}
      />
    ))
  ) : (
    <EmptyLabel>
      You have no collections yet.{' '}
      <span
        css={css`
          color: #7f67be;
          font-style: italic;
          cursor: pointer;
        `}
        onClick={handleAddNewCollection}>
        Add new collection
      </span>
    </EmptyLabel>
  );
  return (
    <>
      <ModalDelete
        isOpen={showDeleteCollection}
        onClose={handleCloseModal}
        message="Are you sure you want to delete this collection?"
        subMessage={`You will lose all your anime in this collection.`}
        onDelete={handleRemoveCollection}
      />

      <ModalAddNewCollection isOpen={showAddNewCollection} onClose={handleCloseModal} />
      <ModalEditCollectionName
        isOpen={showEditCollection}
        onClose={handleCloseModal}
        onEditCollectionTitle={handleNewCollectionTitle}
        newCollectionTitle={newCollectionTitle}
        onUpdateCollectionTitle={handleUpdateCollectionTitle}
      />

      <Backdrop
        isOpen={showAddNewCollection || showEditCollection || showDeleteCollection}
        onClose={handleCloseModal}
      />
      <CollectionListContainer>
        <TitleBlock handleAddNewCollection={handleAddNewCollection} />
        {content}
      </CollectionListContainer>
    </>
  );
};

export default CollectionList;
