import React from 'react';
import classNames from 'classnames/bind';
import { Home, Search, Plus, Heart, User, LogOut } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

import styles from './Sidebar.module.scss';
import Button from '@/components/Button';
import config from '@/config'; // 1. Import config ở đây

const cx = classNames.bind(styles);

const Sidebar = () => {
    const location = useLocation();

    // Kiểm tra trạng thái active dựa trên config
    const isActive = (path: string) => location.pathname === path;

    return (
        <aside className={cx('wrapper')}>
            {/* LOGO - Dùng Link về trang chủ */}
            <div className={cx('logo-container')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src="/images/logo.jpg" alt="logo" className={cx('logo-image')} />
                </Link>
            </div>

            <div className={cx('top-menu')}>
                {/* TRANG CHỦ */}
                <Button to={config.routes.home} className={cx('nav-item', { active: isActive(config.routes.home) })}>
                    <Home size={28} strokeWidth={isActive(config.routes.home) ? 2.5 : 1.5} />
                </Button>

                {/* TRANG TÌM KIẾM */}
                <Button to={config.routes.search} className={cx('nav-item', { active: isActive(config.routes.search) })}>
                    <Search size={28} strokeWidth={isActive(config.routes.search) ? 2.5 : 1.5} />
                </Button>

                {/* NÚT TẠO BÀI VIẾT (Tạm thời chưa có route) */}
                <Button className={cx('nav-item', 'create-btn')}>
                    <Plus size={28} strokeWidth={2.5} />
                </Button>

                {/* TRANG HOẠT ĐỘNG */}
                <Button to={config.routes.activity} className={cx('nav-item', { active: isActive(config.routes.activity) })}>
                    <Heart size={28} strokeWidth={isActive(config.routes.activity) ? 2.5 : 1.5} />
                </Button>

                {/* TRANG CÁ NHÂN */}
                <Button to={config.routes.profile} className={cx('nav-item', { active: isActive(config.routes.profile) })}>
                    <User size={28} strokeWidth={isActive(config.routes.profile) ? 2.5 : 1.5} />
                </Button>
            </div>

            <div className={cx('bottom-menu')}>
                 <Button className={cx('logout')}>
                    <LogOut size={28} strokeWidth={1.5} />
                </Button>
            </div>
        </aside>
    );
};

export default Sidebar;