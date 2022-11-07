import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('account-item')}>
      <Image
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/38cbe5e5d1b87bbf8636124ce8432d3d~c5_100x100.jpeg?x-expires=1667977200&x-signature=w2EvrbC9AjwNT3xJvW%2BkAvhtqCs%3D"
        alt=""
      />
      <div className={cx('item-info')}>
        <p className={cx('nickname')}>
          <strong>giacminhluat</strong>
          <FontAwesomeIcon className={cx('checked')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>Giác Minh Luật</p>
      </div>
    </div>
  );
}

AccountItem.propTypes = {};
export default AccountItem;
