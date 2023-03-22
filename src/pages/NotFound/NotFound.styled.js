import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: block;
  max-width: 130px;
  padding: 5px 10px;
  margin: 20px auto 0px;
  font-size: 24px;
  text-decoration: none;
  text-transform: uppercase;
  background-color: #f95b5b;
  color: white;

  :hover,
  :focus {
    background-color: #ee5340;
  }
`;
