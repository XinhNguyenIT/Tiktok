import React, { ReactNode, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

interface Props {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: Props) => {
    // Ngăn chặn cuộn trang phía sau khi Modal đang mở
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={cx('wrapper')}>
            {/* Nhấn vào lớp overlay này thì đóng modal */}
            <div className={cx('overlay')} onClick={onClose} />
            
            <div className={cx('container')}>
                {children}
            </div>
        </div>
    );
};

export default Modal;