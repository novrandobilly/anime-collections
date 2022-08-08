import React, { FC, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

const CollectionDetails: FC = () => {
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
        {animeList.map((anime) => {
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
        })}
      </CollectionDetailsContainer>
    </>
  );
};

export default CollectionDetails;
