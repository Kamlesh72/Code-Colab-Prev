import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetCurrentUser } from '../api/users';
import { toast } from 'react-hot-toast';
import { setLoader } from '../redux/loaderSlice';
import { setUser } from '../redux/userSlice';
import Navbar from '../components/Navbar';

const ProtectedPage = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const validateToken = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetCurrentUser();
      dispatch(setLoader(false));
      if (response.success) dispatch(setUser(response.data));
      else throw new Error(response.message);
    } catch (err) {
      toast.error(err.message);
      navigate('/login');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('token')) validateToken();
    else navigate('/login');
  }, []);

  return (
    <>
      {user && (
        <div className='h-screen flex flex-col'>
          <div>
            <Navbar />
          </div>
          <div className='flex-1'>{children}</div>
        </div>
      )}
    </>
  );
};

export default ProtectedPage;
