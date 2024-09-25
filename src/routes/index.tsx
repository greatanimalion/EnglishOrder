

import Home from '@/pages/Home';
import Admin from '@/pages/Admin';
import Login from '@/pages/Login';
import NotFound from '@/pages/Error/NotFound';
import { createBrowserRouter} from "react-router-dom";

//admin
import RecentData from '@/pages/Admin/components/recentData';
import AllStudent from '@/pages/Admin/components/allStudents';

//person
import Person from '@/pages/person';

//home
import Index from '@/pages/Home/components/Index';
import School from '@/pages/Home/components/School';
import Study from '@/pages/Home/components/Study';
import Publish from '@/pages/Home/components/publish';
// 定义路由配置数组
const routes =createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/home',
        element: <Index />,
      },
      {
        path: '/school',
        element: <School />,
      },
      {
        path: '/study',
        element: <Study />,
      },
      {
        path:'/publish',
        element:<Publish/>
      }
    ]
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/person',
    element: <Person />,
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        path: 'recentData',
        element: <RecentData />,
      },
      {
        path: 'allStudents',
        element: <AllStudent />,
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />,
  }
])


export default routes;
