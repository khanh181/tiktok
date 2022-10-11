import className from 'classnames/bind';
import style from './Popper.module.scss';

const cx = className.bind(style);

function Wapper({ children }) {
  return <div className={cx('wrapper')}>{children}</div>;
}

export default Wapper;
