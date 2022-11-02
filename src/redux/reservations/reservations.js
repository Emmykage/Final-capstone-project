// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';
const BASE_URL = 'http://127.0.0.1:3000/api/v1/';
const GET_RESERVATIONS = 'reservations/reservation/GET_RESERVATIONS';
const DELETE_RESERVATION = 'reservations/reservation/DELETE_RESERVATION';

export default function reserveReducer(state = [], action) {
  switch (action.type) {
    case GET_RESERVATIONS:
      return [
        ...action.payload,
      ];
    case DELETE_RESERVATION:
      return [
        ...state.filter((reservation) => reservation.id !== action.id),
      ];
    default:
      return state;
  }
}

export const fetchReservation = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  const reservations = await fetch(`${BASE_URL}reservations`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,

    },

  }).then((res) => res.json());
  // console.log(reservations)
  dispatch({
    type: GET_RESERVATIONS,
    payload: reservations,
  });
};

export const postReservation = (data) => async () => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${BASE_URL}reservations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(data),
  });
  console.log(response);
};

export const deleteReservation = (id) => async (dispatch) => {
  const token = localStorage.getItem('token');
  await fetch(`${BASE_URL}reservations/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });

  dispatch({
    type: DELETE_RESERVATION,
    id,
  });
};
// const reservationSlice = createSlice({
//     name: 'reservation',
//     initialState,
//     reducers: {
//         fetchReservation: (state)=>({
//             ...state
//         })
//     },
//     extraReducers: {
//         [fetchReservation.pending]: (state) => ({
//             ...state,
//             isLoading: true
//         }),

//         [fetchReservation.fulfilled]: (state, action) =>({
//             ...state,
//             reservations: action.payload,
//             isLoading: false

//         }),
//         [fetchReservation.rejected]: (state) => ({
//             ...state,
//             isLoading: false
//         }),
//         clearReservation: (state) =>{
//             state.reservations = []
//         }
//     }
// })

// const fetchReservation = createAsyncThunk('bikes/fetchReservations', async (user) =>{
//     const response = await fetch('localhost:300').then(res=> res.json);
//     // const data = await response.json()

//     return response;
// })

// export const { fetchReservation } = reserveSlice.actions;
// export default reserveSlice.reducer;
// export default reservationSlice.reducer
