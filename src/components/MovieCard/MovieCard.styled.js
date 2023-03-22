import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px gray solid;
  width: 300px;
  height: 525px;
`;

export const MovieTitle = styled.p`
  font-size: 20px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  padding: 0 5px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
`;
