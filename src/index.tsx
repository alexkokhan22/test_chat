import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";
import {firestore} from "./api/api";


export const Context = createContext<contextType>({firebase, firestore})

ReactDOM.render(
    <Context.Provider value={{
        firebase,
        firestore
    }}>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//type
type contextType = {
    firebase: typeof firebase
    firestore: typeof firestore
}
