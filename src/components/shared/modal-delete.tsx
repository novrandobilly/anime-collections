import React, { FC } from 'react';
import styled from '@emotion/styled';
import XMark from '../../assets/icons/x-mark.svg';

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
  transform: translate(-50%, ${(props: cssIsOpen) => (props.isOpen ? '-100%' : '-500%')});
  transition: all 400ms ease-in-out;
`;

const CloseContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const TitleText = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #484649;
`;

const SubTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #e92119;
  margin: 0 0 1rem;
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
`;

type ModalDeleteProps = {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  subMessage?: string;
  onDelete: () => void;
};

const ModalDelete: FC<ModalDeleteProps> = ({ isOpen, onClose, message, subMessage, onDelete }) => {
  return (
    <ModalContainer isOpen={isOpen}>
      <CloseContainer onClick={onClose}>
        <Icon src={XMark} alt="Close button" />
      </CloseContainer>
      <TitleText>{message ? message : 'Are you sure to delete this ?'}</TitleText>
      {subMessage && <SubTitle>{subMessage}</SubTitle>}

      <ButtonContainer>
        <CancelButton onClick={onClose}>Cancel</CancelButton>
        <DeleteButton onClick={onDelete}>Delete</DeleteButton>
      </ButtonContainer>
    </ModalContainer>
  );
};

export default ModalDelete;
