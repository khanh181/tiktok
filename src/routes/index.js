import routersConfig from '~/config/routes';

//layouts
import { HeaderOnly } from '~/components/Layout';

//pages
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// ! router mà k cần đăng nhập vẫn xem được
const publicRoute = [
  { path: routersConfig.home, component: Home },
  { path: routersConfig.following, component: Following },
  { path: routersConfig.profile, component: Profile },
  { path: routersConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routersConfig.search, component: Search, layout: null },
];

// ! router mà cần đăng nhập mới xem được
const privateRoute = [];

export { privateRoute, publicRoute };
