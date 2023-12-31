import {
  Box,
  Icon,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import TablePagination from '@mui/material/TablePagination';
import { Paragraph } from 'app/components/Typography';
import React, { useState, useEffect } from 'react';
import axios from 'axios.js';

const StyledTable = styled(Table)(({ theme }) => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));





// const YourComponent = ({ data }) => {

//  };




const Teacher_detail = () => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          // const response = await axios.get('http://140.120.14.106:5000/users');
          const response = await axios.get('http://140.120.14.106:5000/api/admin/teachers');
          setData(response.data);
        } catch (err) {
          setError(err);
        }
      };

      fetchData();
    }, []);

    if (!data || !data.teachers) {
      return <div>Loading...</div>; // or any other fallback UI
    }

return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="left" style={{ width: '80px' }}>Name</TableCell>
            <TableCell align="left" style={{ width: '100px' }}>Email</TableCell>
            <TableCell align="left" style={{ width: '300px' }}>Courses Taught</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.teachers
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((teacher) => (
              <TableRow key={teacher.id}>
                <TableCell align="left">{teacher.username}</TableCell>
                <TableCell align="left">{teacher.email}</TableCell>
                <TableCell align="left">
                  <ul>
                    {teacher.courses_taught.map((course) => (
                      <li key={course.id} style={{ fontSize: '16px' }}>{course.name}</li>
                    ))}
                  </ul>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </StyledTable>

      <TablePagination
        sx={{ px: 2 }}
        page={page}
        component="div"
        rowsPerPage={rowsPerPage}
        count={data.teachers.length}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ "aria-label": "Next Page" }}
        backIconButtonProps={{ "aria-label": "Previous Page" }}
      />
    </Box>
  );
};

export default Teacher_detail;