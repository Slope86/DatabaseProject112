import AuthGuard from 'app/auth/AuthGuard';
import chartsRoute from 'app/views/charts/ChartsRoute';
import dashboardRoutes from 'app/views/dashboard/DashboardRoutes';
import CourseRoutes from 'app/views/dashboard/CourseRoutes';
import UserlistRoutes from 'app/views/dashboard/UserlistRoutes';
import TeacherRoutes from 'app/views/dashboard/TeacherRoutes';
import materialRoutes from 'app/views/material-kit/MaterialRoutes';
import NotFound from 'app/views/sessions/NotFound';
import sessionRoutes from 'app/views/sessions/SessionRoutes';
import { Navigate } from 'react-router-dom';
import MatxLayout from './components/MatxLayout/MatxLayout';


const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [...dashboardRoutes, ...chartsRoute, ...materialRoutes, ...CourseRoutes, ...UserlistRoutes, ...TeacherRoutes],
  },
  ...sessionRoutes,
  { path: '/', element: <Navigate to="dashboard/default" /> },
  { path: '/', element: <Navigate to="Course/default" /> },  
  { path: '/', element: <Navigate to="Userlist/default" /> },  
  { path: '/', element: <Navigate to="Teacher/default" /> },  
  { path: '*', element: <NotFound /> },
];

export default routes;
