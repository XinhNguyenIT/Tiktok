import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

interface Props {
    children: ReactNode;
    className?: string;
    // Thêm dòng này để nhận mọi thuộc tính từ Tippy (như tabIndex, data-placement...)
    [key: string]: any; 
}

// Lấy ra children, className và gom tất cả các thuộc tính còn lại vào biến props
const PopperWrapper = ({ children, className, ...props }: Props) => {
    return (
        <div className={cx('wrapper', className)} {...props}>
            {children}
        </div>
    );
};

export default PopperWrapper;