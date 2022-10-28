import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        src="https://i.pinimg.com/736x/3e/48/3f/3e483f6556b88f3917a488845f2a7dc0.jpg"
        className={cx('img')}
        alt="Hoaa"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyễn Văn A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('userName')}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
