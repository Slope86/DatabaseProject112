import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';


const Course_detail = Loadable(lazy(() => import('./Course_detail')));

const CourseRoutes = [
  { path: '/Course/default', element: <Course_detail />, auth: authRoles.admin },
];

export default CourseRoutes;
