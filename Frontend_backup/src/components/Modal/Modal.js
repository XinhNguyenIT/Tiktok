import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Portal from '~/components/Portal'; // 
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

function Modal({ isOpen = false, onClose, children }) {
    // Nếu Modal không mở thì không render gì cả
    if (!isOpen) {
        return null;
    }

    // Hàm xử lý khi click vào lớp nền (Overlay)
    const handleOverlayClick = (e) => {
        // Chỉ đóng nếu click trúng vào lớp nền, không đóng khi click vào nội dung bên trong (body)
        if (e.target === e.currentTarget) {
            onBack();
        }
    };

    return (
        <Portal>
            <div className={cx('wrapper')}>
                <div className={cx('overlay')} onClick={onClose}>
                    <div className={cx('body')}>
                        {/* Nút đóng (X) góc trên bên phải */}
                        <button className={cx('close-btn')} onClick={onClose}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>

                        {/* Nội dung Modal */}
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func.isRequired, // Bắt buộc phải có hàm để đóng modal
    children: PropTypes.node.isRequired, // Nội dung bên trong modal
};

export default Modal;
