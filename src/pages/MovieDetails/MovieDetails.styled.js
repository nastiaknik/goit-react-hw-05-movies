import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';

export const MovieDescr = styled.div`
  text-align: start;
  padding: 0 15px;
`;

export const MovieInfo = styled.div`
  border-bottom: 1px gray solid;
  display: flex;
  padding: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  text-align: start;
  text-decoration: none;
  color: black;

  &.active {
    color: orangered;
  }
`;

export const StyledArrowIcon = styled(IoMdArrowBack)`
  display: flex;
  align-items: baseline;
  justify-content: left;
  margin-left: 15px;
  padding: 5px;
  font-size: 20px;
  :hover {
    color: orangered;
  }
`;
