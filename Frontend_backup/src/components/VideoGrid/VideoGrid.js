// VideoGrid.js
import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './VideoGrid.module.scss';

const cx = classNames.bind(styles);

function VideoGrid() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        // Giả sử bạn gọi API để lấy video
        const fetchedVideos = [
            { id: 1, src: 'https://www.w3schools.com/html/mov_bbb.mp4', thumbnail: 'video_thumbnail1.jpg' },
            { id: 2, src: 'https://www.w3schools.com/html/mov_bbb.mp4', thumbnail: 'video_thumbnail2.jpg' },
            { id: 3, src: 'https://www.w3schools.com/html/mov_bbb.mp4', thumbnail: 'video_thumbnail3.jpg' },
        ];
        setVideos(fetchedVideos);
    }, []);

    return (
        <div className={cx('video-grid')}>
            {videos.map((video) => (
                <div key={video.id} className={cx('video-item')}>
                    <img className={cx('thumbnail')} src={video.thumbnail} alt={`Video ${video.id}`} />
                    <video className={cx('video')} src={video.src} controls />
                </div>
            ))}
        </div>
    );
}

export default VideoGrid;
