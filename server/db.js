import mongoose from 'mongoose';

const connectDb = () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MONGODB');
  } catch (err) {
    console.log(err);
  }
};

export default connectDb;
