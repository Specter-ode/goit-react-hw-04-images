import PropTypes from 'prop-types';
import s from './Modal.module.css';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#root-modal');

const Modal = ({ onClose, children }) => {
  const closeByEsc = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const onClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', closeByEsc);
    return () => document.removeEventListener('keydown', closeByEsc);
  }, [closeByEsc]);

  return createPortal(
    <div className={s.overlay} onClick={onClickBackdrop}>
      <div className={s.modal}>{children}</div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
