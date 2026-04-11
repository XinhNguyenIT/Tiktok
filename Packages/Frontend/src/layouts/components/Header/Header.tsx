import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import config from '@/config';
import HomeHeader from './components/HomeHeader';
import SimpleHeader from './components/SimpleHeader';

const cx = classNames.bind(styles);

const Header = () => {
    const location = useLocation(); // Lấy thông tin đường dẫn hiện tại

    // Hàm quyết định nội dung ở giữa
    const renderContent = () => {
        // Nếu đường dẫn là '/' (Trang chủ)
        if (location.pathname === config.routes.home) {
            return <HomeHeader />;
        }

        // Nếu là các trang khác, dùng SimpleHeader và truyền Title tương ứng
        switch (location.pathname) {
            case config.routes.search:
                return <SimpleHeader title="Search" />;
            case config.routes.activity:
                return <SimpleHeader title="Activity" showDropdown />;
            case config.routes.profile:
                return <SimpleHeader title="Profile" />;
            default:
                // Trường hợp dự phòng (Fallback)
                return <SimpleHeader title="Threads" />;
        }
    };

   return (
        <header className={cx('wrapper')}>
            <div className={cx('center')}>
                {renderContent()}
            </div>
        </header>
    );
};

export default Header;