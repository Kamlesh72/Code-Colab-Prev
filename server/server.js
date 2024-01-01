import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './db.js';
import authMiddleware from './middlewares/authMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';

const app = express();
dotenv.config();
connectDb();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/user', userRoutes);
app.use('/api/dashboard', authMiddleware, dashboardRoutes);

app.listen(process.env.PORT, () => {
  console.log('Server listening on PORT', process.env.PORT);
});
