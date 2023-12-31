import {
  Avatar,
  Box,
  Card,
  Icon,
  IconButton,
  MenuItem,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material';
import { Paragraph } from 'app/components/Typography';
import React, { useState, useEffect } from 'react';
import axios from 'axios.js';

const CardHeader = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));

const ProductTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: 'pre',
  '& small': {
    width: 50,
    height: 15,
    borderRadius: 500,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
  },
  '& td': { borderBottom: 'none' },
  '& td:first-of-type': { paddingLeft: '16px !important' },
}));

const Small = styled('small')(({ bgcolor }) => ({
  width: 50,
  height: 15,
  color: '#fff',
  padding: '2px 8px',
  borderRadius: '4px',
  overflow: 'hidden',
  background: bgcolor,
  boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}));










// const Studentlist = () => {
//   const { palette } = useTheme();
//   const bgError = palette.error.main;
//   const bgPrimary = palette.primary.main;
//   const bgSecondary = palette.secondary.main;


//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           // const response = await axios.get('http://140.120.14.106:5000/users');
//           const response = await axios.get('http://140.120.14.106:5000/api/admin/students');
//           setData(response.data);
//         } catch (err) {
//           setError(err);
//         }
//       };

//       fetchData();
//     }, []);

//     if (!data || !data.students) {
//       return <div>Loading...</div>; // or any other fallback UI
//     }


//   return (
//     <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
//       <CardHeader>
//         <Title>Student</Title>
// {/*        <Select size="small" defaultValue="this_month">
//           <MenuItem value="this_month">This Month</MenuItem>
//           <MenuItem value="last_month">Last Month</MenuItem>
//         </Select>*/}
//       </CardHeader>

//       <Box overflow="auto">
//         <ProductTable>
//           <TableHead>
//             <TableRow>
//               <TableCell sx={{ px: 3 }} colSpan={4}>
//                 Name
//               </TableCell>
//               <TableCell sx={{ px: 0 }} colSpan={5}>
//                 Email
//               </TableCell>
//               <TableCell sx={{ px: 0 }} colSpan={10}>
//                 Address
//               </TableCell>
//               <TableCell sx={{ px: 0 }} colSpan={3}>
//                 Mobile
//               </TableCell>              
// {/*              <TableCell sx={{ px: 0 }} colSpan={1}>
//                 Action
//               </TableCell>*/}
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {data.students.map((user) => (
//               <TableRow key={user.id} hover>
//                 <TableCell colSpan={4} align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
//                   <Box display="flex" alignItems="center">
//                     {user.username} 

//                   </Box>
//                 </TableCell>

//                 <TableCell align="left" colSpan={5} sx={{ px: 0, textTransform: 'capitalize' }}>
//                   {user.email} 
//                 </TableCell>

//                 <TableCell sx={{ px: 1 }} align="left" colSpan={10}>
//                   {user.address}
//                 </TableCell>

//                 <TableCell sx={{ px: 0 }} align="left" colSpan={3}>
//                   {user.phone}
//                 </TableCell>

//      {/*              <TableCell sx={{ px: 0 }} colSpan={1}>
//                   <IconButton>
//                     <Icon color="primary">edit</Icon>
//                   </IconButton>
//                 </TableCell>*/}

                
//               </TableRow>
//             ))}
//           </TableBody>
//         </ProductTable>
//       </Box>
//     </Card>
//   );
// };


// export default Studentlist;









const Studentlist = () => {
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [coursesData, setCoursesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentsResponse = await axios.get('http://140.120.14.106:5000/api/admin/students');
        setData(studentsResponse.data.students);

        // Fetch all courses data
        const coursesResponse = await axios.get('http://140.120.14.106:5000/api/admin/courses');
        setCoursesData(coursesResponse.data.courses);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  if (!data || !coursesData) {
    return <div>Loading...</div>; // or any other fallback UI
  }


  return (
    <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <CardHeader>
        <Title>Student</Title>
      </CardHeader>

      <Box overflow="auto">
        <ProductTable>
  <TableHead>
  <TableRow>
    <TableCell sx={{ px: 3 }} colSpan={2}>
      Username
    </TableCell>
    <TableCell sx={{ px: 0 }} colSpan={2}>
      FullName
    </TableCell>
    <TableCell sx={{ px: 0 }} colSpan={2}>
      Email
    </TableCell>
    <TableCell sx={{ px: 0 }} colSpan={4}>
      Address
    </TableCell>
    <TableCell sx={{ px: 0 }} colSpan={2}>
      Mobile
    </TableCell>
    <TableCell sx={{ px: 2 }} colSpan={4}>
      Courses
    </TableCell>
  </TableRow>
</TableHead>

<TableBody>
  {data.map((user) => (
    <TableRow key={user.id} hover>
      <TableCell colSpan={2} align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
        <Box display="flex" alignItems="center">
          {user.username}
        </Box>
      </TableCell>

      <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
        {user.fullname}
      </TableCell>

      <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
        {user.email}
      </TableCell>

      <TableCell sx={{ px: 0 }} align="left" colSpan={4}>
        {user.address}
      </TableCell>

      <TableCell sx={{ px: 0 }} align="left" colSpan={2}>
        {user.phone}
      </TableCell>

      <TableCell sx={{ px: 0 }} colSpan={4}>
        <ul>
          {coursesData
            .filter((course) => course.entered_students.some((student) => student.id === user.id))
            .map((course) => (
              <li key={course.id}>
                <Paragraph variant="caption">{course.name}</Paragraph>
              </li>
            ))}
        </ul>
      </TableCell>
    </TableRow>
  ))}
</TableBody>
        </ProductTable>
      </Box>
    </Card>
  );
};

export default Studentlist;