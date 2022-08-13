import PropTypes from 'prop-types';
import s from './Modal.module.css';
import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#root-modal');
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeByEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEsc);
  }
  closeByEsc = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  onClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div className={s.overlay} onClick={this.onClickBackdrop}>
        <div className={s.modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
