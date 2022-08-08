import React, { FC, useContext, useState } from 'react';
import styled from '@emotion/styled';
import PlusPurple from '../../assets/icons/plus.svg';
import XMark from '../../assets/icons/x-mark.svg';
import CheckGreen from '../../assets/icons/check-green.svg';
import UserCollectionContext from '../../UserCollectionContext';
import { AnimeType } from '../../lib/data-types';

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
`;

const Title = styled.h1`
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  color: #484649;
  margin-bottom: 1rem;
`;

const SubTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #484649;
`;

const CollectionItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  margin-bottom: 1rem;
`;

const CollectionItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemTitle = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.25px;
  color: #484649;
`;

const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
`;

const UpdateButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  background: #36b33b;
  border-radius: 8px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #ffffff;
  border: none;
  &:disabled {
    background: #e6e6e6;
    color: #484649;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}`;

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

type ModalAddToCollectionProps = {
  isOpen: boolean;
  onClose: () => void;
  onUpdateCollection: (selectedCollections: string[]) => void;
  animeAdded: AnimeType;
};

const ModalAddToCollection: FC<ModalAddToCollectionProps> = ({ isOpen, onClose, onUpdateCollection, animeAdded }) => {
  const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
  const [collectionTitle, setCollectionTitle] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [isAddingCollection, setIsAddingCollection] = useState<boolean>(false);
  const { collectionList, addCollection } = useContext(UserCollectionContext);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (e.target.checked) {
      setSelectedCollections((prev) => [...prev, value]);
    } else {
      setSelectedCollections((prev) => prev.filter((collection) => collection !== value));
    }
  };

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onUpdateCollection(selectedCollections);
    setSelectedCollections([]);
  };

  const handleAddNewCollection = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const specialCharacterChecker = /[^a-zA-Z0-9]/g;
    if (
      collectionList.find((collection) => collection.collectionTitle === collectionTitle) ||
      specialCharacterChecker.test(collectionTitle)
    ) {
      setErrorMessage('Collection Title cannot contain special characters or duplicate');
      return;
    }
    const collectionName = collectionTitle;
    if (collectionName.length > 0) {
      addCollection(collectionName);
    }

    setCollectionTitle('');
    setIsAddingCollection(false);
  };

  return (
    <ModalContainer isOpen={isOpen}>
      <Form onSubmit={handleUpdate}>
        <CloseContainer>
          <Icon onClick={onClose} src={XMark} alt="Close button" />
        </CloseContainer>
        <Title>Add To Collection</Title>
        <SubTitleContainer>
          <SubTitle>Collection List</SubTitle>
          {!isAddingCollection ? (
            <Icon src={PlusPurple} alt="Add to collection" onClick={() => setIsAddingCollection(true)} />
          ) : (
            <Icon src={CheckGreen} alt="Add to collection" onClick={handleAddNewCollection} />
          )}
        </SubTitleContainer>
        <CollectionItemContainer>
          {collectionList.map((collection, index) => (
            <CollectionItem key={`collection-${index}`}>
              <ItemTitle>{collection.collectionTitle}</ItemTitle>
              <Checkbox
                type="checkbox"
                value={collection.collectionTitle}
                onChange={handleCheckboxChange}
                checked={selectedCollections.includes(collection.collectionTitle)}
              />
            </CollectionItem>
          ))}
          {isAddingCollection && (
            <>
              {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
              <InputText
                type="text"
                value={collectionTitle}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCollectionTitle(e.target.value)}
              />
            </>
          )}
        </CollectionItemContainer>
        <UpdateButton disabled={isAddingCollection}>Update Collection</UpdateButton>
      </Form>
    </ModalContainer>
  );
};

export default ModalAddToCollection;
