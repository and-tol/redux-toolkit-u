import { Provider } from 'react-redux';
import * as ReactDOMClient from 'react-dom/client';
import {PersistGate} from 'redux-persist/integration/react'

import { persistor, store } from './store';

import App from './App';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} >
      <App />
    </PersistGate>
  </Provider>
);
