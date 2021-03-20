import React from 'react';
import store from './store/storeConfig';

import { ToastContainer } from 'react-toastify';

import { Provider } from 'react-redux';

import Routes from './routes/index';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer autoClose={3000} />
      <Routes />
    </Provider>
  );
}

export default App;
