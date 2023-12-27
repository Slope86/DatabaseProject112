import { Card, Grid, styled, useTheme,Box } from '@mui/material';
import { Fragment } from 'react';
import Teacher_detail from './shared/Teacher_detail';
import CourseCard from './shared/CourseCard';
// import SimpleTable from "./SimpleTable";
import { Breadcrumb, SimpleCard } from "app/components";



const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));


const Teacher_list = () => {
  const { palette } = useTheme();

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Home", path: "/dashboard/default" }, { name: "Teacher" }]} />
      </Box>

      <SimpleCard title=" Teacher ">
        <Teacher_detail />
      </SimpleCard>


    </Container>
  );
};

export default Teacher_list;

