import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = props => {
  const { id, webformatURL, tags, onClickImage } = props;

  return (
    <li className={s.imageGalleryItem} key={id}>
      <img
        className={s.imageGalleryItem__image}
        src={webformatURL}
        alt={tags}
        onClick={() => onClickImage(id)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  onClickImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
