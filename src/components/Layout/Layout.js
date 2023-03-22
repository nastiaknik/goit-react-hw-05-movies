import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, StyledNavLink, Nav, Header } from './Layout.styled';
import Loader from 'components/Skeleton/Skeleton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </Nav>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer />
    </Container>
  );
};
