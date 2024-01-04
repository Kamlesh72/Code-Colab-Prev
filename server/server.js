import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Server } from 'socket.io';
import { createServer } from 'http';
import connectDb from './db.js';
import authMiddleware from './middlewares/authMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';
import { ACTIONS } from './helpers/Actions.js';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
dotenv.config();
connectDb();

// Middlewares
app.use(express.json());
app.use(cors());

// Socket.io
const socketUsers = {};
const getAllUsers = async (roomId) => {
  const sockets = await io.in(roomId).fetchSockets();
  const roomUsers = sockets.map((socket) => {
    return { socketId: socket.id, username: socketUsers[socket.id] };
  });
  return roomUsers;
};

io.on('connection', (socket) => {
  socket.on(ACTIONS.JOIN, async ({ roomId, username }) => {
    socket.join(roomId);
    socketUsers[socket.id] = username;
    const users = await getAllUsers(roomId);
    console.log(username, users);
    io.to(roomId).emit(ACTIONS.JOIN, {
      users,
      username,
      socketId: socket.id,
    });
  });

  socket.on(ACTIONS.CODE_CHANGE, ({ roomId, editor, code }) => {
    socket.to(roomId).emit(ACTIONS.CODE_CHANGE, { editor, code });
  });

  // socket.on(ACTIONS.SYNC_CODE, ())

  // socket.on('disconnecting', () => {
  //   socket.leave(roomId);
  // });
});

// Routes
app.use('/api/user', userRoutes);
app.use('/api/dashboard', authMiddleware, dashboardRoutes);

httpServer.listen(process.env.PORT, () => {
  console.log('Server listening on PORT', process.env.PORT);
});
