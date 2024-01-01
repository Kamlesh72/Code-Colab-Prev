import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { v4 as uuidV4 } from 'uuid';

const DashboardPage = () => {
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();
  const createRoomId = () => {
    setRoomId(uuidV4);
  };

  const handleJoinRoom = () => {
    if (!roomId) {
      toast.error('Room ID cannot be empty!');
      return;
    }
    navigate(`/room/${roomId}`);
  };

  return (
    <div className='bg-gray-800 h-full'>
      <div className='bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-6  mx-auto md:h-full lg:py-0'>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Join ROOM
            </h1>
            <form className='space-y-4 md:space-y-6' action='#'>
              <div>
                <label
                  htmlFor='room-id'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Enter Room ID
                </label>
                <input
                  type='text'
                  name='room-id'
                  id='room-id'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='room-id'
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  required
                />
              </div>

              <button
                type='submit'
                className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                onClick={handleJoinRoom}
              >
                Join Room
              </button>
              <p className='text-sm font-light text-gray-500 dark:text-gray-400 w-full text-right '>
                If you don't have Room Id, then &nbsp;
                <span
                  onClick={createRoomId}
                  className='font-medium text-blue-600 dark:text-blue-500 hover:border-b-2 hover:border-blue-500 cursor-pointer'
                >
                  CREATE NEW ROOM
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
