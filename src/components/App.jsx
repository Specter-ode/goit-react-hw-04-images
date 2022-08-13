import s from './App.module.css';
import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
  state = {
    searchValueInApp: '',
  };

  handleFormSubmit = searchValueInApp => {
    this.setState({ searchValueInApp });
  };

  render() {
    const { searchValueInApp } = this.state;
    return (
      <div className={s.app}>
        <SearchBar onClickSubmit={this.handleFormSubmit} />
        <ImageGallery
          request={searchValueInApp}
          // pageNumber={page}
          // onLoadMoreInGallery={this.onLoadMoreInApp}
        />
        <ToastContainer autoClose={2500} hideProgressBar />
      </div>
    );
  }
}
