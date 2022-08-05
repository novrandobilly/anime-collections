import React, { FC } from 'react';
import styled from '@emotion/styled';
import GreenButton from '../shared/green-button';

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  box-sizing: border-box;
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
`;

const DetailsCard: FC = () => {
  return (
    <DetailsContainer>
      <DetailsCardContainer>
        <CollectionInfoContainer>
          <CollectionInfo>You haven't added this masterpiece to any collections</CollectionInfo>
          <DetailsTextContainer>
            <KeyText>Genre:</KeyText> <ValueText>Action</ValueText>
          </DetailsTextContainer>
          <DetailsTextContainer>
            <KeyText># of Episodes:</KeyText> <ValueText>48</ValueText>
          </DetailsTextContainer>
          <DetailsTextContainer>
            <KeyText>Developer:</KeyText> <ValueText>Nihon Falcom</ValueText>
          </DetailsTextContainer>
          <DetailsTextContainer>
            <KeyText>Platform:</KeyText> <ValueText>Windows PC, Nintendo Switch, Playstation 4</ValueText>
          </DetailsTextContainer>
          <DetailsTextContainer>
            <KeyText>Rating:</KeyText> <ValueText>4.7 of 5.0</ValueText>
          </DetailsTextContainer>

          <div>
            <SynopsisContainer>
              <KeyTextSynopsis>Synopsis</KeyTextSynopsis>
            </SynopsisContainer>
            <SynopsisText>
              Now, Rean. Let us begin. Together, we shall write the end to this wretched fairy tale. In ink, black as
              despair. Languishing in chains as dusk falls around him. A guiding light swallowed by the darkness, in an
              empire shrouded by its curse. Filled with regrets that will never cease. Plagued by questions that will go
              unanswered. Unable to protect that which he held dear, lost in despair over mistakes that cannot be
              undone, he listlessly awaits his fate as a "Sacrifice." This is what has become of Rean Schwarzer, the
              Ashen Chevalier. As he sits in darkness, the world edges ever closer to its demise. The Erebonian Empire,
              the country with the most powerful military in recorded history, is now poised to swallow up the entire
              continent under the banner of its largest invasion plan yet—Operation Jormungandr.
            </SynopsisText>
          </div>
        </CollectionInfoContainer>
      </DetailsCardContainer>
      <GreenButton>Add To Collection</GreenButton>
    </DetailsContainer>
  );
};

export default DetailsCard;
