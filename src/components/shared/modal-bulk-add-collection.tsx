import React, { FC } from 'react';
import styled from '@emotion/styled';
import XMark from '../../assets/icons/x-mark.svg';
import Next from '../../assets/icons/pagination-next.svg';
import Prev from '../../assets/icons/pagination-previous.svg';
import PlusPurple from '../../assets/icons/plus.svg';

const ModalContainer = styled.div`
  width: 328px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 1rem;
  border: 1px solid #e6e6e6;
`;

const CloseContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const Title = styled.h1`
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  color: #484649;
  margin-bottom: 1rem;
`;
const SubTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h4`
  width: 100%;
  text-align: start;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #484649;
`;

const CollectionItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  margin-bottom: 1rem;
`;

const CollectionItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemTitle = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.25px;
  color: #484649;
`;

const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
`;

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;
const UpdateButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  background: #36b33b;
  border-radius: 8px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #ffffff;
  border: none;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const ModalBulkAddCollection: FC = () => {
  return (
    <ModalContainer>
      <CloseContainer>
        <Icon src={XMark} alt="Close button" />
      </CloseContainer>
      <Title>Add To Collection</Title>
      <Section>
        <SubTitle>Anime List</SubTitle>
        <CollectionItemContainer>
          <CollectionItem>
            <ItemTitle>Trails In The Sky: FC</ItemTitle>
            <Checkbox type={'checkbox'} />
          </CollectionItem>
          <CollectionItem>
            <ItemTitle>Trails In The Sky: SC</ItemTitle>
            <Checkbox type={'checkbox'} />
          </CollectionItem>
          <CollectionItem>
            <ItemTitle>Trails In The Sky: TC</ItemTitle>
            <Checkbox type={'checkbox'} />
          </CollectionItem>
        </CollectionItemContainer>
        <PaginationContainer>
          <Icon src={Prev} alt="Close button" />
          <Icon src={Next} alt="Close button" />
        </PaginationContainer>
      </Section>
      <Section>
        <SubTitleContainer>
          <SubTitle>Choose to save on which Collection</SubTitle>
          <Icon src={PlusPurple} alt="Add to collection" />
        </SubTitleContainer>
        <CollectionItemContainer>
          <CollectionItem>
            <ItemTitle>Legend of Heroes</ItemTitle>
            <Checkbox type={'checkbox'} />
          </CollectionItem>
          <CollectionItem>
            <ItemTitle>YS Series</ItemTitle>
            <Checkbox type={'checkbox'} />
          </CollectionItem>
        </CollectionItemContainer>
      </Section>
      <UpdateButton>Update Collection</UpdateButton>
    </ModalContainer>
  );
};

export default ModalBulkAddCollection;
