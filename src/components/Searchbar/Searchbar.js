import PropTypes from 'prop-types';
import {
  SearchForm,
  SearchButton,
  Input,
  SearchIcon,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  return (
    <SearchForm onSubmit={onSubmit}>
      <label>
        <Input type="text" autoFocus placeholder="Search movie" name="search" />
      </label>
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
    </SearchForm>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
