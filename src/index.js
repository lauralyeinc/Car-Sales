import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux"; 
import { Provider } from "react-redux"; 
import { appReducer } from "./reducers"; 
import 'bulma/css/bulma.css';
import './styles.scss';

const ReduxStore =createStore(appReducer); 

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={ReduxStore}>
<App />
</Provider>, 
rootElement);
