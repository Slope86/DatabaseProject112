import { Box, Card, Grid, Icon, IconButton, styled, Tooltip } from '@mui/material';
import { Small } from 'app/components/Typography';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios.js';
import { Typography } from '@mui/material';


const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '24px !important',
  background: theme.palette.background.paper,
  [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  '& small': { color: theme.palette.text.secondary },
  '& .icon': { opacity: 0.6, fontSize: '44px', color: theme.palette.primary.main },
}));

const Heading = styled('h6')(({ theme }) => ({
  margin: 0,
  marginTop: '4px',
  fontSize: '14px',
  fontWeight: '500',
  color: theme.palette.primary.main,
}));


// 這是最一開始的

// const Course = () => {

//    const [data, setData] = useState(null);
//     const [data2, setData2] = useState(null);
//     const [error, setError] = useState(null);
//     const [error2, setError2] = useState(null);
//     const [data3, setData3] = useState(null);


// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://140.120.14.106:5000/api/admin/students');
//       setData(response.data);
      
//       const response2 = await axios.get('http://140.120.14.106:5000/api/admin/teachers');
//       setData2(response2.data);  // Fix: Use response2.data instead of response2.data2

//      const response3 = await axios.get('http://140.120.14.106:5000/api/admin/courses');
//       setData3(response3.data); 

//     } catch (err) {
//       setError(err);
//       setError2(err);  // Fix: Handle errors for the second request
//     }
//   };

//   fetchData();
// }, []);

// if (!data || !data.students_count || !data2 || !data2.teachers_count || !data3 || !data3.courses_count ) {
//   return <div>Loading...</div>; // or any other fallback UI
// }

//   // const fetchUsers = async () => {
//   //   try {
//   //     const response2 = await axios.get('http://140.120.14.106:5000/api/admin/students');
//   //     setData2(response2.data2);
//   //   } catch (error) {
//   //     console.error('Error fetching students:', error);
//   //   }
//   // };

//   // if (!data2 || !data2.students_count) {
//   //     return <div>Loading...</div>; // or any other fallback UI
//   //   }

//   const cardList = [

//    { name: 'Student', amount:data.students_count , path: "/Userlist/default", icon: 'group' },
//     { name: 'Teacher',path:"/Teacher/default", amount: data2.teachers_count, icon: 'group' },

//     { name: 'Course',path:"/Courseslist/default", amount: data3.courses_count, icon: 'class' },
//   ];

//   return (
//     <Grid container spacing={3} sx={{ mb: '24px' }}>
//       {data3.courses.map((item) => (
//         <Grid item xs={12} md={6} >
//           <StyledCard elevation={6}>
//             <ContentBox>
//               <Icon className="icon">'class'</Icon>
//               <Box ml="12px">
//                 <Heading>{item.category}</Heading>
//                 {item.name}
//               </Box>
//             </ContentBox>

//             <Tooltip title="View Details" placement="top">
//               {/* 使用 Link 將組件連接到指定的路徑 */}
              
//                 <IconButton>
//                   <Icon>arrow_right_alt</Icon>
//                 </IconButton>
              
//             </Tooltip>
//           </StyledCard>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default Course;

// const Course = () => {
//   const [data, setData] = useState(null);
//   const [data2, setData2] = useState(null);
//   const [error, setError] = useState(null);
//   const [error2, setError2] = useState(null);
//   const [data3, setData3] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://140.120.14.106:5000/api/admin/students');
//         setData(response.data);

//         const response2 = await axios.get('http://140.120.14.106:5000/api/admin/teachers');
//         setData2(response2.data);

//         const response3 = await axios.get('http://140.120.14.106:5000/api/admin/courses');
//         setData3(response3.data);
//       } catch (err) {
//         setError(err);
//         setError2(err);
//       }
//     };

//     fetchData();
//   }, []);

