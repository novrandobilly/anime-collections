import React, { FC, useEffect, useState, useContext } from 'react';
import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { Pagination } from '@mui/material';
import ModalAddToCollection from '../components/shared/modal-add-to-collection';
import Backdrop from '../components/shared/backdrop';
import { GET_DISPLAY_DATA } from '../lib/graphql';
import UserCollectionContext from '../UserCollectionContext';

import { AnimeType } from '../lib/data-types';
import BulkAdd from '../components/Homepage/bulk-add';
import AnimeCard from '../components/Homepage/anime-card-m';

const HomepageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 1rem;
  box-sizing: border-box;
  gap: 1.5rem 1rem;
  margin-bottom: 1rem;
`;

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
`;

type PageInfoType = {
  total: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
  perPage: number;
};

const Homepage: FC = () => {
  const [showAddToCollectionModal, setShowAddToCollectionModal] = useState<boolean>(false);
  const [anime, setAnime] = useState<AnimeType[]>([]);
  const { addAnimesToManyCollections } = useContext(UserCollectionContext);

  const [animeAdded, setAnimeAdded] = useState<AnimeType[]>([]);

  const setPageInfo = useState<PageInfoType>({
    total: 0,
    currentPage: 1,
    lastPage: 1,
    hasNextPage: false,
    perPage: 10,
  })[1];
  const [page, setPage] = useState<number>(1);

  const handleClose = () => {
    setShowAddToCollectionModal(false);
    setAnimeAdded([]);
  };

  const handleOpenAddToCollectionModal = (animeId: number) => {
    setShowAddToCollectionModal(true);
    const addedAnime = anime.find((anime) => anime.id === animeId);
    if (addedAnime) setAnimeAdded([addedAnime]);
  };

  const handleAddToCollection = (collectionList: string[]) => {
    addAnimesToManyCollections(animeAdded, collectionList);
    handleClose();
  };

  const { data } = useQuery(GET_DISPLAY_DATA, {
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

  const onPageChangeHandler = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  let cardContent = anime.length ? (
    <CardContainer>
      {anime.map((animeItem) => (
        <AnimeCard
          key={animeItem.id}
          title={animeItem.title.romaji}
          genre={animeItem.genres.join(', ')}
          banner={animeItem.coverImage.large}
          id={animeItem.id}
          onOpenAddToCollectionModal={() => handleOpenAddToCollectionModal(animeItem.id)}
        />
      ))}
    </CardContainer>
  ) : (
    <CardContainer>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <AnimeCard
          key={item}
          title={`Anime ${item}`}
          genre={'Loading...'}
          id={item}
          onOpenAddToCollectionModal={() => {}}
        />
      ))}
    </CardContainer>
  );
  return (
    <>
      <Backdrop isOpen={showAddToCollectionModal} onClose={handleClose} />
      <ModalAddToCollection
        isOpen={showAddToCollectionModal}
        onClose={handleClose}
        onUpdateCollection={handleAddToCollection}
        animeAdded={animeAdded[0]}
      />
      <HomepageContainer>
        <BulkAdd />
        {cardContent}
        <PaginationContainer>
          <Pagination count={24} size="small" onChange={onPageChangeHandler} />
        </PaginationContainer>
      </HomepageContainer>
    </>
  );
};

export default Homepage;
