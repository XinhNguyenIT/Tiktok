import React from 'react';
import classNames from 'classnames/bind';
import { Heart, MessageCircle, Repeat2, Send, MoreHorizontal } from 'lucide-react';
import styles from './PostItem.module.scss';
import Avatar from '@/components/Avatar';

const cx = classNames.bind(styles);

interface PostItemProps {
    data: any;
}

const PostItem = ({ data }: PostItemProps) => {
    const images = data.images || [];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <Avatar src={data.user.avatar} size="medium" />
            </div>

            <div className={cx('right')}>
                <div className={cx('header')}>
                    <span className={cx('username')}>{data.user.username}</span>

                    <div className={cx('header-right')}>
                        <span className={cx('time')}>{data.time}</span>
                        <MoreHorizontal size={18} className={cx('more-icon')} />
                    </div>
                </div>

                <div className={cx('body')}>
                    <p className={cx('text-content')}>{data.content}</p>

                {images.length > 0 && (
                    <div className={cx('image-slider')}>
                        {images.map((img: string, index: number) => (
                            <div key={index} className={cx('image-slide')}>
                                <img src={img} alt="post" className={cx('post-image')} />
                            </div>
                        ))}
                    </div>
                )}
                </div>

                <div className={cx('actions')}>
                    <Heart size={20} />
                    <MessageCircle size={20} />
                    <Repeat2 size={20} />
                    <Send size={20} />
                </div>

                <div className={cx('stats')}>
                    <span>{data.stats.replies} replies</span>
                    <span className={cx('dot')}>•</span>
                    <span>{data.stats.likes} likes</span>
                </div>
            </div>
        </div>
    );
};

export default PostItem;