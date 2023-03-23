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

export const Stars = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 115px;
  height: 45px;
  padding: 13px;
  color: black;
  text-transform: uppercase;
  font-style: normal;
  line-height: 1.33;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const AddToMyListBtn = styled(Button)`
  background-color: rgba(255, 255, 255, 1);

  &:hover {
    color: rgba(255, 255, 255, 1);
    background-color: #ff6b08;
  }
`;

export const RemoveFromMyListBtn = styled(Button)`
  border-color: #ff6b08;
  color: rgba(255, 255, 255, 1);
  background-color: #ff6b08;

  &:hover {
    border-color: black;
  }
`;
