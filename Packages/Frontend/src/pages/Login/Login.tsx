import React from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Button from '@/components/Button';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>Log in with your Instagram account</h2>
                
                <form className={cx('form')} onSubmit={(e) => e.preventDefault()}>
                    <input 
                        className={cx('input')} 
                        type="text" 
                        placeholder="Username, phone or email" 
                    />
                    <input 
                        className={cx('input')} 
                        type="password" 
                        placeholder="Password" 
                    />
                    <Button primary className={cx('login-btn')}>
                        Log in
                    </Button>
                </form>

                <p className={cx('forgot-password')}>Forgot password?</p>

            </div>
        </div>
    );
}

export default Login;