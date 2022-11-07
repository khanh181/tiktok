import config from '~/config';

//layouts
import { HeaderOnly } from '~/layouts';

//pages
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';

// ! router mà k cần đăng nhập vẫn xem được
const publicRoute = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.live, component: Live },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: null },
];

// ! router mà cần đăng nhập mới xem được
const privateRoute = [];

export { privateRoute, publicRoute };
