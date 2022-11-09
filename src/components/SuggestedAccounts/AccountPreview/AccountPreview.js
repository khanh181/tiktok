import styles from './AccountPreview.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <Image
          className={cx('avatar')}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/38cbe5e5d1b87bbf8636124ce8432d3d~c5_100x100.jpeg?x-expires=1667977200&x-signature=w2EvrbC9AjwNT3xJvW%2BkAvhtqCs%3D"
          alt=""
        />
        <Button primary> Follow</Button>
      </div>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>giacminhluat</strong>
          <FontAwesomeIcon className={cx('checked')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>Giác Minh Luật</p>
      </div>
      <p className={cx('information')}>
        <strong className={cx('followers')}>8.2M</strong>
        <span className={cx('label')}>Followers</span>

        <strong className={cx('likes')}>1346.6M</strong>
        <span className={cx('label')}>Likes</span>
      </p>
    </div>
  );
}

export default AccountPreview;
