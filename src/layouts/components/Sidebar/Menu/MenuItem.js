import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon }) {
  return (
    <NavLink
      end
      className={(nav) => cx('menu-item', { active: nav.isActive })}
      to={to}
    >
      <span className={cx('menu-icon')}>{icon}</span>
      <span className={cx('menu-active-icon')}>{activeIcon}</span>
      <span className={cx('menu-title')}>{title}</span>
    </NavLink>
  );
}

MenuItem.propTypes = {
  title: PropTypes.node.isRequired,
  to: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  activeIcon: PropTypes.node.isRequired,
};
export default MenuItem;
