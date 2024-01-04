import { io } from 'socket.io-client';

export const initSocket = async () => {
  return io(process.env.REACT_APP_BACKEND_URL, {
    transports: ['websocket'],
  });
};
