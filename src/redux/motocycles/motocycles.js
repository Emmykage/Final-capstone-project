import ApiClient from '../../services/ApiClient';

const BASE_URL = 'http://127.0.0.1:3000/api/v1/';
const FETCHED_MOTOCYCLES = 'motocycles/motocycle/FETCHING_MOTOCYCLES';
const DELETE_MOTOCYCLE = 'motocyles/motocycle/DELETE_MOTOCYCLE';

export default function reducer(state = [], action) {
  switch (action.type) {
    case FETCHED_MOTOCYCLES:
      return [...action.payload];
    case DELETE_MOTOCYCLE:
      return [
        ...state.filter((motocycle) => motocycle.id != action.id),
      ];
    default:
      return state;
  }
}

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

export const fetchMotocycles = () => async (dispatch) => {
  dispatch(fetching());
  setTimeout(async () => {
    const response = await ApiClient.fetchMotocycles();
    dispatch(fetchedMotocycles(response));
  }, 1000);
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
  const formattedmotocycles = motorcycles.map((motocycle) => ({
    id: motocycle.id,
    model: motocycle.model,
    avatar: motocycle.avatar,
    description: motocycle.description,
    price: motocycle.prices,
  }));
  dispatch({
    type: FETCHED_MOTOCYCLES,
    payload: formattedmotocycles,

  });
};
