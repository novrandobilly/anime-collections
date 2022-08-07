import React, { FC } from 'react';
import styled from '@emotion/styled';

type BackdropProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Backdrop: FC<BackdropProps> = ({ isOpen, onClose }) => {
  const BackdropContainer = styled.div`
    display: ${isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 15;
    width: 100%;
    height: 100vh;
  `;
  return <BackdropContainer onClick={onClose}></BackdropContainer>;
};

export default Backdrop;
