/** @jsxImportSource @emotion/react */

import React, { FC, useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import TitleBlock from '../components/CollectionDetails/title-block';
import AnimeCard from '../components/CollectionDetails/anime-card';
import styled from '@emotion/styled';
import UserCollectionContext from '../UserCollectionContext';
import { AnimeType } from '../lib/data-types';
import Backdrop from '../components/shared/backdrop';
import ModalDelete from '../components/shared/modal-delete';

const CollectionDetailsContainer = styled.div`
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

const CollectionDetails: FC = () => {
  const navigate = useNavigate();
  const { collectionList, removeAnimeFromCollection } = useContext(UserCollectionContext);
  const [animeList, setAnimeList] = useState<AnimeType[]>([]);
  const { collectionid } = useParams();
  const [showDelete, setShowDelete] = useState(false);
  const [toDeleteAnimeId, setToDeleteAnimeId] = useState<number | null>(null);

  useEffect(() => {
    const collection = collectionList.find(
      (collection) => collection.collectionTitle === collectionid?.split('-').join(' ')
    );
    setAnimeList(collection?.animeCollection || []);
  }, [setAnimeList, collectionList, collectionid]);

  const handleCloseDelete = () => {
    setShowDelete(false);
  };

  const handleOpenDelete = (animeId: number) => {
    setShowDelete(true);
    setToDeleteAnimeId(animeId);
  };

  const handleDelete = () => {
    removeAnimeFromCollection(collectionid?.split('-').join(' ') || '', toDeleteAnimeId || 0);
    setShowDelete(false);
  };

  const content = animeList.length ? (
    animeList.map((anime) => {
      return (
        <AnimeCard
          key={anime.id}
          anime={{
            title: anime.title.romaji,
            genre: anime.genres,
            bannerImage: anime.coverImage.large,
            id: anime.id,
          }}
          onDelete={handleOpenDelete}
        />
      );
    })
  ) : (
    <EmptyLabel>
      You have no Anime yet in this collection.{' '}
      <span
        css={css`
          color: #7f67be;
          font-style: italic;
          cursor: pointer;
        `}
        onClick={() => navigate('/')}>
        Add new anime.
      </span>
    </EmptyLabel>
  );

  return (
    <>
      <ModalDelete
        isOpen={showDelete}
        onClose={handleCloseDelete}
        message="Are you sure you want to delete this anime from the collection?"
        onDelete={handleDelete}
      />
      <Backdrop isOpen={showDelete} onClose={handleCloseDelete} />
      <CollectionDetailsContainer>
        <TitleBlock title={collectionid?.split('-').join(' ') || 'Loading...'} />
        {content}
      </CollectionDetailsContainer>
    </>
  );
};

export default CollectionDetails;
