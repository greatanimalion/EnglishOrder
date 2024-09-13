

import Home from '@/pages/Home';
import Admin from '@/pages/Admin';
import Login from '@/pages/Login';
import NotFound from '@/pages/Error/NotFound';
import { createBrowserRouter, } from "react-router-dom";

//admin
import RecentData from '@/pages/Admin/components/recentData';

// 定义路由配置数组
const routes =createBrowserRouter([
  {
    path: '/',
    element: <Home />,

    // exact: true, // 精确匹配
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        path: 'recentData',
        element: <RecentData />,
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />,
  }
])


export default routes;
