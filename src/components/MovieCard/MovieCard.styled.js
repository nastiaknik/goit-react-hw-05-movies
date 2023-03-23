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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
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
