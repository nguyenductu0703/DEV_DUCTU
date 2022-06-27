import config from '../config';
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Live from '../pages/Live';
import { HeaderOnly } from '../layouts';
import Search from '../pages/Search';

const publicRouter = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.live, component: Live },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },

];

const privateRouter = [];

export { publicRouter, privateRouter };
