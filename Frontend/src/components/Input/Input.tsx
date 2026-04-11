import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string; // Nhận thông báo lỗi từ React Hook Form
}

// Sử dụng forwardRef để React Hook Form có thể truy cập vào thẻ input gốc
const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, className, ...props }, ref) => {
        return (
            <div className={cx('wrapper', className)}>
                {label && <label className={cx('label')}>{label}</label>}
                
                <input
                    ref={ref}
                    className={cx('input-field', { error: !!error })}
                    {...props}
                />
                
                {/* Hiển thị message lỗi nếu có */}
                {error && <span className={cx('error-message')}>{error}</span>}
            </div>
        );
    }
);

export default Input;