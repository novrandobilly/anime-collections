import React, { FC } from 'react';
import TitleBlock from '../components/CollectionDetails/title-block';
import AnimeCard from '../components/CollectionDetails/anime-card';
import styled from '@emotion/styled';

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
  return (
    <CollectionDetailsContainer>
      <TitleBlock />
      <AnimeCard />
    </CollectionDetailsContainer>
  );
};

export default CollectionDetails;
