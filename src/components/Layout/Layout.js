import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Skeleton/Skeleton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, StyledNavLink, Nav, Header } from './Layout.styled';

export const Layout = () => {
  const location = useLocation();

  return (
    <Container>
      <Header>
        <Nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </Nav>
      </Header>
      <main>
        <Suspense fallback={<Loader page={location.pathname} />}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer />
    </Container>
  );
};
