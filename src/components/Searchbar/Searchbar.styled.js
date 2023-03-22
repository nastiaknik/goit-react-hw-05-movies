import styled from 'styled-components';
import { RiSearchLine } from 'react-icons/ri';

export const SearchForm = styled.form`
  position: relative;
  overflow: hidden;
  max-width: 300px;
  margin: 0 auto;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  min-width: 270px;
  min-height: 35px;
  padding-left: 10px;
  padding-right: 10px;
  font: inherit;
  font-size: 20px;
  border: 1px gray solid;
  outline: none;
  cursor: pointer;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }

  :hover,
  :focus {
    border: 1px solid orangered;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  min-width: 39px;
  min-height: 39px;
  padding: 0;
  margin: 0;
  border: 1px solid gray;
  background-color: white;
  outline: none;
  cursor: pointer;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: 1px solid orangered;
  }
`;

export const SearchIcon = styled(RiSearchLine)`
  width: 100%;
  height: 100%;
  padding: 8px;
  font-size: 20px;

  :hover {
    color: orangered;
  }
`;
