import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  padding-bottom: 24px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
  margin-left: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  text-align: start;
  text-decoration: none;
  color: black;

  &.active {
    color: orangered;
  }
`;

export const Header = styled.header`
  border-bottom: 1px gray solid;
  padding: 15px;
`;

export const MovieDescr = styled.div`
  text-align: start;
  padding: 0 15px;
`;

export const MovieInfo = styled.div`
  border-bottom: 1px gray solid;
  display: flex;
  padding: 16px;
`;
