import s from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ title, onLoadMoreInButton }) {
  return (
    <button type="button" onClick={onLoadMoreInButton} className={s.button}>
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onLoadMoreInButton: PropTypes.func.isRequired,
};
