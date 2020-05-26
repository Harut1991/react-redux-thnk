import About from "../components/pages/About";
import Profile from "../components/user/Profile";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import NotFound from "../components/error/NotFound";
import Home from "../components/pages/Home";
import EmptyLayout from "../layouts/emptyLayout";
import AuthGuard from "./guards/AuthGuard";

export default [
    {
        path: '/profile',
        component: Profile,
        canActivate: AuthGuard.CanActivate
    },
    {
        path: '/sign-in',
        component: SignIn,
        canDeactivate: AuthGuard.CanDeactivate
    },
    {
        path: '/sign-up',
        component: SignUp,
        canDeactivate: AuthGuard.CanDeactivate
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '*',
        component: NotFound,
        layout: EmptyLayout
    }
]