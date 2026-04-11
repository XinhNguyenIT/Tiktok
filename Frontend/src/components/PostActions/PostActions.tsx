import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Heart, MessageCircle, Repeat2, Send } from 'lucide-react';

import styles from './PostActions.module.scss';

interface PostActionsProps {
    isLikedInitial?: boolean;
    onLikeChange?: (isLiked: boolean) => void; // Thêm callback để báo cho cha biết
}

const cx = classNames.bind(styles);

const PostActions: React.FC<PostActionsProps> = ({ 
    isLikedInitial = false,
    onLikeChange 
}) => {
    const [isLiked, setIsLiked] = useState<boolean>(isLikedInitial);

    const handleLike = (e: React.MouseEvent) => {
        // Chặn sự kiện nổi bọt nếu sau này bạn bọc PostItem trong một Link
        e.stopPropagation();
        
        const newStatus = !isLiked;
        setIsLiked(newStatus);
        
        // Báo cho component cha (PostItem) để cập nhật số lượng like hiển thị ở footer
        if (onLikeChange) {
            onLikeChange(newStatus);
        }
    };

    return (
        <div className={cx('wrapper')}>
            {/* Nút Like - Chuyển sang màu đỏ và Fill khi active */}
            <button 
                className={cx('action-item', { liked: isLiked })} 
                onClick={handleLike}
            >
                <Heart 
                    size={20} 
                    strokeWidth={1.5} 
                    fill={isLiked ? '#ff3040' : 'none'} // Đổ màu đỏ khi like
                    color={isLiked ? '#ff3040' : 'currentColor'} // Viền đỏ khi like
                />
            </button>

            {/* Các nút khác chỉ cần icon sạch sẽ */}
            <button className={cx('action-item')}>
                <MessageCircle size={20} strokeWidth={1.5} />
            </button>

            <button className={cx('action-item')}>
                <Repeat2 size={20} strokeWidth={1.5} />
            </button>

            <button className={cx('action-item')}>
                <Send size={20} strokeWidth={1.5} />
            </button>
        </div>
    );
};

export default PostActions;