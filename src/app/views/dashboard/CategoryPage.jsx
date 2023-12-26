import { Card, Grid, styled, useTheme,Box } from '@mui/material';
import { Fragment } from 'react';
import CategoryPage2 from './shared/CategoryPage';
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


const CategoryPage = () => {
  const { palette } = useTheme();


  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Course", path: "/Course/default" }, { name: "Category" }]} />
      </Box>
{/*
      <SimpleCard title=" Category ">
      </SimpleCard>*/}
        <CategoryPage2 />


    </Container>
  );
};

export default CategoryPage;

