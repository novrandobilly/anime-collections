/** @jsxImportSource @emotion/react */

import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';

import Default from '../../assets/default/default.jpg';
import Delete from '../../assets/icons/delete-red.svg';

const AnimeCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0;
  border-radius: 0.5rem;
  background-color: #ffffff;
  box-shadow: 0px 1.94128px 4.8532px rgba(0, 0, 0, 0.25);
`;

const AnimeCardImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 0.5rem 0.5rem 0 0;
`;

const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 1rem;
  box-sizing: border-box;
`;

const CaptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0;
`;

const Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #484649;
`;

const Genre = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 10.677px;
  line-height: 16px;
  letter-spacing: 0.48532px;
  color: #aeaaae;
`;

const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
`;

type AnimeCardProps = {
  anime: {
    title: string;
    genre: string[];
    bannerImage: string;
    id: number;
  };
  onDelete: (animeId: number) => void;
};

const AnimeCard: FC<AnimeCardProps> = ({ anime, onDelete }) => {
  return (
    <AnimeCardContainer>
      <Link
        to={`/anime/${anime.id}`}
        css={css`
          width: 100%;
        `}>
        <AnimeCardImage src={anime.bannerImage || Default} alt="Anime Banner" />
      </Link>
      <DetailsContainer>
        <Link
          to={`/anime/${anime.id}`}
          css={css`
            width: 100%;
          `}>
          <CaptionContainer>
            <Title>{anime.title}</Title>
            <Genre>{anime.genre.join(', ')}</Genre>
          </CaptionContainer>
        </Link>
        <DeleteIcon src={Delete} alt="Delete button" onClick={() => onDelete(anime.id)} />
      </DetailsContainer>
    </AnimeCardContainer>
  );
};

export default AnimeCard;
