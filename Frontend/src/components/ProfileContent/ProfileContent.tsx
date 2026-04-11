import React, { useState } from 'react';
import classNames from 'classnames/bind';
import {
    BarChart3,
    Image,
    PencilLine,
    Users,
    Camera,
    ArrowRight,
} from 'lucide-react';

import styles from './ProfileContent.module.scss';
import ContentCard from '@/components/ContentCard';
import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import PostItem from '@/components/PostItem';
import PostImageGallery from '@/components/PostImageGallery';

const cx = classNames.bind(styles);

const MOCK_POSTS = [
    {
        id: 1,
        user: {
            username: 'xinh_nguyen0205',
            avatar: 'https://i.pravatar.cc/150?img=20',
            isVerified: false,
        },
        content: 'Bắt đầu set up lại profile nè 🌷',
        time: '1h',
        images: [],
        stats: { likes: 8, replies: 2 },
    },
];

const MEDIA_IMAGES = [
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&w=900&q=80',
];

const tabs = ['Threads', 'Replies', 'Media', 'Reposts'] as const;
type TabType = (typeof tabs)[number];

const ProfileContent = () => {
    const [activeTab, setActiveTab] = useState<TabType>('Threads');

    return (
        <ContentCard>
            <div className={cx('wrapper')}>
                <div className={cx('profileHeader')}>
                    <div className={cx('profileLeft')}>
                        <h1 className={cx('displayName')}>Xinh Nguyễn</h1>
                        <p className={cx('username')}>xinh_nguyen0205</p>
                        <p className={cx('followers')}>0 followers</p>
                    </div>

                    <div className={cx('profileRight')}>
                        <Avatar
                            src="https://i.pravatar.cc/150?img=20"
                            size="xlarge"
                            className={cx('profileAvatar')}
                        />

                        <div className={cx('socialRow')}>
                            <button className={cx('iconBtn')} type="button" aria-label="Insights">
                                <BarChart3 size={28} strokeWidth={2.2} />
                            </button>
                            <button className={cx('iconBtn')} type="button" aria-label="Instagram">
                                <Image size={28} strokeWidth={2.2} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className={cx('editRow')}>
                    <Button className={cx('editBtn')}>Edit profile</Button>
                </div>

                <div className={cx('tabs')}>
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            type="button"
                            className={cx('tabItem', { active: activeTab === tab })}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {activeTab === 'Threads' && (
                    <>
                        <div className={cx('composer')}>
                            <div className={cx('composerLeft')}>
                                <Avatar
                                    src="https://i.pravatar.cc/150?img=20"
                                    size="large"
                                />
                                <span className={cx('placeholder')}>What's new?</span>
                            </div>

                            <Button className={cx('postBtn')}>Post</Button>
                        </div>

                        <div className={cx('finishSection')}>
                            <div className={cx('finishHeader')}>
                                <h3 className={cx('finishTitle')}>Finish your profile</h3>
                            </div>

                            <div className={cx('taskGrid')}>
                                <div className={cx('taskCard')}>
                                    <div className={cx('taskIconWrap')}>
                                        <PencilLine size={20} strokeWidth={2.2} />
                                    </div>
                                    <h4 className={cx('taskTitle')}>Create thread</h4>
                                    <p className={cx('taskDesc')}>
                                        Say what&apos;s on your mind or share a recent highlight.
                                    </p>
                                    <Button className={cx('taskBtn')}>Create</Button>
                                </div>

                                <div className={cx('taskCard')}>
                                    <div className={cx('taskIconWrap')}>
                                        <Users size={20} strokeWidth={2.2} />
                                    </div>
                                    <h4 className={cx('taskTitle')}>Follow 10 profiles</h4>
                                    <p className={cx('taskDesc')}>
                                        Fill your feed with threads that interest you.
                                    </p>
                                    <Button className={cx('taskBtn')}>See profiles</Button>
                                </div>

                                <div className={cx('taskCard')}>
                                    <div className={cx('taskIconWrap')}>
                                        <Camera size={20} strokeWidth={2.2} />
                                    </div>
                                    <h4 className={cx('taskTitle')}>Add profile photo</h4>
                                    <p className={cx('taskDesc')}>
                                        Make it easier for people to recognize you.
                                    </p>
                                    <Button className={cx('taskBtn')}>Add</Button>
                                </div>
                            </div>
                        </div>

                    </>
                )}

                {activeTab === 'Media' && (
                    <div className={cx('mediaSection')}>
                        <PostImageGallery images={MEDIA_IMAGES} />
                    </div>
                )}

                {activeTab === 'Replies' && (
                    <div className={cx('emptyState')}>
                        <p>No replies yet.</p>
                    </div>
                )}

                {activeTab === 'Reposts' && (
                    <div className={cx('emptyState')}>
                        <p>No reposts yet.</p>
                    </div>
                )}
            </div>
        </ContentCard>
    );
};

export default ProfileContent;