import React from 'react';
import './App.css';

import Login from './components/Login';
import Profile from './components/Profile';

const App = () => {
    return (
        <div className="app">
            <Login />
            <Profile />
        </div>
    );
}

export default App;
