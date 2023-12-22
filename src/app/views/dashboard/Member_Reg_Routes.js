import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';
// import { BrowserRouter } from "react-router-dom";


const Member_Reg_detail = Loadable(lazy(() => import('./Member_Reg_detail')));



const Member_Reg_Routes = [
  { path: '/MemberReg/default', element: <Member_Reg_detail />, auth: authRoles.admin },
];


export default Member_Reg_Routes;
