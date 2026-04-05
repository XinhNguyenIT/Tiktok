import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCommentDots, faBookmark, faShare } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import styles from './Video.module.scss';

const cx = classNames.bind(styles);

function Video() {
    const videoData = {
        videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
        avatar: 'https://i.pravatar.cc/100?img=32',
        likes: '76.6K',
        comments: '461',
        saves: '3314',
        shares: '38.5K',
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('videoContainer')}>
                <video className={cx('video')} src={videoData.videoSrc} controls />
            </div>

            <div className={cx('rightPanel')}>
                <div className={cx('avatarBox')}>
                    <Image className={cx('avatar')} src={videoData.avatar} alt="avatar" />
                    <button className={cx('followBtn')}>+</button>
                </div>

                <div className={cx('actionList')}>
                    <div className={cx('actionItem')}>
                        <button className={cx('actionBtn')}>
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                        <span className={cx('actionText')}>{videoData.likes}</span>
                    </div>

                    <div className={cx('actionItem')}>
                        <button className={cx('actionBtn')}>
                            <FontAwesomeIcon icon={faCommentDots} />
                        </button>
                        <span className={cx('actionText')}>{videoData.comments}</span>
                    </div>

                    <div className={cx('actionItem')}>
                        <button className={cx('actionBtn')}>
                            <FontAwesomeIcon icon={faBookmark} />
                        </button>
                        <span className={cx('actionText')}>{videoData.saves}</span>
                    </div>

                    <div className={cx('actionItem')}>
                        <button className={cx('actionBtn')}>
                            <FontAwesomeIcon icon={faShare} />
                        </button>
                        <span className={cx('actionText')}>{videoData.shares}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
