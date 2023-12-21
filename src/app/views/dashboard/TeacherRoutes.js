import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';
// import { BrowserRouter } from "react-router-dom";


const Teacher_detail = Loadable(lazy(() => import('./Teacher_detail')));



const TeacherRoutes = [
  { path: '/Teacher/default', element: <Teacher_detail />, auth: authRoles.admin },
];


export default TeacherRoutes;
