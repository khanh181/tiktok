import classNames from 'classnames/bind';
import styles from './Header.module.scss';

//! giups bind cái obj styles rồi trả ra med là 1 function là cái cx và dùng cx để dùng class, và tên nó tự biến thành -
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* logo */}
        {/* search */}
      </div>
    </header>
  );
}

export default Header;
