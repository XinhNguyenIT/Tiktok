import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Sidebar from './Sidebar';
import Header from '../components/Header'; // Import từ layouts/components/Header
import CreatePostModal from '@/components/CreatePostModal';

const cx = classNames.bind(styles);

interface Props {
    children: ReactNode;
}

function DefaultLayout({ children }: Props) {
    return (
        <div className={cx('wrapper')}>
            {/* Sidebar cố định bên trái */}
            <Sidebar />

            <div className={cx('container')}>
                {/* Header sẽ tự động đổi giữa HomeHeader và SimpleHeader dựa trên URL */}
                <Header />

                {/* Nội dung chính của các trang (Home, Search, Activity...) */}
                <main className={cx('content')}>
                    {children}
                </main>
            </div>

            {/* Nút cộng (+) đặc trưng của Threads */}
            <div className={cx('floating-action')}>
                <button className={cx('add-btn')}>+</button>
            </div>
        </div>
    );
}

export default DefaultLayout;