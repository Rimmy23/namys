import { ArrowLeftOnRectangleIcon, Bars3Icon, FireIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/24/solid";
import { useStateContext } from "../context/ContextProvider"
import { Navigate, Outlet } from "react-router-dom";
import axiosClient from "../axios";

export default function AdminLayout() {
    const { currentUser, userToken, setCurrentUser, setUserToken } = useStateContext();

    if(!userToken){
        return <Navigate to="/admin" />
    }

    const logout = (ev) => {
        ev.preventDefault();
        axiosClient.post("/logout")
        .then(() => {
            setCurrentUser({});
            setUserToken(null);
        });
    };

  return (
    <>       
        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="w-10 h-10 text-gray-700 hover:text-gray-400 hover:bg-gray-700"/>
        </button>

        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
            <li>
                    <a href="/admin/loggedin" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <UserIcon className="w-10 h-10 bg-gray-400 p-2 rounded-full text-white"/>
                    <span className="ms-3">{currentUser.user}</span>
                    </a>
                </li>
                <li>
                    <a href="/admin/loggedin/candlesMod" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <FireIcon className="w-7 h-7 text-white"/>
                    <span className="ms-3">Svíčky</span>
                    </a>
                </li>
                <li>
                    <a href="/admin/loggedin/decorationMod" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <ShoppingBagIcon className="w-7 h-7 text-white"/>
                    <span className="flex-1 ms-3 whitespace-nowrap">Dekorace</span>
                    </a>
                </li>
                <li>
                    <a onClick={(ev) => logout(ev)} href="/admin" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <ArrowLeftOnRectangleIcon className="w-7 h-7 text-white"/>
                    <span
                      className="flex-1 ms-3 whitespace-nowrap"> 
                          Odhlásit
                    </span>
                    </a>
                </li>
            </ul>
        </div>
        </aside>

        <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 h-full w-full border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <Outlet />
        </div>
        </div>
    </>
  )
}
