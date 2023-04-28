import { configureStore } from '@reduxjs/toolkit';
import emailSliceReducer from './slice/Email';

const reducer = {
  email: emailSliceReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: false,
})

export default store;