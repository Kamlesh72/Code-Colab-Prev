import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { Parse } from 'parse/dist/parse.min.js';
import { GetCurrentUser } from '../api/users';

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = await GetCurrentUser();
        const username = user.data.name;
        setCurrentUser(username);
        // console.log(username);
      } catch (error) {
        console.error('Error fetching current User: ', error);
      }
    }
    fetchCurrentUser();
  }, []);

  return (

    <nav className='bg-white border-gray-200 dark:bg-gray-900'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href='https://flowbite.com/' className='flex items-center'>
          <img
            src='https://flowbite.com/docs/images/logo.svg'
            className='h-8 mr-3'
            alt='Flowbite Logo'
          />
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            Code Colab
          </span>
        </a>
        <div
          className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
          id='navbar-user'
        >
          <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <Link
                className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
                aria-current='page'
              >
                Home
              </Link>
            </li>
            <li>
              <Link className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                About
              </Link>
            </li>
            <li>
              <Link className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                Services
              </Link>
            </li>
            <li>
              <Link className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                Pricing
              </Link>
            </li>
            <li>
              <Link className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex items-center md:order-2 mr-3 text-sm'>
          <div className='block text-sm text-gray-900 dark:text-white pr-3 cursor-pointer '>
            {currentUser.toUpperCase()}
          </div>
          <div className='rounded-full md:mr-0'>
            <img
              className='w-8 h-8 rounded-full cursor-pointer'
              src='https://flowbite.com/docs/images/people/profile-picture-3.jpg'
              alt='user'
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
