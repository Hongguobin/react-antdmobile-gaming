import Home from "../pages/Home"
import Login from "../pages/Login"
import Col from "../pages/Col"
import Cart from "../pages/Cart"
import Buy from "../pages/Buy"

const routes = [
    {
        path: '/',
        components: Home,
        exact: true
    },
    {
        path: '/home',
        components: Home,
    },
    {
        path: '/col',
        components: Col
    },
    {
        path: '/cart',
        components: Cart
    },
    {
        path: '/buy',
        components: Buy
    },
    {
        path: '/login',
        components: Login
    }
]
export default routes