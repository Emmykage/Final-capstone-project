import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    reservations: [],
    isLoading: true
}

const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    extraReducers: {
        [fetchReservation.pending]: (state) => ({
            ...state,
            isLoading: true
        }),

        [fetchReservation.fulfilled]: (state, action) =>({
            ...state,
            reservations: action.payload,
            isLoading: false

        }),
        [fetchReservation.rejected]: (state) => ({
            ...state,
            isLoading: false
        }),
        clearReservation: (state) =>{
            state.reservations = []
        }
    }
})

const fetchReservation = createAsyncThunk('bikes/fetchReservations', async (user) =>{
    const response = await fetch('localhost:300').then(res=> res.json);
    // const data = await response.json()

    return response;
})

export default reservationSlice.reducer