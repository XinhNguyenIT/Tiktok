import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            alert('Vui lòng nhập đầy đủ tài khoản và mật khẩu');
            return;
        }

        localStorage.setItem('userToken', 'abc123');
        localStorage.setItem(
            'user',
            JSON.stringify({
                username,
            }),
        );

        navigate('/');
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('title')}>Đăng nhập</h2>

                <form className={cx('form')} onSubmit={handleSubmit}>
                    <input
                        className={cx('input')}
                        type="text"
                        placeholder="Tài khoản"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        className={cx('input')}
                        type="password"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className={cx('loginBtn')} type="submit">
                        Đăng nhập
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
