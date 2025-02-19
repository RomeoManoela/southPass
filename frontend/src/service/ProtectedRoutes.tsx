import { Navigate, useLoaderData } from 'react-router-dom';
import { ReactNode } from 'react';

function ProtectedRoutes({ children }: { children: ReactNode }): ReactNode {
  const isAuthenticated = useLoaderData();
  return isAuthenticated ? children : <Navigate to={'/login'} />;
}

export default ProtectedRoutes;
