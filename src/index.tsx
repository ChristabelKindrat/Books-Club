import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import App from './App';
import {setupStore} from "./redux";

const store = setupStore();

let persistor = persistStore(store);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <App />
            </PersistGate>
        </Provider>
    </BrowserRouter>
);

