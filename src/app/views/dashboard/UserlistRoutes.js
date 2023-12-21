import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';
// import { BrowserRouter } from "react-router-dom";


const Userlist_detail = Loadable(lazy(() => import('./Userlist_detail')));



const UserlistRoutes = [
  { path: '/Userlist/default', element: <Userlist_detail />, auth: authRoles.admin },
];


export default UserlistRoutes;
