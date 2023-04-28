import React from 'react';
import { Provider } from 'react-redux'

import {EmailScreen} from './components/screens/EmailScreen';
import store from './Store';

const App = () => {
  return (
    <Provider store={store}>
    <EmailScreen/>
    </Provider>
  );
};

export default App;
