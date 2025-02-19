import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './ui/AppLayout.tsx';
import Home from './ui/Home.tsx';
import ProtectedRoutes from './service/ProtectedRoutes.tsx';
import Dashboard from './user/Dashboard.tsx';
import Login from './user/Login.tsx';
import Register from './user/Register.tsx';
import Error from './ui/Error.tsx';
import { loginAction } from './service/action.ts';
import { dashboardLoader } from './service/loader.ts';

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/dashboard',
          element: (
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          ),
          loader: dashboardLoader,
        },
        {
          path: '/login',
          element: <Login />,
          action: loginAction,
        },
        {
          path: '/register',
          element: <Register />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
