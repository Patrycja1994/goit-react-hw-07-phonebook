import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: '',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterContacts(state, action) {
            state.value = action.payload;
        },
    },
});


export const { filterContacts} = filterSlice.actions;
export const filterReducer = filterSlice.reducer; 