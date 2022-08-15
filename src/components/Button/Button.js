import s from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ title, onLoadMore }) {
  return (
    <button type="button" onClick={onLoadMore} className={s.button}>
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onLoadMore: PropTypes.func.isRequired,
};
