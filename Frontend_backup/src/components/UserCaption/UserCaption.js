// src/components/UserCaption/index.js
import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './UserCaption.module.scss';

const cx = classNames.bind(styles);

function UserCaption({ data, className, showAvatar = true }) {
    return (
        <div className={cx('wrapper', className)}>
            {showAvatar && <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />}
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span className={cx('nickname')}>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                {/* Phần Caption nằm ngay dưới tên */}
                <p className={cx('caption')}>{data.caption}</p>

                {/* Nếu là trong bình luận, có thêm hàng action này */}
                {className === 'comment-item' && (
                    <div className={cx('actions')}>
                        <span className={cx('time')}>3-8</span>
                        <span className={cx('reply')}>Trả lời</span>
                    </div>
                )}
            </div>
        </div>
    );
}

UserCaption.propTypes = {
    data: PropTypes.object.isRequired,
    className: PropTypes.string,
    showAvatar: PropTypes.bool,
};

export default UserCaption;
