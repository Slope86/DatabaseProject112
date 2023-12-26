import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';
// import { BrowserRouter } from "react-router-dom";


const CategoryPage.jsx = Loadable(lazy(() => import('./CategoryPage.jsx')));



const CategoryRoutes = [
  { path: '/CategoryPage/default', element: <CategoryPage.jsx />, auth: authRoles.admin },
];


export default CategoryRoutes;
