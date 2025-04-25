import { useAuthStore } from '../store/auth';
import axios from '../utils/axios';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';

export const login = async (email, password) => {
  try {
    const { data, status } = await axios.post('user/token/', {
      email,
      password
    });
    if (status === 200) {
      setAuthUser(data.access, data.refresh);
      // alert('Login successful');
    }
    return { data, status };
  } catch (error) {
    return { 
      data: null, 
      error: error.response.data?.detail || 'Something went wrong', 
    };
  }
};

export const register = async (full_name, email, phone, password, password2) => {
  try {
    // Making a POST request to register a new user
    const { data } = await axios.post('user/register/', {
        full_name,
        email,
        phone,
        password,
        password2,
    });

    // Logging in the newly registered user and displaying success toast
    await login(email, password);

    // Displaying a success toast notification
    // Toast.fire({
    //     icon: 'success',
    //     title: 'Signed Up Successfully'
    // });

    // Returning data and error information
    return { data, error: null };

} catch (error) {
    // Handling errors and returning data and error information
    return {
        data: null,
        error: error.response.data || 'Something went wrong',
    };
}
};

export const logout = () => {
  Cookies.remove('access_token');
  Cookies.remove('refresh_token');
  useAuthStore.getState().setUser(null);
  // alert('Logout successful');
}

export const setUser = async (accessToken, refreshToken) => {
  Cookies.set('access_token', accessToken);
  Cookies.set('refresh_token', refreshToken);

  if(!accessToken || !refreshToken) {
    return;
  }

  if(isAccessTokenExpired(accessToken)) {
    const response = await getRefreshToken();
    setAuthUser(response.access, refreshToken);
  } else {
    setAuthUser(accessToken, refreshToken);
  }
}

export const setAuthUser = (access_token, refresh_token) => {
  Cookies.set('access_token', access_token, {
    expires: 1,
    secure: true
  });
  Cookies.set('refresh_token', refresh_token, {
    expires: 2,
    secure: true
  });

  const user = jwt_decode(access_token);

  if(user) {
    useAuthStore.getState().setUser(user);
  }
  useAuthStore.getState().setLoading(false);
}

export const getRefreshToken = async () => {
  const refresh_token = Cookies.get('refresh_token');
  const response = await axios.post('user/token/refresh/', {
    refresh: refresh_token
  });
  return response.data;
}

export const isAccessTokenExpired = (access_token) => {
  try {
    const decoded = jwt_decode(access_token);
    return decoded.exp < Date.now() / 1000;
  }
  catch (error) {
    console.log(error);
    return true
  }
}