import React, { FC } from 'react';
import BulkAdd from '../components/Homepage/bulk-add';
import AnimeCard from '../components/Homepage/anime-card-m';
import styled from '@emotion/styled';

const HomepageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 1rem;
  box-sizing: border-box;
  gap: 1rem;
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

const Homepage: FC = () => {
  return (
    <HomepageContainer>
      <BulkAdd />
      <CardContainer>
        <AnimeCard title="Trails In The Sky: FC" genre="Action" />
        <AnimeCard title="Trails In The Sky: SC" genre="Action" />
        <AnimeCard title="Trails In The Sky: TC" genre="Action" />
        <AnimeCard title="Trails In The Sky: TC" genre="Action" />
        <AnimeCard title="Trails In The Sky: TC" genre="Action" />
        <AnimeCard title="Trails In The Sky: TC" genre="Action" />
      </CardContainer>
      <PaginationContainer>
        <p>Pagination</p>
      </PaginationContainer>
    </HomepageContainer>
  );
};

export default Homepage;
