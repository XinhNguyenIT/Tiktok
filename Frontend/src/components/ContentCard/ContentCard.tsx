import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './ContentCard.module.scss';

const cx = classNames.bind(styles);

interface ContentCardProps {
    children: ReactNode;
    className?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ children, className }) => {
    return (
        <div className={cx('page')}>
            <div className={cx('card', className)}>
                {children}
            </div>
        </div>
    );
};

export default ContentCard;