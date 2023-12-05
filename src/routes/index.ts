import { IPrivateRoutes, IPublicRoutes } from '@/common/Type';

import Home from '@/pages/Home';
import Messages from '@/pages/Messages';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import Videos from '@/pages/Videos';
import MarketPlace from '@/pages/MarketPlace';
import NotFound from '@/pages/NotFound';

// Public Router
const publicRoutes: IPublicRoutes[] = [
    { path: '/', component: Home },

    { path: '/messages', component: Messages },

    { path: '/messages/t/:uid', component: Messages },

    { path: '/video', component: Videos },

    { path: '/market-place', component: MarketPlace },

    { path: '/signin', component: SignIn, layout: false },

    { path: '/signup', component: SignUp, layout: false },

    { path: '*', component: NotFound, layout: false },
];

// Private Router
const privateRoutes: IPrivateRoutes[] = [];

export { publicRoutes, privateRoutes };
