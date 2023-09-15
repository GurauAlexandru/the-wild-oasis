/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { useUser } from '../features/authentication/useUser';
import Spinner from './Spinner';
import styled from 'styled-components';
import { useEffect } from 'react';

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  // 1. Load authenticated user;
  const { isLoading, isAuthenticated } = useUser();

  // 2. If NO authenticated user, redirect to login page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate('/login');
  }, [navigate, isAuthenticated, isLoading]);

  // 3. Show a spiner while loading;
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. If user, render app

  if (isAuthenticated) return children;
};

export default ProtectedRoute;
