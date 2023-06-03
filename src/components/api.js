import axios from "axios";
const BASE_URL = "https://street-bazr.onrender.com";

export const LOGIN_USER = async (email, password) => {

  try {
    const response = await axios.post(`${BASE_URL}/api/auth/login/`, {
       email,
       password,
    });
    return response.data
  } catch (error) {
    throw error;
  }
};

export const REGISTER_USER = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/register/`, {
      email,
      password,
    });
    return response.data
  } catch (error) {
    throw error;
  }
};


