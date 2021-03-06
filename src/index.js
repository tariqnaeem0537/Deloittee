import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from 'redux';
import * as serviceWorker from './serviceWorker';
import thunk from "redux-thunk";
import reducers from "./reducers/index.js";
let store = createStore(reducers, applyMiddleware(thunk))


ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
