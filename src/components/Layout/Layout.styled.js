import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  min-height: 100vh;
  padding-bottom: 24px;
  text-align: center;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  z-index: 999;
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

export const Main = styled.main`
  padding-top: 70px;
`;
