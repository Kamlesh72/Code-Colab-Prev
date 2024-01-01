import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export const getCurrentUserController = async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    res.send({
      success: true,
      message: 'User fetched Successfully',
      data: user,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};

export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (name && email && password) {
      if (await User.findOne({ email })) return res.send({ ok: false, message: 'User already Exists' });
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ ...req.body, password: hashedPassword });
      await user.save();
      res.send({ success: true, message: 'User registration successful' });
    } else throw new Error('All Fields Required');
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ email });
      if (!user) throw new Error("User doesn't exist");
      const isPasswordMatched = await bcrypt.compare(password, user.password);
      if (!isPasswordMatched)
        return res.send({
          ok: false,
          message: 'User credentials are not valid',
        });
      const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
        expiresIn: '7d',
      });
      res.send({ success: true, message: 'User login successful', token });
    } else throw new Error('All Fields Required');
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};

export const forgotPasswordController = async (req, res) => {
  try {
    // WORK IN PROGRESS
    res.send({ success: true, message: 'WORK IN PROGRESS' });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};
