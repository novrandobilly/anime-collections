import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import DefaultImage from '../../assets/default/default.jpg';
import Plus from '../../assets/icons/plus.svg';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 156px;
  min-height: 164.48px;
  background: #ffffff;
  box-shadow: 0px 1.94128px 4.8532px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

const Banner = styled.img`
  width: 100%;
  min-width: 156px;
  height: 150px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px 8px 0px 0px;
`;
const AddButton = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 5;
`;

const CaptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4px 8px;
  min-width: 0;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #484649;
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  text-decoration: none;
`;

const Genre = styled.p`
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 10.677px;
  line-height: 16px;
  letter-spacing: 0.48532px;
  color: #aeaaae;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

const BannerContainer = styled.div`
  position: relative;
`;

type Props = {
  title: string;
  genre: string;
  banner?: string;
  id: number;
  onOpenAddToCollectionModal: () => void;
};

const AnimeCardMobile: FC<Props> = ({ title, genre, banner, id, onOpenAddToCollectionModal }) => {
  return (
    <CardContainer>
      <BannerContainer>
        <Link
          to={`anime/${id}`}
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}>
          <Banner src={banner || DefaultImage} alt="banner" />
        </Link>
        {}
        <AddButton src={Plus} alt="Add" onClick={onOpenAddToCollectionModal} />
      </BannerContainer>
      <Link
        to={`anime/${id}`}
        style={{
          textDecoration: 'none',
          color: 'inherit',
          width: '100%',
        }}>
        <CaptionContainer>
          <Title>{title}</Title>
          <Genre>{genre}</Genre>
        </CaptionContainer>
      </Link>
    </CardContainer>
  );
};

export default AnimeCardMobile;
