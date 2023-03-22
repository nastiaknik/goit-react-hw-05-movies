import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px gray solid;
  width: 300px;
  height: 525px;
  text-align: center;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

export const Img = styled.img`
  background-color: #ebebeb;
`;

export const MovieTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  padding: 0 5px;
  color: black;
`;
