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
  padding: 0 0.5rem;
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
  border: 1px solid #484649;
  border-radius: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #484649;
  box-sizing: border-box;
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

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}`;

type ModalEditCollectionNameProps = {
  isOpen: boolean;
  onClose: () => void;
  onEditCollectionTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  newCollectionTitle: string;
  onUpdateCollectionTitle: (e: React.FormEvent<HTMLFormElement>) => void;
};

const ModalEditCollectionName: FC<ModalEditCollectionNameProps> = ({
  isOpen,
  onClose,
  onEditCollectionTitle,
  newCollectionTitle,
  onUpdateCollectionTitle,
}) => {
  return (
    <ModalContainer isOpen={isOpen}>
      <CloseContainer onClick={onClose}>
        <Icon src={XMark} alt="Close button" />
      </CloseContainer>
      <Title>Edit Collection Name</Title>
      <Form onSubmit={onUpdateCollectionTitle}>
        <InputText type="text" onChange={onEditCollectionTitle} value={newCollectionTitle} />
        <ButtonContainer>
          <CancelButton type="button" onClick={onClose}>
            Cancel
          </CancelButton>
          <UpdateButton type="submit">Update</UpdateButton>
        </ButtonContainer>
      </Form>
    </ModalContainer>
  );
};

export default ModalEditCollectionName;
