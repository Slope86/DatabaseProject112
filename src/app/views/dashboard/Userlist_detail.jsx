// import { Card, Grid, styled, useTheme } from '@mui/material';
// import { Fragment } from 'react';
// import Studentlist from './shared/Userlist_detail';

// const ContentBox = styled('div')(({ theme }) => ({
//   margin: '30px',
//   [theme.breakpoints.down('sm')]: { margin: '16px' },
// }));

// const Title = styled('span')(() => ({
//   fontSize: '1rem',
//   fontWeight: '500',
//   marginRight: '.5rem',
//   textTransform: 'capitalize',
// }));

// const SubTitle = styled('span')(({ theme }) => ({
//   fontSize: '0.875rem',
//   color: theme.palette.text.secondary,
// }));



// const Userlist_detail = () => {
//   const { palette } = useTheme();

//   return (
//     <Fragment>
//       <ContentBox className="Userlist_detail">
//         <Grid container spacing={3}>
//           <Grid item lg={8} md={8} sm={12} xs={12}>
//             <Studentlist />
//           </Grid>
//         </Grid>
//       </ContentBox>
//     </Fragment>
//   );
// };

// export default Userlist_detail;


import { Card, Grid, styled, useTheme,Box } from '@mui/material';
import { Fragment } from 'react';
import Teacher_detail from './shared/Teacher_detail';
import CourseCard from './shared/CourseCard';
// import SimpleTable from "./SimpleTable";
import { Breadcrumb, SimpleCard } from "app/components";
import Studentlist from './shared/Userlist_detail';



const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));


const Userlist_detail = () => {
  const { palette } = useTheme();

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Home", path: "/dashboard/default" }, { name: "Student" }]} />
      </Box>

       <Studentlist />

{/*      <SimpleCard title=" Teacher ">
       
      </SimpleCard>*/}


    </Container>
  );
};

export default Userlist_detail;

