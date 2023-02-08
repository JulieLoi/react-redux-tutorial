import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';

const Login = () => {

    const dispatch = useDispatch();

    const initialUserState = { name: "", age: 0, email: "" };
    const [user, setUser] = useState(initialUserState);

    // Handles Login
    const handleLogout = () => {
        setUser(initialUserState);
        dispatch(logout());
    }

    // Login Component
    return (
        <div className="login form">
            <h2>Form</h2>
            <input id="name" label="name" type="text" placeholder="Enter name" 
                onChange={(e) => setUser({...user, name: e.target.value})} 
                value={user.name} 
            />
            <br />
            <input id="age" label="age" type="number" placeholder="Enter age" 
                onChange={(e) => setUser({...user, age: e.target.value})} 
                value={user.age} 
            />
            <br />
            <input id="email" label="email" type="text" placeholder="Enter email" 
                onChange={(e) => setUser({...user, email: e.target.value})} 
                value={user.email} 
            />
            <br />
            <button onClick={() => dispatch(login(user))}>Log In</button>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
}

export default Login
