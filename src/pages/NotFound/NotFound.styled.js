import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  padding: 5px 10px;
  background-color: #f95b5b;
  color: white;
  text-transform: uppercase;
  :hover,
  :focus {
    background-color: #ee5340;
  }
`;

export const BtnList = styled.ul`
  margin-right: 40px;
  margin-top: 20px;
  list-style: none;
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;
