import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';
// import { BrowserRouter } from "react-router-dom";


const Profiledetail = Loadable(lazy(() => import('./Profiledetail')));



const ProfileRoutes = [
  { path: 'page-layouts/user-profile/default', element: <Profiledetail />, auth: authRoles.admin },
];


export default ProfileRoutes;
