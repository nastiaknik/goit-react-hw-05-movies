import styled from 'styled-components';
import { RiSearchLine } from 'react-icons/ri';

export const SearchForm = styled.form`
  margin: 0 auto;
  max-width: 300px;
  overflow: hidden;
  position: relative;
`;

export const Input = styled.input`
  display: inline-block;
  font: inherit;
  font-size: 20px;
  border: 1px gray solid;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  min-width: 270px;
  min-height: 35px;
  cursor: pointer;

  :hover,
  :focus {
    border: 1px solid orangered;
  }
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  min-width: 39px;
  min-height: 39px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  border: 1px solid gray;
  cursor: pointer;
  background-color: white;

  &:hover,
  &:focus {
    border: 1px solid orangered;
  }
`;

export const SearchIcon = styled(RiSearchLine)`
  font-size: 20px;
  padding: 8px;
  width: 100%;
  height: 100%;
  :hover {
    color: orangered;
  }
`;
