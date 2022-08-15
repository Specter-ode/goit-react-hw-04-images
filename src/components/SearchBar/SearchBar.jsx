import s from './SearchBar.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

const SearchBar = ({ onClickSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = e => {
    setSearchValue(e.target.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (searchValue.trim() === '') {
      toast.error('Введите имя запроса.', {
        theme: 'colored',
      });
      return;
    }
    onClickSubmit(searchValue);
    setSearchValue('');
  };
  return (
    <header className={s.searchbar}>
      <form className={s.searchform} onSubmit={handleSubmit}>
        <button className={s.searchform__button} type="submit">
          <ImSearch style={{ width: 20, height: 20 }} />
        </button>
        <input
          className={s.searchform__input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchValue}
          onChange={handleSearchValue}
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onClickSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
