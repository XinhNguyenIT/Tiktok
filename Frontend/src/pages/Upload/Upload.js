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
            </div>
        </div>
    );
}

export default Upload;
