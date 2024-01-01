import axiosInstance from './axiosInstance';

export const RegisterUser = async (payload) => {
  try {
    const response = await axiosInstance.post('/api/user/register', payload);
    return response.data;
  } catch (err) {
    return err.message;
  }
};

export const LoginUser = async (payload) => {
  try {
    const response = await axiosInstance.post('/api/user/login', payload);
    return response.data;
  } catch (err) {
    return err.message;
  }
};

export const GetCurrentUser = async () => {
  try {
    const response = await axiosInstance.get('/api/user');
    console.log(response);
    return response.data;
  } catch (err) {
    return err.message;
  }
};
