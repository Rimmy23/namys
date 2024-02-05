import { Navigate, createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Shop/Dashboard";
import AboutUs from "./views/Shop/AboutUs";
import Candles from "./views/Shop/Candles";
import CandlesCare from "./views/Shop/CandlesCare";
import Contacts from "./views/Shop/Contacts";
import Decorations from "./views/Shop/Decorations";
import Login from "./views/Admin/Login";
import DefaultLayout from "./components/DefaultLayout";
import Cart from "./views/Shop/Cart";
import AdminLayout from "./components/AdminLayout";
import CandlesMod from "./views/Admin/CandlesMod";
import DecorationMod from "./views/Admin/DecorationMod";
import ModifyProduct from "./views/Admin/ModifyProduct";
import AddCandle from "./views/Admin/AddCandle";
import AddDeco from "./views/Admin/AddDeco";
import OrderInformation from "./views/Shop/OrderInformation";
import ConfirmOrder from "./views/Shop/ConfirmOrder";
import Signup from "./views/Admin/Signup";
import ProductCandle from "./views/Shop/ProductCandle";
import ProductDeco from "./views/Shop/ProductDeco";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Navigate to="/" />
            },
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/about',
                element: <AboutUs />
            },
            {
                path: '/candles',
                element: <Candles />
            },
            {
                path: '/candlescare',
                element: <CandlesCare />
            },
            {
                path: '/contacts',
                element: <Contacts />
            },
            {
                path: '/decorations',
                element: <Decorations />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/candle/:id', //musí mít cestu na požadovaný id produktu /:id
                element: <ProductCandle />
            },
            {
                path: '/decoration/:id',
                element: <ProductDeco />
            },
            {
                path: '/order',
                element: <OrderInformation />
            },
            {
                path: '/confirm',
                element: <ConfirmOrder />
            },
        ]
    },
    {
        path: '/admin',
        element: <Login />,
    },
    {
        path:'/admin/signup',
        element: <Signup />,
    },
    {
        path: '/admin/loggedin',
                element: <AdminLayout />,
                children: [
                    {
                        path:'/admin/loggedin',
                        element: <Navigate to="/admin/loggedin/candlesMod" />
                    },
                    {
                        path: '/admin/loggedin/candlesMod',
                        element: <CandlesMod />
                    },
                    {
                        path:'/admin/loggedin/decorationMod',
                        element: <DecorationMod />
                    },
                    {
                        path:'/admin/loggedin/modifyProduct',
                        element: <ModifyProduct />
                    },
                    {
                        path:'/admin/loggedin/addCandle',
                        element: <AddCandle />
                    },
                    {
                        path:'/admin/loggedin/addDeco',
                        element:<AddDeco />
                    },
                ]
    },
])

export default router;