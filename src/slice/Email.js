import { createSlice } from '@reduxjs/toolkit'

export const emailSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
        console.log("yes");
      state.value += 1
    },
  },
  extraReducers: {
  }
})


const emailSliceReducer = emailSlice.reducer;
// Action creators
export const { increment } = emailSlice.actions;
export default emailSliceReducer;