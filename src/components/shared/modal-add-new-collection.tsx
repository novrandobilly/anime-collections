/** @jsxImportSource @emotion/react */

import React, { FC, useState, useContext } from 'react';
import styled from '@emotion/styled';
import XMark from '../../assets/icons/x-mark.svg';
import UserCollectionContext from '../../UserCollectionContext';

type cssIsOpen = {
  isOpen: boolean;
};
const ModalContainer = styled.div`
  width: 328px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 1rem;
  border: 1px solid #e6e6e6;
  position: fixed;
  z-index: 20;
  left: 50%;
  top: 50%;
  transform: translate(-50%, ${(props: cssIsOpen) => (props.isOpen ? '-100%' : '-500%')});
  transition: all 400ms ease-in-out;
`;

const CloseContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

const Title = styled.h1`
  width: 100%;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #484649;
`;

const InputText = styled.input`
  width: 100%;
  height: 1.5rem;
  border: none;
  outline: none;
  background-color: #f6edff;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  padding: 0 0.5rem;
  box-sizing: border-box;
`;

const UpdateButton = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: #36b33b;
  border-radius: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}`;

const ErrorText = styled.p`
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 14px;
  text-align: start;
  letter-spacing: 0.25px;
  color: red;
  margin-top: 1rem;
`;

type ModalAddNewCollectionProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ModalAddNewCollection: FC<ModalAddNewCollectionProps> = ({ isOpen, onClose }) => {
  const [collectionTitle, setCollectionTitle] = useState<string>('');
  const { collectionList, addCollection } = useContext(UserCollectionContext);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const specialCharacterChecker = /[^a-zA-Z0-9]/g;
    if (
      collectionList.find((collection) => collection.collectionTitle === collectionTitle) ||
      specialCharacterChecker.test(collectionTitle)
    ) {
      setErrorMessage('Collection Title cannot contain special characters or duplicate');
      return;
    }
    const collectionName = collectionTitle;
    addCollection(collectionName);
    setCollectionTitle('');
    setErrorMessage('');
    onClose();
  };

  return (
    <ModalContainer isOpen={isOpen}>
      <CloseContainer>
        <Icon src={XMark} alt="Close button" onClick={onClose} />
      </CloseContainer>
      <Title>Collection Name</Title>
      <Form onSubmit={handleSubmit}>
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
        <InputText
          type="text"
          value={collectionTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCollectionTitle(e.target.value)}
        />
        <UpdateButton>Add New Collection</UpdateButton>
      </Form>
    </ModalContainer>
  );
};

export default ModalAddNewCollection;
