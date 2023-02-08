import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {

    const user = useSelector((state) => state.user.value);
    const themeColor = useSelector((state) => state.theme.value);

    // Profile Component
    return (
        <div style={{ color: themeColor }}>
            <h1>Profile Page</h1>
            <p><b>Name:</b> {user.name}</p>
            <p><b>Age:</b> {user.age}</p>
            <p><b>Email:</b> {user.email}</p>
        </div>
    )
}

export default Profile