//   if (!data || !data.students_count || !data2 || !data2.teachers_count || !data3 || !data3.courses_count) {
//     return <div>Loading...</div>; // or any other fallback UI
//   }

//   const cardList = [
//     { name: 'Student', amount: data.students_count, path: "/Userlist/default", icon: 'group' },
//     { name: 'Teacher', path: "/Teacher/default", amount: data2.teachers_count, icon: 'group' },
//     { name: 'Course', path: "/Courseslist/default", amount: data3.courses_count, icon: 'class' },
//   ];

//   // 根据 category 进行分组
//   const coursesGroupedByCategory = data3.courses.reduce((grouped, course) => {
//     if (!grouped[course.category]) {
//       grouped[course.category] = [];
//     }
//     grouped[course.category].push(course);
//     return grouped;
//   }, {});

//   return (
//     <Grid container spacing={3} sx={{ mb: '24px' }}>
//       {Object.entries(coursesGroupedByCategory).map(([category, courses]) => (
//         <Grid item xs={12} key={category}>
//           <Typography variant="h6" sx={{ mb: 2 }}>{category}</Typography>
//           {courses.map((item) => (
//             <StyledCard elevation={6} key={item.id}>
//               <ContentBox>
//                 <Icon className="icon">class</Icon>
//                 <Box ml="12px">
//                   {item.name}
//                   <Heading></Heading>
//                 </Box>
//               </ContentBox>
//               <Tooltip title="View Details" placement="top">
//                 <Link to={`/course/${item.id}`}>
//                   <IconButton>
//                     <Icon>arrow_right_alt</Icon>
//                   </IconButton>
//                 </Link>
//               </Tooltip>
//             </StyledCard>
//           ))}
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default Course;













// ... (imports remain unchanged)

// ... (import statements)

const Course = () => {
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [error, setError] = useState(null);
  const [error2, setError2] = useState(null);
  const [data3, setData3] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://140.120.14.106:5000/api/admin/students');
        setData(response.data);

        const response2 = await axios.get('http://140.120.14.106:5000/api/admin/teachers');
        setData2(response2.data);

        const response3 = await axios.get('http://140.120.14.106:5000/api/admin/courses');
        setData3(response3.data);
      } catch (err) {
        setError(err);
        setError2(err);
      }
    };

    fetchData();
  }, []);

  if (!data || !data.students_count || !data2 || !data2.teachers_count || !data3 || !data3.courses_count) {
    return <div>Loading...</div>;
  }

  // Use a Set to keep track of unique categories
  const uniqueCategories = new Set();

  return (
    <Grid container spacing={3} sx={{ mb: '24px' }}>
      {data3.courses.map((item) => {
        // Check if the category has already been added to the Set
        if (!uniqueCategories.has(item.category)) {
          uniqueCategories.add(item.category);

          return (
            <Grid item xs={12} md={6} key={item.id}>
              <StyledCard elevation={6}>
                <Link to={`/Courseslist/category/${item.category}`} style={{ textDecoration: 'none' }}>
                  <ContentBox>
                    <Icon className="icon">class</Icon>
                    <Box ml="12px">
                      <Heading>{item.category}</Heading>
                      <Typography variant="body2" color="textSecondary">
                        {data3.courses.filter((course) => course.category === item.category).length}{' '}
                        Course
                        {data3.courses.filter((course) => course.category === item.category).length > 1
                          ? 's'
                          : ''}
                      </Typography>
                    </Box>
                  </ContentBox>
                </Link>
                <Tooltip title="View Details" placement="top">
                  {/* Move Link component to wrap around IconButton */}
                  <Link to={`/Courseslist/category/${item.category}`} style={{ textDecoration: 'none' }}>
                    <IconButton>
                      <Icon>arrow_right_alt</Icon>
                    </IconButton>
                  </Link>
                </Tooltip>
              </StyledCard>
            </Grid>
          );
        }

        return null; // Skip rendering for duplicate categories
      })}
    </Grid>
  );
};

export default Course;
