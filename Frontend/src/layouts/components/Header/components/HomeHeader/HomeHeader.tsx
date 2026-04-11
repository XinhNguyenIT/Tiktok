import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './HomeHeader.module.scss';

const cx = classNames.bind(styles);

const HomeHeader = () => { 
    const [activeTab, setActiveTab] = useState('for-you');

    const tabs = [
        { id: 'for-you', title: 'For you' },
        { id: 'following', title: 'Following' },
        { id: 'ghost-posts', title: 'Ghost posts' },
    ];

   return (
    <div className={cx('tabs-container')}>
        <div className={cx('tabs-inner')}>
            {tabs.map((tab) => (
                <div
                    key={tab.id}
                    className={cx('tab-item', { active: activeTab === tab.id })}
                    onClick={() => setActiveTab(tab.id)}
                >
                    {tab.title}
                </div>
            ))}
        </div>
    </div>
);
};

export default HomeHeader;