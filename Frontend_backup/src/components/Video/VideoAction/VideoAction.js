import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCommentDots, faBookmark, faShare, faCheck, faMusic } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import styles from './VideoAction.module.scss';

const cx = classNames.bind(styles);

function VideoAction({ data, onCommentClick }) {
    const [heart, setHeart] = useState(data.is_liked);
    const [likes, setLikes] = useState(data.like);
    const [isFollowed, setIsFollowed] = useState(false);

    const handleHeart = () => {
        setHeart(!heart);
        setLikes((prev) => (heart ? prev - 1 : prev + 1));
    };

    // Xóa handleComment ở đây vì đã dùng onCommentClick từ props truyền vào

    return (
        <div className={cx('rightPanel')}>
            <div className={cx('avatarBox')}>
                <Image className={cx('avatar')} src={`https://i.pravatar.cc/100?img=${data.idUser}`} />
                <button className={cx('followBtn')} onClick={() => setIsFollowed(!isFollowed)}>
                    {isFollowed ? <FontAwesomeIcon icon={faCheck} /> : '+'}
                </button>
            </div>

            <div className={cx('actionList')}>
                {/* Nút Like */}
                <div className={cx('actionItem')}>
                    <button className={cx('actionBtn', { active: heart })} onClick={handleHeart}>
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <span className={cx('actionText')}>{likes}</span>
                </div>

                {/* Nút Comment - Đã dùng onCommentClick để đẩy video sang trái */}
                <div className={cx('actionItem')}>
                    <button className={cx('actionBtn')} onClick={onCommentClick}>
                        <FontAwesomeIcon icon={faCommentDots} />
                    </button>
                    <span className={cx('actionText')}>{data.comment || 0}</span>
                </div>

                {/* Nút Lưu */}
                <div className={cx('actionItem')}>
                    <button className={cx('actionBtn')}>
                        <FontAwesomeIcon icon={faBookmark} />
                    </button>
                    <span className={cx('actionText')}>{data.bookmark || 'Lưu'}</span>
                </div>

                {/* Nút Share */}
                <div className={cx('actionItem')}>
                    <button className={cx('actionBtn')}>
                        <FontAwesomeIcon icon={faShare} />
                    </button>
                    <span className={cx('actionText')}>{data.share || 0}</span>
                </div>

                {/* Đĩa nhạc xoay */}
                <div className={cx('actionItem', 'musicItem')}>
                    <div className={cx('musicBox')}>
                        <Image
                            className={cx('musicDisc')}
                            src={`https://i.pravatar.cc/100?img=${data.idUser}`}
                            alt="music disc"
                        />
                        <FontAwesomeIcon icon={faMusic} className={cx('musicNoteIcon')} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoAction;
