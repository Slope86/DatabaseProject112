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


const Teacher_detail = () => {

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
            <TableCell align="left">Name</TableCell>
            <TableCell colSpan={2} align="left">Email</TableCell>
            <TableCell align="center"></TableCell>
             <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
            {/*<TableCell align="right"></TableCell>*/}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.teachers.map((user) => (
            <TableRow key={user.id}>
              <TableCell align="left">{user.username}</TableCell>
              <TableCell colSpan={2} align="left">{user.email}</TableCell>
              <TableCell align="center"></TableCell>
             <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Box>
  );
};

export default Teacher_detail;
