import axios from 'axios';

const userApi = axios.create({
  baseURL: 'http://localhost:5000/users'
});

export const checkEmail = function(email) {
  return userApi.get(`/check/email/${email}`);
};

export const checkUsername = function(username) {
  return userApi.get(`/check/username/${username}`);
};

export default userApi;
