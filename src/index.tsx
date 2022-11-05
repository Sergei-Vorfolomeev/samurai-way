import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from './redux/state'

ReactDOM.render(
    <App
        profilePage={state.profilePage}
        messagePage={state.messagePage}
        sideBar={state.sideBar}/>,
    document.getElementById('root')
);