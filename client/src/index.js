import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import UserStore from "./store/UserStore";
import store from "./store/store";

export const Context = createContext(null)



ReactDOM.render(
    <Provider store={store}>
    <Context.Provider value={{
        user: new UserStore(),
    }}>
        <App />
    </Context.Provider>
    </Provider>,
  document.getElementById('root')
);