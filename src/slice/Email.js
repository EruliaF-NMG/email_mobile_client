import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import EmailService from '../service/Email.service';

const initialState = {
  "loading":true,
  "data":[]
}

export const retrieveEmailList = createAsyncThunk(
  "emails/getAll",
  async () => {
    console.log("retrieveEmailList")
    const res = await EmailService.getAll();
    return res.data.data;
  }
);

export const emailSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
  },
  extraReducers: {
    [retrieveEmailList.fulfilled]: (state, action) => {
      return {
        loading:false,
        data:[...action.payload]
      }
    },
  }
})


const emailSliceReducer = emailSlice.reducer;
export default emailSliceReducer;