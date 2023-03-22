import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import {
  SearchForm,
  Input,
  SearchButton,
  SearchIcon,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';

  return (
    <SearchForm onSubmit={onSubmit}>
      <label>
        <Input
          type="text"
          autoFocus
          placeholder="Search movie"
          name="search"
          defaultValue={search}
        />
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
