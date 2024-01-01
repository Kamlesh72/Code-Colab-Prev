import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  try {
    const token = req.header('authorization').split(' ')[1];
    const decryptedToken = jwt.verify(token, process.env.SECRET_KEY);
    req.body.userId = decryptedToken._id;
    next();
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};

export default authMiddleware;
