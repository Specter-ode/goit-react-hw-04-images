import React, { useState } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';
import Modal from './Modal/Modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [modal, setModal] = useState({
    modalContent: '',
    description: '',
  });
  const handleFormSubmit = searchValue => {
    setQuery(searchValue);
    setCurrentPage(1);
  };
  const onLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };
  const closeModal = () => {
    setModal({ modalContent: '', description: '' });
  };

  const onOpenModal = (url, tags) => {
    setModal({
      modalContent: url,
      description: tags,
    });
  };
  const { modalContent, description } = modal;
  return (
    <div className={modalContent ? 'noScroll' : 'app'}>
      <SearchBar onClickSubmit={handleFormSubmit} />
      <ImageGallery
        request={query}
        page={currentPage}
        onLoadMore={onLoadMore}
        onOpenModal={onOpenModal}
      />
      {modalContent && (
        <Modal onClose={closeModal}>
          <img src={modalContent} alt={description} />
        </Modal>
      )}
      <ToastContainer autoClose={2500} hideProgressBar />
    </div>
  );
};

export default App;
