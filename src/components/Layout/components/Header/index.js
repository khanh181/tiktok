import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/imgs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

//! giups bind cái obj styles rồi trả ra med là 1 function là cái cx và dùng cx để dùng class, và tên nó tự biến thành -
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <div className={cx('search')}>
          <input placeholder="Search video and account..." spellCheck={false} />
          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
          </button>
          <span></span>
          <button className={cx('search-btn')}>
            <FontAwesomeIcon
            className={cx('search-icon')}
              icon={faMagnifyingGlass}
            />
          </button>
        </div>
        <div className={cx('actions')}></div>
      </div>
    </header>
  );
}

export default Header;
