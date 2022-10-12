import Tippy from '@tippyjs/react/headless';
import { useState, useEffect } from 'react';
import { Wapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '../AccountItem';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/imgs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faSignIn,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

//! giups bind cái obj styles rồi trả ra med là 1 function là cái cx và dùng cx để dùng class, và tên nó tự biến thành -
const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(atrrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...atrrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Account</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input
              placeholder="Search video and account..."
              spellCheck={false}
            />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
              <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            </button>
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx('actions')}>
          <Button text>Upload</Button>
          <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
            Login
          </Button>
          <Tippy
            interactive
            visible
            render={(atrrs) => (
              <div className={cx('menu-items')} tabIndex="-1" {...atrrs}>
                <PopperWrapper>
                  <h4 className={cx('search-title')}>Account</h4>
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                </PopperWrapper>
              </div>
            )}
          >
            <button className={cx('more-btn')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Tippy>
        </div>
      </div>
    </header>
  );
}

export default Header;
