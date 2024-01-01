import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import HomePage from './pages/Home/HomePage';
import SignUpPage from './pages/Home/SignUpPage';
import SignInPage from './pages/Home/SignInPage';
import ForgotPassPage from './pages/Home/ForgotPassPage';
import DashboardPage from './pages/DashboardPage';
import RoomPage from './pages/RoomPage';
import ProtectedPage from './pages/ProtectedPage';
import Spinner from './components/Spinner';

function App() {
  const { loading } = useSelector((state) => state.loader);

  const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/register', element: <SignUpPage /> },
    { path: '/login', element: <SignInPage /> },
    { path: '/forgot-pass', element: <ForgotPassPage /> },
    {
      path: '/dashboard',
      element: (
        <ProtectedPage>
          <DashboardPage />
        </ProtectedPage>
      ),
    },
    {
      path: '/room/:id',
      element: (
        <ProtectedPage>
          <RoomPage />
        </ProtectedPage>
      ),
    },
  ]);

  return (
    <div className='App'>
      {loading && <Spinner />}
      <Toaster position='top-right'></Toaster>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
