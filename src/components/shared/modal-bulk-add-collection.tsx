import React, { FC, useState, useContext, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_DISPLAY_DATA } from '../../lib/graphql';
import { AnimeType } from '../../lib/data-types';
import styled from '@emotion/styled';
import UserCollectionContext from '../../UserCollectionContext';
import XMark from '../../assets/icons/x-mark.svg';
import CheckGreen from '../../assets/icons/check-green.svg';
import Next from '../../assets/icons/pagination-next.svg';
import Prev from '../../assets/icons/pagination-previous.svg';
import PlusPurple from '../../assets/icons/plus.svg';

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
  transform: translate(-50%, ${(props: cssIsOpen) => (props.isOpen ? '-50%' : '-500%')});
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
  width: 100%;
  text-align: start;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 85%;
`;

const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
`;

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
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

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
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

type ModalBulkAddCollectionProps = {
  isOpen: boolean;
  onClose: () => void;
};

type PageInfoType = {
  total: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
  perPage: number;
};

const ModalBulkAddCollection: FC<ModalBulkAddCollectionProps> = ({ isOpen, onClose }) => {
  const setPageInfo = useState<PageInfoType>({
    total: 0,
    currentPage: 1,
    lastPage: 1,
    hasNextPage: false,
    perPage: 10,
  })[1];
  const [page, setPage] = useState<number>(1);
  const [anime, setAnime] = useState<AnimeType[]>([]);
  const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
  const [animeAdded, setAnimeAdded] = useState<AnimeType[]>([]);
  const [collectionTitle, setCollectionTitle] = useState<string>('');
  const [isAddingCollection, setIsAddingCollection] = useState<boolean>(false);
  const { collectionList, addCollection, addAnimesToManyCollections } = useContext(UserCollectionContext);
  const { data, loading } = useQuery(GET_DISPLAY_DATA, {
    variables: {
      pageNumber: page,
    },
  });

  useEffect(() => {
    if (data) {
      setAnime(data.Page.media);
      setPageInfo(data.Page.pageInfo);
    }
  }, [data, setPageInfo]);

  const handleCollectionCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (e.target.checked) {
      setSelectedCollections((prev) => [...prev, value]);
    } else {
      setSelectedCollections((prev) => prev.filter((collection) => collection !== value));
    }
  };

  const handleAnimeCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const parsedValue = JSON.parse(value);
    if (e.target.checked) {
      setAnimeAdded((prev) => {
        return [...prev, parsedValue];
      });
    } else {
      setAnimeAdded((prev) => prev.filter((anime) => anime.id !== parseInt(parsedValue.id)));
    }
  };

  const handleAddNewCollection = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const collectionName = collectionTitle;
    if (collectionName.length > 0) {
      addCollection(collectionName);
    }

    setCollectionTitle('');
    setIsAddingCollection(false);
  };

  const handleUpdateBulkAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addAnimesToManyCollections(animeAdded, selectedCollections);
    setAnimeAdded([]);
    setSelectedCollections([]);
    onClose();
  };

  return (
    <ModalContainer isOpen={isOpen}>
      <CloseContainer>
        <Icon src={XMark} alt="Close button" onClick={onClose} />
      </CloseContainer>
      <Title>Add To Collection</Title>
      <Section>
        <SubTitle>Anime List</SubTitle>
        <CollectionItemContainer>
          {anime.length > 0 ? (
            anime.map((anime) => (
              <CollectionItem key={anime.id}>
                <ItemTitle>{anime.title.romaji}</ItemTitle>
                <Checkbox type="checkbox" value={JSON.stringify(anime)} onChange={handleAnimeCheckboxChange} />
              </CollectionItem>
            ))
          ) : (
            <ItemTitle>Loading...</ItemTitle>
          )}
        </CollectionItemContainer>
        <PaginationContainer>
          {loading ? (
            <ItemTitle>Loading...</ItemTitle>
          ) : (
            <>
              <Icon src={Prev} alt="Previous button" onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : 1))} />
              <Icon src={Next} alt="Next button" onClick={() => setPage((prev) => prev + 1)} />
            </>
          )}
        </PaginationContainer>
      </Section>
      <Section>
        <SubTitleContainer>
          <SubTitle>Choose to save on which Collection</SubTitle>
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
                onChange={handleCollectionCheckboxChange}
                checked={selectedCollections.includes(collection.collectionTitle)}
              />
            </CollectionItem>
          ))}
          {isAddingCollection && (
            <InputText
              type="text"
              value={collectionTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCollectionTitle(e.target.value)}
            />
          )}
        </CollectionItemContainer>
      </Section>
      <UpdateButton disabled={isAddingCollection} onClick={handleUpdateBulkAdd}>
        Update Collection
      </UpdateButton>
    </ModalContainer>
  );
};

export default ModalBulkAddCollection;
