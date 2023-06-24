import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Favourites from "./pages/Favourites";
import History from "./pages/History";
import Shop from "./pages/Shop";
import Mainpage from "./pages/Courses";
import Main from "./pages/Main";
import { ADMIN_ROUTE, COURSES_ROUTE, FAVOURITES_ROUTE, HISTORY_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, SHOP1_ROUTE, SHOP2_ROUTE, SHOP3_ROUTE, SHOPALL_ROUTE, SHOP_ROUTE } from "./utils/consts";
import ShopAll from "./pages/ShopCourse/ShopAll";
import Shop1 from "./pages/ShopCourse/Shop1";
import Shop2 from "./pages/ShopCourse/Shop2";
import Shop3 from "./pages/ShopCourse/Shop3";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: HISTORY_ROUTE,
        Component: History
    },
    {
        path: FAVOURITES_ROUTE,
        Component: Favourites
    }
]
export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: HISTORY_ROUTE,
        Component: History
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: COURSES_ROUTE,
        Component: Mainpage
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: SHOPALL_ROUTE,
        Component: ShopAll
    },
    {
        path: SHOP1_ROUTE,
        Component: Shop1
    },
    {
        path: SHOP2_ROUTE,
        Component: Shop2
    },
    {
        path: SHOP3_ROUTE,
        Component: Shop3
    }
]

