import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { gql, useQuery } from '@apollo/client';
import { AnimeType } from '../lib/data-types';
import { useNavigate } from 'react-router-dom';

import Back from '../assets/icons/back.svg';
import DefaultImage from '../assets/default/default.jpg';
import DetailsCard from '../components/AnimeDetails/details-card';

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const BackContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 28px;
  color: #484649;
`;

const BackIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
`;

const AnimeBanner = styled.img`
  width: 100%;
  height: auto;
  max-height: 229.5px;
  margin-bottom: 0.5rem;
  box-sizing: border-box;
  object-fit: cover;
  object-position: center;
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
  const navigate = useNavigate();
  const [animeDetails, setAnimeDetails] = useState<AnimeType>({
    id: 0,
    title: {
      romaji: 'Loading...',
      english: 'Loading...',
      native: 'Loading...',
    },
    coverImage: {
      large: '',
    },
    description: 'Loading...',
    genres: ['Loading...'],
    format: 'Loading...',
    status: 'Loading...',
    episodes: 0,
    duration: 0,
    season: 'Loading...',
    averageScore: 0,
    popularity: 0,
    siteUrl: 'Loading...',
  });
  const { animeid } = useParams();
  const { data } = useQuery(gql`
  query {
    Media(id: ${animeid}) {
      id
      title {
        romaji
        english
        native
      }
      coverImage {
        large
      }
      description
      genres
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      format
      status
      episodes
      duration
      season
      averageScore
      popularity
      siteUrl
    }
  }
`);

  useEffect(() => {
    if (data) {
      setAnimeDetails(data.Media);
    }
  }, [data]);

  return (
    <DetailsContainer>
      <BackContainer onClick={() => navigate(-1)}>
        <BackIcon src={Back} alt="Back button" />
        Back
      </BackContainer>
      <AnimeBanner src={animeDetails.coverImage.large || DefaultImage} alt="Anime Banner" />
      <AnimeTitle>{animeDetails.title.romaji}</AnimeTitle>
      <DetailsCard anime={animeDetails} />
    </DetailsContainer>
  );
};

export default AnimeDetails;
