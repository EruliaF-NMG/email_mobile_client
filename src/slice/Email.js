import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import EmailService from '../service/Email.service';

const initialState = {
  loading:true,
  updateStatus:true,
  data:[]
}

export const retrieveEmailList = createAsyncThunk(
  "emails/getAll",
  async () => {
    const res = await EmailService.getAll();
    return res.data.data;
  }
);

export const emailSlice = createSlice({
  name: 'email',
  initialState: initialState,
  reducers: {
    setNewEmail: (state, action) => {
      return {
        ...state,
        updateStatus:!state.updateStatus,
        data:[...state.data,...action.payload]
      }
    },
    updateEmailInfo: (state, action) => {
      const index = state.data.findIndex((obj => obj._id == action.payload._id));
      state.data[index]=action.payload;
      return {
        ...state,
        updateStatus:!state.updateStatus,
      }
    }
  },
  extraReducers: {
    [retrieveEmailList.fulfilled]: (state, action) => {
      return {
        updateStatus:!state.updateStatus,
        loading:false,
        data:[...action.payload]
      }
    },
  }
})

// Action creators
export const { setNewEmail,updateEmailInfo } = emailSlice.actions;
const emailSliceReducer = emailSlice.reducer;
export default emailSliceReducer;