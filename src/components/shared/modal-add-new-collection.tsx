import React, { FC } from 'react';
import styled from '@emotion/styled';
import XMark from '../../assets/icons/x-mark.svg';

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
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #484649;
`;

const InputText = styled.input`
  width: 100%;
  height: 1.5rem;
  border: none;
  outline: none;
  background-color: #f6edff;
  border-radius: 4px;
  margin-bottom: 1.5rem;
`;

const UpdateButton = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: #36b33b;
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

const ModalAddNewCollection: FC = () => {
  return (
    <ModalContainer>
      <CloseContainer>
        <Icon src={XMark} alt="Close button" />
      </CloseContainer>
      <Title>Collection Name</Title>
      <InputText type="text" />
      <UpdateButton>Add New Collection</UpdateButton>
    </ModalContainer>
  );
};

export default ModalAddNewCollection;
