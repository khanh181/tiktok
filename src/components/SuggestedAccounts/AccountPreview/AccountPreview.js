import styles from './AccountPreview.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Image from '~/components/Image';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
        <Button primary> Follow</Button>
      </div>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>{data.nickname}</strong>
          <FontAwesomeIcon className={cx('checked')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>
          {data.first_name} {data.last_name}
        </p>
      </div>
      <p className={cx('information')}>
        <strong className={cx('followers')}>{data.followers_count}</strong>
        <span className={cx('label')}>Followers</span>

        <strong className={cx('likes')}>{data.likes_count}</strong>
        <span className={cx('label')}>Likes</span>
      </p>
    </div>
  );
}
AccountPreview.propTypes = {
  data: PropTypes.object.isRequired,
};
export default AccountPreview;
