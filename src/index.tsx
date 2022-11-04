import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {v1} from "uuid";

let dialogsData = [
    {id: v1(), name: 'Sergey'},
    {id: v1(), name: 'Vadim'},
    {id: v1(), name: 'Tolya'},
    {id: v1(), name: 'Fedya'},
    {id: v1(), name: 'Elina'},
    {id: v1(), name: 'Lenya'},
]

let messagesData = [
    {id: v1(), message: 'Hello'},
    {id: v1(), message: 'How are you?'},
    {id: v1(), message: 'I\'m fine!'},
]

let postsData = [
    {id: v1(), text: 'Buy Buy!', likesCount: 5,},
    {id: v1(), text: 'How are you?', likesCount: 7,},
    {id: v1(), text: 'I am so happy!', likesCount: 23,},
    {id: v1(), text: 'It is my first post!', likesCount: 18,},
]

ReactDOM.render(
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}/>,
  document.getElementById('root')
);