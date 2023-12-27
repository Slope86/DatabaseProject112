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
import { useParams } from 'react-router-dom';


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

// ...

// ...

// ...
// ...

const CategoryPage2 = () => {
  const { category: urlCategory } = useParams();
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;
  const [data, setData] = useState(null);
  const [teachers, setTeachers] = useState(null);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(urlCategory || "all_categories");
  const [title, setTitle] = useState("Modify Courses");
  const [loading, setLoading] = useState(true); // 新增 loading 状态

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [coursesResponse, teachersResponse] = await Promise.all([
          axios.get('http://140.120.14.106:5000/api/admin/courses'),
          axios.get('http://140.120.14.106:5000/api/admin/teachers'),
        ]);

        setData(coursesResponse.data);
        setTeachers(teachersResponse.data.teachers);
        // 更新标题
        setTitle(selectedCategory !== "all_categories" ? ` ${selectedCategory} ` : "Modify Courses");
        setLoading(false); // 数据加载完成后设置 loading 为 false
      } catch (err) {
        setError(err);
        setLoading(false); // 如果发生错误也要设置 loading 为 false
      }
    };

    fetchData();
  }, [selectedCategory]);

  if (loading || !data || !data.courses || !teachers) {
    return <div>Loading...</div>; // or any other fallback UI
  }

  const filteredCourses = selectedCategory === "all_categories"
    ? data.courses
    : data.courses.filter(course => course.category === selectedCategory);


  return (
    <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <CardHeader>
        <Title>{title}</Title>
      </CardHeader>
      <Box overflow="auto">
        <ProductTable>
          <TableHead>
            <TableRow>
              <TableCell sx={{ px: 3 }} colSpan={4}>
                Name
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Category
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Teacher
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Description
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={1}>
                {/* Action */}
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
              {filteredCourses.map((course) => {
              const teacher = Array.isArray(teachers) ? teachers.find(t => t.id === course.teacher_id) : null;

              return (
                <TableRow key={course.id} hover>
                  <TableCell colSpan={4} align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
                    <Box display="flex" alignItems="center">
                      {course.name}
                    </Box>
                  </TableCell>

                  <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
                    {course.category}
                  </TableCell>

                  <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
                    {teacher ? teacher.username : "Unknown Teacher"}
                  </TableCell>

                  <TableCell sx={{ px: 0 }} align="left" colSpan={2}>
                    {course.description}
                  </TableCell>

                  <TableCell sx={{ px: 0 }} colSpan={1}>
                    {/* Action */}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </ProductTable>
      </Box>
    </Card>
  );
};

export default CategoryPage2;