import s from './App.module.css';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleFormSubmit = searchValue => {
    setQuery(searchValue);
    setCurrentPage(1);
  };
  const onLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <div className={s.app}>
      <SearchBar onClickSubmit={handleFormSubmit} />
      <ImageGallery
        request={query}
        page={currentPage}
        onLoadMore={onLoadMore}
      />
      <ToastContainer autoClose={2500} hideProgressBar />
    </div>
  );
};

export default App;
