import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import DefaultImage from '../assets/default/default.jpg';
import DetailsCard from '../components/AnimeDetails/details-card';
import styled from '@emotion/styled';

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const AnimeBanner = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 0.5rem;
  box-sizing: border-box;
`;

const AnimeTitle = styled.h1`
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  color: #484649;
  margin: 0 0 0.5rem;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const AnimeDetails: FC = () => {
  const { animeid } = useParams();
  console.log(animeid);
  return (
    <DetailsContainer>
      <AnimeBanner src={DefaultImage} alt="Anime Banner" />
      <AnimeTitle>Legend of Heroes: Trails of Cold Steel IV</AnimeTitle>
      <DetailsCard />
    </DetailsContainer>
  );
};

export default AnimeDetails;
