import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import store from './redux/store';





createRoot(document.getElementById('root')).render(
    <StrictMode>
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>
  </StrictMode>
)
