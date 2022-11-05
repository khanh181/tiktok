import Tippy from '@tippyjs/react';
import { Fragment } from 'react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import images from '~/assets/images';
import {
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

import {
  SendMessageIcon,
  MessageIcon,
  UploadIcon,
} from '~/components/Icons/Icons';
import Search from '../Search/Search';
import Button from '../Button/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image/Image';
import config from '~/config';

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
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Phím tắt trên bàn phím',
    to: '',
  },
];

function Header() {
  const currentUser = true;

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
          <Link to={config.routes.home} className={cx('logo-link')}>
            <img src={images.logo} alt="Tiktok" />
          </Link>
        </div>

        <Search />

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
