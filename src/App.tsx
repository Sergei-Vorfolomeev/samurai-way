import React from 'react';
import './App.css';
import {Heading} from './components/Heading/Heading'
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {StateType} from "./redux/state";


const App: React.FC<StateType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Heading/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile/*' element = {<Profile posts={props.profilePage.posts}/>}/>
                        <Route path='/dialogs/*' element = {<Dialogs dialogs={props.messagePage.dialogs} messages={props.messagePage.messages}/>}/>
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
