import React from 'react';
import classNames from 'classnames/bind';
import styles from './PostImageGallery.module.scss';
import Image from '@/components/Image'; 

const cx = classNames.bind(styles);

interface PostImageGalleryProps {
    images: string[];
}

const PostImageGallery: React.FC<PostImageGalleryProps> = ({ images }) => {
    if (!images || images.length === 0) return null;

    const imageCount = images.length;
    
    // Giới hạn hiển thị 4 ảnh để giao diện không bị nát
    const displayImages = images.slice(0, 4);
    const remainingCount = imageCount - 4;

    return (
        <div className={cx('wrapper', `grid-${Math.min(imageCount, 4)}`)}>
            {displayImages.map((src, index) => {
                const isLastVisible = index === 3 && remainingCount > 0;

                return (
                    <div key={index} className={cx('image-item-container')}>
                        <Image
                            src={src}
                            alt="post-content"
                            className={cx('image-item')}
                        />
                        {isLastVisible && (
                            <div className={cx('overlay')}>
                                <span>+{remainingCount}</span>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default PostImageGallery;