import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import { useState, useEffect, Fragment } from 'react';
import { Wapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '../AccountItem';
import 'tippy.js/dist/tippy.css';
import { SendMessageIcon, MessageIcon, UploadIcon } from '~/components/Icons';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faSignIn,
  faEllipsisVertical,
  faGlobe,
  faKeyboard,
  faCircleQuestion,
  faCloudUpload,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';

//! giups bind cái obj styles rồi trả ra med là 1 function là cái cx và dùng cx để dùng class, và tên nó tự biến thành -
const cx = classNames.bind(styles);

//handle logic
const handleMenuChange = (MenuItem) => {
  console.log(MenuItem);
};

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faGlobe} />,
    title: 'Tiếng Việt',
    children: {
      title: 'Language',
      data: [
        {
          type: 'Language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'Language',
          code: 'vi',
          title: 'Vietnamese',
        },
        {
          type: 'Language',
          code: 'Jp',
          title: 'Japaness',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Phản hồi và trợ giúp',
    to: '/feefback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Phím tắt trên bàn phím',
    to: '',
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  const currentUser = true;

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@hoa',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Logout',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <HeadlessTippy
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
        </HeadlessTippy>

        <div className={cx('actions')}>
          {currentUser ? (
            <Fragment>
              <Tippy delay={(0, 200)} content="Upload Video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon icon={faCloudUpload} />
                </button>
              </Tippy>
              <Tippy delay={(0, 200)} content="Send Message" placement="bottom">
                <button className={cx('action-btn')}>
                  <SendMessageIcon />
                </button>
              </Tippy>
              <Tippy
                delay={(0, 200)}
                content="You have message"
                placement="bottom"
              >
                <button className={cx('action-btn')}>
                  <MessageIcon />
                  <span className={cx('badge')}>12</span>
                </button>
              </Tippy>
            </Fragment>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                Login
              </Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                alt=""
                src="https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg"
                fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
