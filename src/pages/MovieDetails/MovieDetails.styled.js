import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';

export const MovieInfo = styled.div`
  display: flex;
  height: 450px;
  padding: 16px;
  border-bottom: 1px gray solid;
`;

export const MovieDescr = styled.div`
  text-align: start;
  padding: 0 15px;
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
