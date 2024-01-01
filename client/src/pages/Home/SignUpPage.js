import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterUser } from '../../api/users';
import { toast } from 'react-hot-toast';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RegisterUser(formData);
      if (response.success) {
        toast.success('User Registered Successfully');
        navigate('/login');
      } else throw new Error(response.message);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className='bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
      <Link
        to='/'
        className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'
      >
        <img
          className='w-8 h-8 mr-2'
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg'
          alt='logo'
        />
        Code Colab
      </Link>
      <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
            Create an account
          </h1>
          <form className='space-y-4 md:space-y-6' action='#'>
            <div>
              <label
                htmlFor='name'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Type your name here'
                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                onChange={handleChange}
                value={formData.name}
                required
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Your email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='yourname@gmail.com'
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>

            <div>
              <label
                htmlFor='password'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Password
              </label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='••••••••'
                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                onChange={handleChange}
                value={formData.password}
                required
              />
            </div>

            <button
              type='submit'
              className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              onClick={handleSubmit}
            >
              Create an account
            </button>
            <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
              Already have an account?{' '}
              <Link
                to='/signin'
                className='font-medium text-blue-600 hover:underline dark:text-blue-500'
              >
                Sign In here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
