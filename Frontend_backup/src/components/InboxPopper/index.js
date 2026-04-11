import classNames from 'classnames/bind';
import styles from './InboxPopper.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

// Dữ liệu giả lập dựa trên ảnh bạn gửi
const NOTIFICATIONS = [
    {
        id: 1,
        type: 'system',
        title: 'Thông báo hệ thống',
        desc: 'Một số tính năng mới đã được cập nhật...',
        isSystem: true,
    },
    {
        id: 2,
        user: 'Anh Ti ka',
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/731111000000~c5_100x100.jpeg',
        desc: 'đã thích video của bạn.',
        time: '3 ngày',
        thumb: 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0037/731111111.jpeg',
    },
    {
        id: 3,
        user: 'Nekorutre',
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/732222000000~c5_100x100.jpeg',
        desc: 'đã thích video của bạn.',
        time: '4 ngày',
        thumb: 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0037/732222222.jpeg',
    },
];

function InboxPopper() {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('header')}>Thông báo</h4>
            <div className={cx('list-item')}>
                {NOTIFICATIONS.map((item) => (
                    <div key={item.id} className={cx('item')}>
                        {item.isSystem ? (
                            <div className={cx('system-icon')}>
                                <FontAwesomeIcon icon={faInbox} />
                            </div>
                        ) : (
                            <img className={cx('avatar')} src={item.avatar} alt={item.user} />
                        )}

                        <div className={cx('info')}>
                            <span className={cx('user-name')}>{item.isSystem ? item.title : item.user}</span>
                            <p className={cx('desc')}>{item.desc}</p>
                            {!item.isSystem && <span className={cx('time')}>{item.time}</span>}
                        </div>

                        {item.thumb && <img className={cx('video-thumb')} src={item.thumb} alt="video" />}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InboxPopper;
