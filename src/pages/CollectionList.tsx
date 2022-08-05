import React, { FC } from 'react';
import CollectionCard from '../components/CollectionList/collection-card';
import TitleBlock from '../components/CollectionList/title-block';
import styled from '@emotion/styled';

const CollectionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const CollectionList: FC = () => {
  return (
    <CollectionListContainer>
      <TitleBlock />
      <CollectionCard />
    </CollectionListContainer>
  );
};

export default CollectionList;
