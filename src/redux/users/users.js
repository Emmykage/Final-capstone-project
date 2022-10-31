// import ApiClient from '../../services/ApiClient';

const BASE_URL = 'http://127.0.0.1:3000/api/v1/';
const FETCH_USER = 'users/user/GET_USER';

export default function userReducer(state = [], action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;

    default:
      return state;
  }
}

export const registerUser = (userInfo) => async () => {
  await fetch(`${BASE_URL}create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  });
};

export const loginUser = (userInfo) => async () => {
  const response = await fetch(`${BASE_URL}login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  }).then((res) => res.json()).then((res) => res.token);
  localStorage.setItem('token', response);
  return response;
};
