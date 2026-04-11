// Profile.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Profile.module.scss'; // Assuming you have styles in Profile.module.scss
import classNames from 'classnames/bind';
import VideoGrid from '~/components/VideoGrid'; // Component to display user's videos
import SuggestedAccounts from '~/components/SuggestedAccounts'; // Assuming you have this component for suggested accounts

const cx = classNames.bind(styles);

function Profile() {
    const userData = {
        avatar: 'https://i.pravatar.cc/100?img=32', // Replace with dynamic data
        name: 'Xinh Nguyễn',
        username: '@xin020503',
        followers: '101',
        following: '320',
        likes: '1804',
    };

    return (
        <div className={cx('profile-container')}>
            <header className={cx('header')}>
                <div className={cx('avatar-section')}>
                    <img className={cx('avatar')} src={userData.avatar} alt="Profile Avatar" />
                    <div className={cx('user-info')}>
                        <h2 className={cx('name')}>{userData.name}</h2>
                        <p className={cx('username')}>{userData.username}</p>
                        <div className={cx('stats')}>
                            <span>{userData.following} Following</span>
                            <span>{userData.followers} Followers</span>
                            <span>{userData.likes} Likes</span>
                        </div>
                    </div>
                </div>
                <div className={cx('edit-btn')}>
                    <button>Edit Profile</button>
                </div>
            </header>
            <nav className={cx('tabs')}>
                <ul>
                    <li>
                        <Link to="/profile/videos">Videos</Link>
                    </li>
                    <li>
                        <Link to="/profile/reposts">Reposts</Link>
                    </li>
                    <li>
                        <Link to="/profile/favorites">Favorites</Link>
                    </li>
                </ul>
            </nav>
            <VideoGrid /> {/* Component that shows the user’s videos */}
            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" />
        </div>
    );
}

export default Profile;
