import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';


const Course_list = Loadable(lazy(() => import('./Course_list')));

const CourselistRoutes = [
  { path: '/Courseslist/default', element: <Course_list />, auth: authRoles.admin },
];

export default CourselistRoutes;
