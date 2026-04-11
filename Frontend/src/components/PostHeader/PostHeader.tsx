import React from 'react';
import classNames from 'classnames/bind';
import { MoreHorizontal, BadgeCheck } from 'lucide-react'; 
import styles from './PostHeader.module.scss';

const cx = classNames.bind(styles);

// Sửa lại interface để khớp với cách gọi ở PostItem
interface PostHeaderProps {
    username: string;
    isVerified?: boolean;
    time: string; // Khớp với prop 'time' bạn truyền vào
}

const PostHeader: React.FC<PostHeaderProps> = ({ username, isVerified, time }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                {/* Tên người dùng */}
                <span className={cx('username')}>{username}</span>

                {/* Dấu tick xanh */}
                {isVerified && (
                    <span className={cx('verify-tick')}>
                        <BadgeCheck size={16} fill="#0095f6" color="#fff" />
                    </span>
                )}

                <span className={cx('dot')}>•</span>

                {/* Thời gian đăng bài */}
                <span className={cx('time')}>{time}</span>
            </div>

            {/* Nút tác vụ thêm */}
            <button className={cx('more-btn')} title="Xem thêm">
                <MoreHorizontal size={20} strokeWidth={1.5} />
            </button>
        </div>
    );
};

export default PostHeader;