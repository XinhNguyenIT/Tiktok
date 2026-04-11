import React from 'react';
import classNames from 'classnames/bind';
import styles from './ActivityContent.module.scss';
import ContentCard from '@/components/ContentCard';

const cx = classNames.bind(styles);

const ActivityContent = () => {
    return (
        <ContentCard>
            <div className={cx('wrapper')}>
                <p className={cx('emptyText')}>No activity yet.</p>
            </div>
        </ContentCard>
    );
};

export default ActivityContent;