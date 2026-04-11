import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './ScrollButtons.module.scss';

const cx = classNames.bind(styles);

function ScrollButtons({ onUp, onDown }) {
    return (
        <div className={cx('wrapper')}>
            <button className={cx('btn')} onClick={onUp}>
                <FontAwesomeIcon icon={faChevronUp} />
            </button>

            <button className={cx('btn')} onClick={onDown}>
                <FontAwesomeIcon icon={faChevronDown} />
            </button>
        </div>
    );
}

export default ScrollButtons;
