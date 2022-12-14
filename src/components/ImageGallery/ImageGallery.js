import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { getImages } from '../../API/getImages';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';

const ImageGallery = ({ request, page, onLoadMore, onOpenModal }) => {
  const [items, setItems] = useState({
    cards: [],
    loading: false,
    error: null,
  });
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    toast.success(`Welcome !!!`, {
      position: 'bottom-center',
      theme: 'dark',
    });
  }, []);
  useEffect(() => {
    const fetchImages = async () => {
      setItems(prevItems => ({
        ...prevItems,
        loading: true,
        error: null,
      }));
      try {
        const { hits, totalHits } = await getImages(request, page);
        const total = Math.ceil(totalHits / 12);
        setItems(prevItems => ({
          ...prevItems,
          cards: [...prevItems.cards, ...hits],
          loading: false,
        }));
        setTotalPages(total);
        if (totalHits === 0) {
          toast.error(`Nothing found, try again`, {
            theme: 'colored',
          });
        }
        if (totalHits !== 0 && page === 1) {
          toast.info(`Find ${totalHits}image/${total}pages`, {
            theme: 'colored',
          });
        }
        if (page > 1 && page === total) {
          toast.warn(`This is last page. Make new search`, {
            theme: 'colored',
          });
        }
      } catch (error) {
        toast.error('Something wrong, try again later!', {
          theme: 'colored',
        });
        setItems(prevItems => ({
          ...prevItems,
          loading: false,
          error: error.message,
        }));
      }
    };
    if (page > 1) {
      fetchImages();
      return;
    }
    if (request) {
      setItems(prevItems => ({
        ...prevItems,
        cards: [],
      }));
      fetchImages();
    }
  }, [page, request]);

  const { cards, loading, error } = items;
  const elements = cards.map(element => (
    <ImageGalleryItem
      key={element.id}
      {...element}
      onClickImage={onOpenModal}
    />
  ));
  const buttonVision = cards.length > 0 && page < totalPages && !loading;
  return (
    <>
      {error ? (
        <p> Sorry, some trouble. Try again later</p>
      ) : (
        <>
          <ul className={s.gallery}>{elements}</ul>
          {buttonVision && <Button onLoadMore={onLoadMore} title="Load more" />}
          {loading && <Spinner />}
        </>
      )}
    </>
  );
};

ImageGallery.propTypes = {
  request: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGallery;
