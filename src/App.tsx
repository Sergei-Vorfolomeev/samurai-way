import React from 'react';
import './App.css';
import {Heading} from './components/Heading/Heading'
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";

type AppPropsType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    postsData: Array<PostsType>
}
// type DialogsDataType = Array<DialogType>
// type MessagesDataType = Array<MessageType>

type DialogType = {
    id: string
    name: string
}
type MessageType = {
    id: string
    message: string
}
type PostsType = {
    id: string
    text: string
    likesCount: number
}

const App: React.FC<AppPropsType> = (props) => {
    const {dialogsData,messagesData,postsData} = props
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Heading/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile/*' element = {<Profile postsData={postsData}/>}/>
                        <Route path='/dialogs/*' element = {<Dialogs dialogsData={dialogsData} messagesData={messagesData}/>}/>
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
