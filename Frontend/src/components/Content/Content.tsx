import React from 'react';
import classNames from 'classnames/bind';
import styles from './Content.module.scss';

import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import PostItem from '@/components/PostItem';
import ContentCard from '@/components/ContentCard';

const cx = classNames.bind(styles);

const MOCK_POSTS = [
    {
        id: 1,
        user: {
            username: 'nguyenan7261',
            avatar: 'https://i.pravatar.cc/150?img=12',
            isVerified: false,
        },
        content: 'Chào các bạn Vũng Tàu mình làm quen với',
        time: '14h',
        images: [],
        stats: { likes: 1, replies: 0 },
    },
    {
        id: 2,
        user: {
            username: 'sosi.akela',
            avatar: 'https://i.pravatar.cc/150?img=32',
            isVerified: false,
        },
        content: 'THỦ CÔNG, CÀ PHÊ VÀ TRÀ 🌾\nĐịa Chỉ: 69/29 Phan Chu Trinh, Vũng Tàu',
        time: '2h',
        images: [
            'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80',
            '/images/ana1.jpg',
        ],
        stats: { likes: 19, replies: 2 },
    },
    {
        id: 3,
        user: {
            username: 'yogm_11',
            avatar: 'https://i.pravatar.cc/150?img=45',
            isVerified: false,
        },
        content: 'Đi xin vía cái quán cafe hot nhất Vũng Tàu 😊',
        time: '1h',
        images: [],
        stats: { likes: 5, replies: 1 },
    },
];

const Content = () => {
    return (
        <ContentCard>
            <div className={cx('composer')}>
                <div className={cx('composerLeft')}>
                    <Avatar
                        src="https://i.pravatar.cc/150?img=20"
                        size="large"
                    />
                    <span className={cx('placeholder')}>What's new?</span>
                </div>

                <Button variant="primary" small className={cx('postBtn')}>
                    Post
                </Button>
            </div>

            <div className={cx('postList')}>
                {MOCK_POSTS.map((post) => (
                    <div key={post.id} className={cx('postRow')}>
                        <PostItem data={post} />
                    </div>
                ))}
            </div>
        </ContentCard>
        
    );
};

export default Content;