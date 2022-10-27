import className from 'classnames/bind';
import style from './Popper.module.scss';

const cx = className.bind(style);

function Wapper({ children, className }) {
  return <div className={cx('wrapper', className)}>{children}</div>;
}

export default Wapper;
