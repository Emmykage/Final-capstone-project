const BASE_URL = 'http://127.0.0.1:3000/api/v1/';
const FETCHED_MOTOCYCLES = 'motocycles/motocycle/FETCHING_MOTOCYCLES';
const FETCH_MOTOCYCLE = 'motocycles/motocycle/FETCHING_MOTOCYCLE';
const DELETE_MOTOCYCLE = 'motocyles/motocycle/DELETE_MOTOCYCLE';

export default function reducer(state = [], action) {
  switch (action.type) {
    case FETCHED_MOTOCYCLES:
      return [...action.payload];
    case DELETE_MOTOCYCLE:
      return [
        ...state.filter((motocycle) => motocycle.id !== action.id),
      ];
    case FETCH_MOTOCYCLE:
      return action.payload;
    default:
      return state;
  }
}
export const getmotocycle = (id) => async (dispatch) => {
  const token = localStorage.getItem('token');
  const motocycle = await fetch(`${BASE_URL}/motorcycles/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },

  }).then((res) => res.text());

  dispatch({
    type: DELETE_MOTOCYCLE,
    payload: motocycle,
  });
};
export const deleteMotocycle = (id) => async (dispatch) => {
  const token = localStorage.getItem('token');
  await fetch(`${BASE_URL}/motorcycles/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },

  });
  dispatch({
    type: DELETE_MOTOCYCLE,
    id,
  });
};

export const addMotorcycle = (data) => async () => {
  const token = localStorage.getItem('token');
  await fetch(`${BASE_URL}motorcycles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(data),
  });
};

export const fetchedMotocycles = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${BASE_URL}motorcycles`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },

  });
  const motorcycles = await response.json();
  dispatch({
    type: FETCHED_MOTOCYCLES,
    payload: motorcycles,

  });
};
