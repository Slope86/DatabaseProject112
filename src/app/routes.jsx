import AuthGuard from 'app/auth/AuthGuard';
import chartsRoute from 'app/views/charts/ChartsRoute';
import dashboardRoutes from 'app/views/dashboard/DashboardRoutes';
import CourseRoutes from 'app/views/dashboard/CourseRoutes';
import UserlistRoutes from 'app/views/dashboard/UserlistRoutes';
import TeacherRoutes from 'app/views/dashboard/TeacherRoutes';
import Member_Reg_Routes from 'app/views/dashboard/Member_Reg_Routes';
import materialRoutes from 'app/views/material-kit/MaterialRoutes';
import NotFound from 'app/views/sessions/NotFound';
import sessionRoutes from 'app/views/sessions/SessionRoutes';
import { Navigate } from 'react-router-dom';
import MatxLayout from './components/MatxLayout/MatxLayout';
import CourselistRoutes from 'app/views/dashboard/CourselistRoutes';
import CategoryPage from 'app/views/dashboard/CategoryPage';

import EditCourse from 'app/views/dashboard/EditCourse'; 
import ProfileRoutes from 'app/views/dashboard/ProfileRoutes'; // Import the EditCourse component



const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      ...dashboardRoutes,
      ...chartsRoute,
      ...materialRoutes,
      ...CourseRoutes,
      ...UserlistRoutes,
      ...TeacherRoutes,
      ...Member_Reg_Routes,
      ...CourselistRoutes,
      ...ProfileRoutes,
      // Add the new route for EditCourse
      { path: 'edit/:id', element: <EditCourse /> },
      { path: '/Courseslist/category/:category', element: <CategoryPage /> },
    ],
  },
  ...sessionRoutes,
  { path: '/', element: <Navigate to="dashboard/default" /> },
  { path: '/', element: <Navigate to="Course/default" /> },  
  { path: '/', element: <Navigate to="Userlist/default" /> },  
  { path: '/', element: <Navigate to="Teacher/default" /> },  
  { path: '/', element: <Navigate to="MemberReg/default" /> }, 
  { path: '/', element: <Navigate to="Courseslist/default" /> }, 
  { path: '/', element: <Navigate to="page-layouts/user-profile/default" /> }, 
  { path: 'edit/:id', element: <EditCourse /> },
  { path: '/Courseslist/category/:category', element: <CategoryPage /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
