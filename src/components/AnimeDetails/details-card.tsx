/** @jsxImportSource @emotion/react */
import React, { FC, useContext, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import GreenButton from '../shared/green-button';
import { AnimeType } from '../../lib/data-types';
import UserCollectionContext from '../../UserCollectionContext';

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  box-sizing: border-box;
  width: 100%;
`;

const DetailsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  width: 100%;
  background: #fffbfe;
  box-shadow: 0px 4px 20px rgba(127, 103, 190, 0.25);
  border-radius: 8px;
  margin-bottom: 1rem;
  box-sizing: border-box;
`;

const CollectionInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25rem;
`;

const CollectionInfo = styled.p`
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.5px;
  color: #939094;
`;

const DetailsTextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
`;

const KeyText = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #313033;
`;
const KeyTextSynopsis = styled.h4`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #313033;
`;

const ValueText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #787579;
`;

const SynopsisContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0px;
  width: 304px;
  border-bottom: 1px solid #c9c5ca;
  margin: 0 0 1rem;
  width: 100%;
  box-sizing: border-box;
`;

const SynopsisText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #484649;
  margin-bottom: 1rem;
`;

type PropsType = {
  anime: AnimeType;
  onOpenAddToCollectionModal: () => void;
};

const DetailsCard: FC<PropsType> = ({ anime, onOpenAddToCollectionModal }) => {
  const { collectionList } = useContext(UserCollectionContext);
  const [collectionListOfThisAnime, setCollectionListOfThisAnime] = useState<string[]>([]);

  useEffect(() => {
    if (collectionList.length === 0) {
      return;
    }
    let isInCollection: string[] = [];
    collectionList.forEach((collection) => {
      const isInside = collection.animeCollection.some((collectionAnime) => collectionAnime.id === anime.id);
      if (isInside) {
        isInCollection.push(collection.collectionTitle);
      }
    });
    setCollectionListOfThisAnime(isInCollection);
  }, [collectionList, anime]);

  return (
    <DetailsContainer>
      <DetailsCardContainer>
        <CollectionInfoContainer>
          {collectionListOfThisAnime.length < 1 ? (
            <CollectionInfo>You haven't added this masterpiece to any collections</CollectionInfo>
          ) : (
            <CollectionInfo>
              <span
                css={css`
                  color: #36b23b;
                `}>
                You saved this masterpiece to the following collections:{' '}
              </span>
              <span
                css={css`
                  color: #7f67be;
                  font-weight: 700;
                `}>
                {' '}
                {collectionListOfThisAnime.join(', ')}
              </span>
            </CollectionInfo>
          )}
          <DetailsTextContainer>
            <KeyText>Genre:</KeyText> <ValueText>{anime.genres.join(', ')}</ValueText>
          </DetailsTextContainer>
          <DetailsTextContainer>
            <KeyText>Format:</KeyText> <ValueText>{anime.format}</ValueText>
          </DetailsTextContainer>
          <DetailsTextContainer>
            <KeyText>Status:</KeyText> <ValueText>{anime.status}</ValueText>
          </DetailsTextContainer>
          <DetailsTextContainer>
            <KeyText># of Episodes:</KeyText> <ValueText>{anime.episodes}</ValueText>
          </DetailsTextContainer>
          <DetailsTextContainer>
            <KeyText>Duration:</KeyText> <ValueText>~ {anime.duration} min/eps</ValueText>
          </DetailsTextContainer>
          <DetailsTextContainer>
            <KeyText>Season:</KeyText> <ValueText>{anime.season}</ValueText>
          </DetailsTextContainer>
          <DetailsTextContainer>
            <KeyText>Avg. Score:</KeyText> <ValueText>{anime.averageScore} out of 100</ValueText>
          </DetailsTextContainer>
          <DetailsTextContainer>
            <KeyText>Popularity:</KeyText> <ValueText>{anime.popularity} </ValueText>
          </DetailsTextContainer>
          <DetailsTextContainer>
            <KeyText>Site URL:</KeyText>{' '}
            <a href={anime.siteUrl} target="_blank" rel="noreferrer">
              <ValueText>{anime.siteUrl} </ValueText>
            </a>
          </DetailsTextContainer>

          <div>
            <SynopsisContainer>
              <KeyTextSynopsis>Synopsis</KeyTextSynopsis>
            </SynopsisContainer>
            {/* <SynopsisText>{anime.description}</SynopsisText> */}
            {anime.description.split('<br>').map((paragraph, index) => (
              <SynopsisText key={index}>{paragraph}</SynopsisText>
            ))}
          </div>
        </CollectionInfoContainer>
      </DetailsCardContainer>
      <GreenButton onClick={onOpenAddToCollectionModal}>Add To Collection</GreenButton>
    </DetailsContainer>
  );
};

export default DetailsCard;
