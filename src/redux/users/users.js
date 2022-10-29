import ApiClient from '../../services/ApiClient';

const BASE_URL = 'http://127.0.0.1:3000/api/v1/';
const FETCHING_USER = 'users/user/GET_USER';



export const fetchUser = () => async (dispatch) => {
  await fetch(`${BASE_URL}/motorcycles/${id}`, {
    method: 'DELETE',
  });
  dispatch({
    type: DELETE_MOTOCYCLE,
    id,
  });
};
export function fetching() {
  return {
    type: FETCHING_USER,
  };
}

export const fetchMotocycles = () => async (dispatch) => {
  dispatch(fetching());
  setTimeout(async () => {
    const response = await ApiClient.fetchMotocycles();
    dispatch(fetchedMotocycles(response));
  }, 1000);
};
export const reserveMotocycle = (motocycle) => ({
  type: RESERVE_MOTOCYCLE,
  motocycle,
});

export const cancelReservation = (motocycle) => ({
  type: CANCEL_RESERVATION,
  motocycle,
});

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case FETCHING_MOTOCYCLES:
      return 'fetching motocycles...';
    case FETCHED_MOTOCYCLES:
      return [...action.motocycles];
    case RESERVE_MOTOCYCLE:
      return state.map(
        (motocycle) => (
          motocycle.id !== action.motocycle.id
            ? motocycle
            : { ...motocycle, reserved: true }),
      );
    case DELETE_MOTOCYCLE:
      return [
        ...state.filter((motocycle) => motocycle.id !== action.id),
      ];
    case CANCEL_RESERVATION:
      return state.map(
        (motocycle) => (
          motocycle.id !== action.motocycle.id
            ? motocycle : { ...motocycle, reserved: false }),
      );
    default:
      return state;
  }
}
