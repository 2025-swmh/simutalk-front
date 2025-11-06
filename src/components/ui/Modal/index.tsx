import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as S from './style';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <S.Backdrop onClick={onClose}>
      <S.ModalPanel onClick={(e) => e.stopPropagation()}>{children}</S.ModalPanel>
    </S.Backdrop>,
    document.body, // Render into the body element
  );
};

export default Modal;
