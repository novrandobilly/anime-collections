import React, { FC, useContext } from 'react';
import styled from '@emotion/styled';
import UserCollectionContext from '../../UserCollectionContext';

type cssIsOpen = {
  isOpen: boolean;
};
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
  position: fixed;
  z-index: 20;
  left: 50%;
  top: 50%;
  transform: translate(-50%, ${(props: cssIsOpen) => (props.isOpen ? '-100%' : '-1000%')});
  transition: all 400ms ease-in-out;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const CancelButton = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: #ffffff;
  border: 1px solid #e92119;
  border-radius: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #e92119;
  box-sizing: border-box;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: #e92119;
  border-radius: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

const InfoText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #e92119;
  margin: 0 0 1rem;
`;

type ModalResetProps = {
  isOpen: boolean;
  onClose: () => void;
};
const ModalReset: FC<ModalResetProps> = ({ isOpen, onClose }) => {
  const { resetState } = useContext(UserCollectionContext);
  const handleClearLocalStorage = () => {
    localStorage.clear();
    resetState();
    onClose();
  };
  return (
    <ModalContainer isOpen={isOpen}>
      <InfoText>
        This dialog box is made for development purpose only so that reviewer can clear and reset all collections &amp;
        saved animes value in the Local Storage.
      </InfoText>

      <InfoText>Are you sure you want to clear Local Storage?</InfoText>
      <ButtonContainer>
        <CancelButton onClick={onClose}>Cancel</CancelButton>
        <DeleteButton onClick={handleClearLocalStorage}>Delete</DeleteButton>
      </ButtonContainer>
    </ModalContainer>
  );
};

export default ModalReset;
