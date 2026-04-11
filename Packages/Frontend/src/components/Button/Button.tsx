import React, { PropsWithChildren } from 'react';
import { Link, To } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface Props extends PropsWithChildren<unknown>, React.ButtonHTMLAttributes<HTMLButtonElement> {
    to?: string | To;
    href?: string;
    primary?: boolean;
    outline?: boolean;
    small?: boolean;
    large?: boolean;
    text?: boolean;
    rounded?: boolean;
    disabled?: boolean;
    className?: string;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    variant?: 'primary' | 'outline' | 'text' | 'circle';
}

const Button = ({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    rounded = false,
    disabled = false,
    onClick,
    children,
    className,
    variant, // Lấy variant ra
    leftIcon,
    rightIcon,
    ...passProps
}: Props): JSX.Element => {
    
    // 1. Mặc định là button
    let Comp: any = 'button';
    
    // 2. Gom các props lại
    const props: any = {
        onClick,
        ...passProps,
    };

    // 3. Xử lý logic loại Component và thuộc tính đi kèm
    if (disabled) {
        // Xóa tất cả sự kiện khi disabled
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    } else if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    // 4. Quản lý class CSS
    const classes = cx('wrapper', {
        [className as string]: className,
        [variant as string]: variant, // Thêm variant vào đây để ăn CSS class
        primary,
        outline,
        text,
        disabled,
        rounded,
        small,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
};

export default Button;