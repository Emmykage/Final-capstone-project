const BASE_URL = 'https://motocycle-booking.herokuapp.com/api/v1/';
const LOGIN_SUCCESS = 'users/user/LOGIN_SUCCESS';

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.data;

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

export const loginUser = (userInfo, navigate) => async (dispatch) => {
  await fetch(`${BASE_URL}login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  }).then((res) => res.json())
    .then((data) => {
      if (data.error) {
        alert(data.error);
      } else {
        localStorage.setItem('user', data.username);
        localStorage.setItem('token', data.token);
        if (data.username) {
          navigate('/');
        }
      }

      dispatch({
        type: LOGIN_SUCCESS,
        data,
      });
    });
};
