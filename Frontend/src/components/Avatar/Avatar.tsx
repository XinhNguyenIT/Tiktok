import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Avatar.module.scss';

const cx = classNames.bind(styles);

// Định nghĩa Interface (Requirement F2)
interface AvatarProps {
    src?: string;
    alt?: string;
    className?: string;
    size?: 'small' | 'medium' | 'large' | 'xlarge';
    fallback?: string; // Ảnh dự phòng nếu src bị lỗi
}

const Avatar: React.FC<AvatarProps> = ({
    src,
    alt = 'user-avatar',
    className,
    size = 'medium',
    fallback: customFallback = '/images/default-avatar.png', // Ảnh mặc định trong thư mục public
}) => {
    const [fallback, setFallback] = useState<string>('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={cx('wrapper', size, className)}
            src={fallback || src || customFallback}
            alt={alt}
            onError={handleError}
        />
    );
};

export default Avatar;