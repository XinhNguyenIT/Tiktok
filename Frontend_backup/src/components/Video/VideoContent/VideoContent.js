import { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './VideoContent.module.scss';
import { faPlay, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Volume from './Volume';

const cx = classNames.bind(styles);

function VideoContent({ data }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false); // State này chỉ để hiện/ẩn icon
    const videoRef = useRef(null);

    // Hàm này CHỈ lo việc ra lệnh cho video
    const handleToggleVideo = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };

    return (
        <div className={cx('videoContainer')} onClick={handleToggleVideo}>
            {/* Lớp điều khiển trên cùng */}
            <div className={cx('controls-overlay')}>
                {/* Gọi Volume và truyền videoRef xuống để nó điều khiển tiếng */}
                <Volume videoRef={videoRef} />

                {/* Nút 3 chấm bên phải */}
                <div className={cx('more-icon')}>
                    <FontAwesomeIcon icon={faEllipsis} />
                </div>
            </div>

            <video
                ref={videoRef}
                className={cx('video')}
                src={data.video}
                loop
                // Dùng các sự kiện này để cập nhật State chính xác 100%
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />

            {/* Icon Play chỉ hiện khi isPlaying là false */}
            {!isPlaying && (
                <div className={cx('playIconWrapper')}>
                    <FontAwesomeIcon icon={faPlay} className={cx('playIcon')} />
                </div>
            )}
            {/* Khối chứa thông tin sẽ xịch lên khi isExpanded là true */}
            <div className={cx('infoWrapper', { expanded: isExpanded })}>
                <div className={cx('nickName')}>{data.nickName}</div>

                <div className={cx('captionContainer')}>
                    <span className={cx('caption', { truncate: !isExpanded })}>{data.caption}</span>

                    {!isExpanded && (
                        <button className={cx('moreBtn')} onClick={() => setIsExpanded(true)}>
                            ... thêm
                        </button>
                    )}

                    {isExpanded && (
                        <button className={cx('moreBtn')} onClick={() => setIsExpanded(false)}>
                            thu gọn
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default VideoContent;
