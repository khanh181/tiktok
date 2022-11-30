import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
  HomeIcon,
  HomeActiveIcon,
  UserGroupIcon,
  UserGroupActiveIcon,
  LiveIcon,
  LiveActiveIcon,
} from '~/components/Icons';
import * as userService from '~/services/userServices';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;

function Sidebar() {
  const [page, setPage] = useState(INIT_PAGE);

  const [suggestedUsers, setSuggestedUsers] = useState([]);

  useEffect(() => {
    userService
      .getSuggested({ page, perPage: PER_PAGE })
      .then((data) => {
        setSuggestedUsers((prevUsers) => [...prevUsers, ...data]);
        // console.log(setSuggestedUsers);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  const handleSeeAll = () => {
    setPage(page + 1);
  };

  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem
          title="For you"
          to={config.routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem
          title="Live"
          to={config.routes.live}
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
        />
      </Menu>

      <SuggestedAccounts
        label="Suggested accounts"
        data={suggestedUsers}
        onSeeAll={handleSeeAll}
      />
      <SuggestedAccounts label="Following accounts" />
    </aside>
  );
}

export default Sidebar;
