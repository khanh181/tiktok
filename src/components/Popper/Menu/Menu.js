import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({
  children,
  items = [],
  hideOnClick = false,
  onChange = defaultFn,
}) {
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
              setHistory((prve) => [...prve, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  //? logic nhấn quay lại menu cấp trước
  const handleBack = () => {
    setHistory((prve) => prve.slice(0, prve.length - 1));
  };

  const renderResult = (atrrs) => (
    <div className={cx('menu-lists')} tabIndex="-1" {...atrrs}>
      <PopperWrapper className={cx('menu-popper')}>
        {history.length > 1 && (
          <Header title={current.title} onBack={handleBack} />
        )}
        <div className={cx('menu-body')}>{renderItems()}</div>
      </PopperWrapper>
    </div>
  );
  // ? handleResetToFirstPageMenu
  const handleResetMenu = () => {
    setHistory((prve) => prve.slice(0, 1));
  };

  return (
    <Tippy
      delay={[0, 800]}
      offset={[20, 10]}
      hideOnClick={hideOnClick}
      interactive
      placement="bottom-end"
      render={renderResult}
      onHidden={handleResetMenu} //? tức là khi nhấn ra ngoài thì cái mene đó về cấp 1
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
