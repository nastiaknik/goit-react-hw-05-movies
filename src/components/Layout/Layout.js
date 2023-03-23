import { useLocation, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Skeleton/Skeleton';
import { Container, Header, Nav, StyledNavLink, Main } from './Layout.styled';

export const Layout = () => {
  const location = useLocation();

  return (
    <Container>
      <Header>
        <Nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
          <StyledNavLink to="/my-list">My List</StyledNavLink>
        </Nav>
      </Header>
      <Main>
        <Suspense fallback={<Loader page={location.pathname} />}>
          <Outlet />
        </Suspense>
      </Main>
      <ToastContainer />
    </Container>
  );
};
