import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store';
import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <BrowserRouter>
            <Header />
            <Routes />
            <GlobalStyles />
            <ToastContainer autoClose={1500} className="toast-container" />
          </BrowserRouter>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
