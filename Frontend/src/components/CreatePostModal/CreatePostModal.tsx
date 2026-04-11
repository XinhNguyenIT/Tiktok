import React from 'react';
import classNames from 'classnames/bind';
import {
    Image as ImageIcon,
    Sticker,
    Smile,
    AlignLeft,
    FileText,
    MapPin,
    CopyPlus,
    MoreHorizontal,
} from 'lucide-react';

import styles from './CreatePostModal.module.scss';
import Avatar from '@/components/Avatar';
import Button from '@/components/Button';

const cx = classNames.bind(styles);

interface CreatePostModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={cx('overlay')} onClick={onClose}>
            <div className={cx('modal')} onClick={(e) => e.stopPropagation()}>
                <div className={cx('header')}>
                    <button className={cx('textBtn')} type="button" onClick={onClose}>
                        Cancel
                    </button>

                    <h2 className={cx('title')}>New thread</h2>

                    <div className={cx('headerActions')}>
                        <button className={cx('iconBtn')} type="button" aria-label="Copy">
                            <CopyPlus size={22} strokeWidth={2.2} />
                        </button>
                        <button className={cx('iconBtn')} type="button" aria-label="More">
                            <MoreHorizontal size={22} strokeWidth={2.2} />
                        </button>
                    </div>
                </div>

                <div className={cx('body')}>
                    <div className={cx('threadRow')}>
                        <div className={cx('leftCol')}>
                            <Avatar
                                src="https://i.pravatar.cc/150?img=20"
                                size="large"
                            />
                            <div className={cx('threadLine')} />
                        </div>

                        <div className={cx('contentCol')}>
                            <div className={cx('userLine')}>
                                <span className={cx('username')}>xinh_nguyen0205</span>
                                <span className={cx('chevron')}>&gt;</span>
                                <button className={cx('topicBtn')} type="button">
                                    Add a topic
                                </button>
                            </div>

                            <textarea
                                className={cx('textarea')}
                                placeholder="What's new?"
                                rows={3}
                            />

                            <div className={cx('toolRow')}>
                                <button className={cx('toolBtn')} type="button" aria-label="Image">
                                    <ImageIcon size={20} strokeWidth={2} />
                                </button>
                                <button className={cx('toolBtn')} type="button" aria-label="GIF">
                                    <Sticker size={20} strokeWidth={2} />
                                </button>
                                <button className={cx('toolBtn')} type="button" aria-label="Emoji">
                                    <Smile size={20} strokeWidth={2} />
                                </button>
                                <button className={cx('toolBtn')} type="button" aria-label="Text">
                                    <AlignLeft size={20} strokeWidth={2} />
                                </button>
                                <button className={cx('toolBtn')} type="button" aria-label="File">
                                    <FileText size={20} strokeWidth={2} />
                                </button>
                                <button className={cx('toolBtn')} type="button" aria-label="Location">
                                    <MapPin size={20} strokeWidth={2} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={cx('replyRow')}>
                        <div className={cx('replyAvatar')}>
                            <Avatar
                                src="https://i.pravatar.cc/150?img=21"
                                size="small"
                            />
                        </div>
                        <button className={cx('addThreadBtn')} type="button">
                            Add to thread
                        </button>
                    </div>
                </div>

                <div className={cx('footer')}>
                    <button className={cx('replyOptions')} type="button">
                        Reply options
                    </button>

                    <Button className={cx('postBtn')} disabled>
                        Post
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CreatePostModal;