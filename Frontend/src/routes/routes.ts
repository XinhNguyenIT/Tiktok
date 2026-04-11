import config from '@/config'; // Trỏ vào thư mục config (nó sẽ lấy index.ts)
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Following from '@/pages/Following';
import Activity from '@/pages/Activity';
import Profile from '@/pages/Profile';

const publicRoutes = [
    { path: config.routes.home, component: Home },      // Phải có .routes ở giữa
    { path: config.routes.following, component: Following },
    { path: config.routes.search, component: Search },
    { path: config.routes.activity, component: Activity },
    { path: config.routes.profile, component: Profile },

];

export { publicRoutes };