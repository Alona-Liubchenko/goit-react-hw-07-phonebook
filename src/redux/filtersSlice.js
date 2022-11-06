import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    //   normalizedFilter = filter.toLowerCase(),
    // // return contacts.filter(contact =>
    // //   contact.name.toLowerCase().includes(normalizedFilter)
    // );
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
