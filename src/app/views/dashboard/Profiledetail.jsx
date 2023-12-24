import { Card, Grid, styled, useTheme,Box } from '@mui/material';
import { Fragment } from 'react';
import Profile_detail from './shared/Profiledetail';
import CourseCard from './shared/CourseCard';
// import SimpleTable from "./SimpleTable";
import { Breadcrumb, SimpleCard } from "app/components";
import React, { useState, useEffect } from 'react';
import axios from 'axios.js';



const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));


const Profiledetail = () => {
  const { palette } = useTheme();

  const [data, setData] = useState(null);
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://140.120.14.106:5000/api/auth/profile');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

    useEffect(() => {
      fetchUsers();
    }, []);

    if (!data || !data.user) {
      return <div>Loading...</div>; // or any other fallback UI
    }


  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Home", path: "/dashboard/default" }, { name: "" }]} />
      </Box>

      <SimpleCard title={`${data.user.name}`}>
        <Profile_detail />
      </SimpleCard>


    </Container>
  );
};

export default Profiledetail;

