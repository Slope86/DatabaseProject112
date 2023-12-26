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
import { Link } from 'react-router-dom';
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

const Courselist = () => {
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all_categories");



    const fetchData = async () => {
      try {
        const response = await axios.get('http://140.120.14.106:5000/api/admin/courses');
        setData(response.data);
      } catch (err) {
        setError(err);
      }
    };
  useEffect(() => {
    fetchData();
  }, []);

  if (!data || !data.courses) {
    return <div>Loading...</div>; // or any other fallback UI
  }

  const filteredCourses = selectedCategory === "all_categories"
    ? data.courses
    : data.courses.filter(course => course.category === selectedCategory);

  const deleteUser = async (courseId) => {
    try {
      await axios.delete(`http://140.120.14.106:5000/api/admin/courses/${courseId}`);
      fetchData(); // Refresh the user list after deleting a user
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };


// const handleDeleteCourse = async (courseId) => {
//   try {
//     // 使用您的 API 端點和方法進行刪除
//     await axios.delete(`http://140.120.14.106:5000/api/admin/courses`, {
//       headers: {
//         'Content-Type': 'application/json', // 設置 Content-Type 為 'application/json'
//       },
//     });

//     // 更新狀態以重新渲染
//     const updatedCourses = data.courses.filter((course) => course.id !== courseId);
//     setData({ ...data, courses: updatedCourses });
//     fetchData();
//   } catch (error) {
//     console.error('Error deleting course:', error);
//     // 處理錯誤，例如顯示提示或記錄錯誤
//   }
// };;

  return (
    <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <CardHeader>
        <Title>Modify Courses</Title>
        <Select size="small" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <MenuItem value="all_categories">All</MenuItem>
          {Array.from(new Set(data.courses.map(course => course.category))).map(category => (
            <MenuItem key={category} value={category}>{category}</MenuItem>
          ))}
        </Select>
      </CardHeader>
      <Box overflow="auto">
        <ProductTable>
          <TableHead>
            <TableRow>
              <TableCell sx={{ px: 3 }} colSpan={4}>
                Name
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={3}>
                Category
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={4}>
                Description
              </TableCell>
              <TableCell sx={{ px: 1 }} colSpan={1}>
                Edit
              </TableCell>
              
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredCourses.map((course) => (
              <TableRow key={course.id} hover>
                <TableCell colSpan={4} align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
                  <Box display="flex" alignItems="center">
                    {course.name}
                  </Box>
                </TableCell>

                <TableCell align="left" colSpan={3} sx={{ px: 0, textTransform: 'capitalize' }}>
                  {course.category}
                </TableCell>

                <TableCell sx={{ px: 0 }} align="left" colSpan={4}>
                  {course.description}
                </TableCell>

                <TableCell sx={{ px: 1 }} colSpan={1}>
                  <IconButton component={Link} to={`/edit/${course.id}`} color="primary">
                    <Icon>edit</Icon>
                  </IconButton>

                  <IconButton onClick={() => deleteUser(course.id)} color="error">
                    <Icon>delete</Icon>
                  </IconButton>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ProductTable>
      </Box>
    </Card>
  );
};

export default Courselist;


