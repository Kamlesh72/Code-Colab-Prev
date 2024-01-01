import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <Link to={'/register'}>
        <button
          type='button'
          class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
        >
          Sign Up
        </button>
      </Link>
      <Link to={'/login'}>
        <button
          type='button'
          class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
        >
          Sign In
        </button>
      </Link>
      <br />

      <br />
    </div>
  );
};

export default HomePage;
