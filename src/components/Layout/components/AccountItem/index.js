import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3694a397d8cd35e79e4800469112733d~c5_300x300.webp?x-expires=1665583200&amp;x-signature=xuInuBqjp0aG8SRT%2F7Iq0RM20pk%3D"
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
