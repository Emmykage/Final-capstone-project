import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    reservations: [{
        name: 'toyo',
        brand: 'toyota wheeler',
        color: 'nevada',
        date: '2022-10-24'
      },
      {
        name: 'Hyunda',
        brand: 'Hyundai alvero',
        city: 'Las vegas',
        date: '2022-10-24'
      },
      {
        name: 'innoson',
        brand: 'toyo',
        city: 'nevada',
        date: '2022-10-24'
      },
      {
        model: 'toyo',
        city: 'nevada',
        date: '2022-10-24'
      },
      {
        model: 'toyo',
        city: 'nevada',
        date: '2022-10-24'
      }],
    // isLoading: true
}

const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {
        fetchReservation: (state)=>({
            ...state
        })
    }
    // extraReducers: {
    //     [fetchReservation.pending]: (state) => ({
    //         ...state,
    //         isLoading: true
    //     }),

    //     [fetchReservation.fulfilled]: (state, action) =>({
    //         ...state,
    //         reservations: action.payload,
    //         isLoading: false

    //     }),
    //     [fetchReservation.rejected]: (state) => ({
    //         ...state,
    //         isLoading: false
    //     }),
    //     clearReservation: (state) =>{
    //         state.reservations = []
    //     }
    // }
})

// const fetchReservation = createAsyncThunk('bikes/fetchReservations', async (user) =>{
//     const response = await fetch('localhost:300').then(res=> res.json);
//     // const data = await response.json()

//     return response;
// })

export const { fetchReservation } = reservationSlice.actions
export default reservationSlice.reducer