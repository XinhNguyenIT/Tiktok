import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import styles from './Upload.module.scss';

const cx = classNames.bind(styles);

function Upload() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('uploadBox')}>
                    <div className={cx('uploadInner')}>
                        <FontAwesomeIcon icon={faCloudArrowUp} className={cx('uploadIcon')} />
                        <h2 className={cx('title')}>Select video to upload</h2>
                        <p className={cx('desc')}>Or drag and drop it here</p>

                        <button className={cx('selectBtn')}>Select video</button>
                    </div>
                </div>

                <div className={cx('infoList')}>
                    <div className={cx('infoItem')}>
                        <h4>Size and duration</h4>
                        <p>Maximum size: 30 GB, video duration: 60 minutes.</p>
                    </div>

                    <div className={cx('infoItem')}>
                        <h4>File formats</h4>
                        <p>Recommended: .mp4. Other major formats are supported.</p>
                    </div>

                    <div className={cx('infoItem')}>
                        <h4>Video resolutions</h4>
                        <p>High-resolution recommended: 1080p, 1440p, 4K.</p>
                    </div>

                    <div className={cx('infoItem')}>
                        <h4>Aspect ratios</h4>
                        <p>Recommended: 9:16 for vertical, 16:9 for landscape.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Upload;
