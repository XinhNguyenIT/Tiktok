import React from 'react';
import classNames from 'classnames/bind';
import { ChevronDown } from 'lucide-react'; 
import styles from './SimpleHeader.module.scss';

const cx = classNames.bind(styles);

interface SimpleHeaderProps {
    title: string;       // Tiêu đề trang (Search, Activity, Profile)
    showDropdown?: boolean; // Có hiện mũi tên dropdown hay không
}

const SimpleHeader: React.FC<SimpleHeaderProps> = ({ title }) => {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>{title}</h2>
        </div>
    );
};

export default SimpleHeader;