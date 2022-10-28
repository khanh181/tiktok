import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const [history, setHistory] = useState([{ data: items }]); //! obj bên trong là cái children trong MENU_ITEMS
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              console.log(item.children);
              setHistory((prve) => [...prve, item.children]);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      visible
      delay={[0, 800]}
      interactive
      placement="bottom-end"
      render={(atrrs) => (
        <div className={cx('menu-lists')} tabIndex="-1" {...atrrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header
                title={'Language'}
                onBack={() => {
                  setHistory((prve) => prve.slice(0, prve.length - 1));
                }}
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
