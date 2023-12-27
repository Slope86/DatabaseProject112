import { Card, Grid, styled, useTheme,Box } from '@mui/material';
import { Fragment } from 'react';
import Search_detail from './Search_detail';
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


const Search_detial2 = () => {
  const { palette } = useTheme();

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Home", path: "/dashboard/default" }, { name: "Search for Course" }]} />
      </Box>

      <SimpleCard>
        <Search_detail />
      </SimpleCard>


    </Container>
  );
};

export default Search_detial2;

