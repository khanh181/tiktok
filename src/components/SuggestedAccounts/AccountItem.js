import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';

// import PropTypes from 'prop-types';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import AccountPreview from '~/components/SuggestedAccounts/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div className={cx('preview')} tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy
        offset={[0, -5]}
        interactive={true}
        delay={[800, 0]}
        placement="bottom-start"
        render={renderPreview}
      >
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
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {};
export default AccountItem;
