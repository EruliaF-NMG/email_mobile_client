import React, { useEffect } from 'react';
import { Provider } from 'react-redux'

import {EmailScreen} from './components/screens/EmailScreen';
import store from './Store';
import {MessageListener} from './components/ui_elements/MessageListener';

const App = () => {
  return (
    <Provider store={store}>
      <MessageListener>
        <EmailScreen/>
      </MessageListener>
    </Provider>
  );
};

export default App;
