import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import PropTypes from 'prop-types';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import AccountPreview from '~/components/SuggestedAccounts/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  const renderPreview = (props) => {
    return (
      <div className={cx('preview')} tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview data={data} />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy
        offset={[0, -5]}
        interactive={true}
        delay={[400, 0]}
        placement="bottom-start"
        render={renderPreview}
      >
        <div className={cx('account-item')}>
          <Image
            className={cx('avatar')}
            src={data.avatar}
            alt="{data.nickname}"
          />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>{data.nickname}</strong>
              {data.tick && (
                <FontAwesomeIcon
                  className={cx('checked')}
                  icon={faCheckCircle}
                />
              )}
            </p>
            <p className={cx('name')}>
              {`${data.last_name} ${data.first_name}`}
            </p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};
export default AccountItem;
