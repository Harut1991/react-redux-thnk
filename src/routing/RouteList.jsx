import About from "../components/pages/About";
import Profile from "../components/user/Profile";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import NotFound from "../components/error/NotFound";
import Home from "../components/pages/Home";
import EmptyLayout from "../layouts/emptyLayout";

export default {
    'all': [
        {
            path: '/about',
            component: About
        },
        {
            path: '/',
            component: Home,
            exact: true
        }
    ],
    'authenticated': [
        {
            path: '/profile',
            component: Profile
        }
    ],
    'unauthenticated': [
        {
            path: '/sign-in',
            component: SignIn
        },
        {
            path: '/sign-up',
            component: SignUp
        }
    ],
    'error': [
        {
            path: '*',
            component: NotFound,
            layout: EmptyLayout
        }
    ]
}