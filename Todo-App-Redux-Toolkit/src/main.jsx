import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import axios from "axios";
import App from './App.jsx'
import { Provider } from 'react-redux';
import { ReduxStore } from './Components/Store/ReduxStore.jsx';

axios.defaults.baseURL = "https://6a21bb05b1d0aaf32b4fea81.mockapi.io/";
createRoot(document.getElementById("root")).render(
  <Provider store={ReduxStore}>
    <StrictMode>
      <App />
    </StrictMode>
    ,
  </Provider>,
);
