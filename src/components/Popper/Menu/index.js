import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function Menu() {
  return (
    <Tippy
      interactive
      placement="bottom-end"
      render={(atrrs) => (
        <div className={cx('content')} tabIndex="-1" {...atrrs}>
          <PopperWrapper>
            <h2>Menu item</h2>
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
