import React from 'react';
import './App.css';
import {Heading} from './components/Heading'
import {Navbar} from './components/Navbar'
import {Profile} from './components/Profile'

const App = () => {
    return (
        <div className="app-wrapper">
            <Heading/>
            <Navbar/>
            <Profile/>
        </div>
    )
}

export default App;
