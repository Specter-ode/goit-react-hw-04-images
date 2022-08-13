import s from './SearchBar.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

export default class SearchBar extends Component {
  state = {
    searchValueInForm: '',
  };

  handleSearchValue = e => {
    this.setState({
      searchValueInForm: e.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchValueInForm } = this.state;
    if (searchValueInForm.trim() === '') {
      toast.error('Введите имя запроса.', {
        theme: 'colored',
      });
      return;
    }
    this.props.onClickSubmit(searchValueInForm);
    this.setState({ searchValueInForm: '' });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.searchform} onSubmit={this.handleSubmit}>
          <button className={s.searchform__button} type="submit">
            <ImSearch style={{ width: 20, height: 20 }} />
          </button>
          <input
            className={s.searchform__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchValueInForm}
            onChange={this.handleSearchValue}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onClickSubmit: PropTypes.func.isRequired,
};
