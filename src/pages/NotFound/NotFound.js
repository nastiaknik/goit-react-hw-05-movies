import Page404 from '../../components/defaultImages/404-page.png';
import { StyledNavLink, BtnList } from './NotFound.styled';
/* import { useLocation } from 'react-router-dom';
import { useRef } from 'react'; */

const NotFound = () => {
  /*   const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  console.log(backLinkLocationRef); */
  return (
    <>
      <img
        src={Page404}
        alt="404 error, you underestimate the power of dark side"
        width="548"
        height="372"
      />
      <BtnList>
        {/*         <li>
          <StyledNavLink to={backLinkLocationRef.current}>
            Go back
          </StyledNavLink>
        </li> */}
        <li>
          <StyledNavLink to="/">Go home</StyledNavLink>
        </li>
      </BtnList>
    </>
  );
};

export default NotFound;
