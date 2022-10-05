//layouts
import { HeaderOnly } from '~/components/Layout';

import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// ! router mà k cần đăng nhập vẫn xem được
const publicRoute = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];

// ! router mà cần đăng nhập mới xem được
const privateRoute = [];

export { privateRoute, publicRoute };
