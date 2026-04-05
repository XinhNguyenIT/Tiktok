// src/components/UserInfo/UserInfo.js
import React from 'react';
import './UserInfo.module.scss';

function UserInfo({ avatar, username, fullName }) {
    return (
        <div className="user-info">
            <img className="avatar" src={avatar} alt={username} />
            <div className="user-details">
                <p className="username">{username}</p>
                <p className="full-name">{fullName}</p>
            </div>
        </div>
    );
}

export default UserInfo;
