import React from 'react';
import './App.css';

import Login from './components/Login';
import Profile from './components/Profile';
import ChangeColor from './components/ChangeColor';

const App = () => {
    return (
        <div className="app">
            <Login />
            <Profile />
            <ChangeColor />
        </div>
    );
}

export default App;
