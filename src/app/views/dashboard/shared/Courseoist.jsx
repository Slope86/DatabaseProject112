// // src/shared/CourseList.js
// import React from 'react';

// const Courseoist = ({ courses }) => {
//     console.log(courses); // 在这里添加日志

//     if (!Array.isArray(courses) || courses.length === 0) {
//         return <p>No courses found.</p>;
//     }

//     return (
//         <div>
//             <h2>Course List</h2>
//             <ul>
//                 {courses.map((course) => (
//                     <li key={course.id}>{course.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Courseoist;


// src/shared/CourseList.js

// import React from 'react';
// import { Box, Icon, IconButton, styled, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

// const StyledTable = styled(Table)(({ theme }) => ({
//   whiteSpace: "pre",
//   "& thead": {
//     "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
//   },
//   "& tbody": {
//     "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
//   },
// }));

// const Courseoist = ({ courses }) => {
//   console.log(courses); // Add your logging here

//   if (!Array.isArray(courses) || courses.length === 0) {
//     return <p>No courses found.</p>;
//   }

//   return (
//     <Box width="100%" overflow="auto">
//       <StyledTable>
//         <TableHead>
//           <TableRow>
//             <TableCell align="left">Course Name</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {courses.map((course) => (
//             <TableRow key={course.id}>
//               <TableCell align="left">{course.name}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </StyledTable>
//     </Box>
//   );
// };

// export default Courseoist;


// src/shared/CourseList.js
// src/shared/CourseList.js
// src/shared/CourseList.js


// import React from 'react';
// import { Box, styled, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

// const StyledTable = styled(Table)(({ theme }) => ({
//   whiteSpace: "pre",
//   "& thead": {
//     "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
//   },
//   "& tbody": {
//     "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
//   },
// }));

// const NumberingCell = styled(TableCell)(({ theme }) => ({
//   paddingLeft: 0,
//   width: '110px', // Set the fixed width to 110 pixels
// }));

// const Courseoist = ({ courses }) => {
//   console.log(courses); // Add your logging here

//   if (!Array.isArray(courses) || courses.length === 0) {
//     return <p>No courses found.</p>;
//   }

//   return (
//     <Box width="100%" overflow="auto">
//       <StyledTable>
//         <TableHead>
//           <TableRow>
//             <NumberingCell align="left"></NumberingCell>
//             <TableCell align="left">Course Name</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {courses.map((course, index) => (
//             <TableRow key={course.id}>
//               <NumberingCell align="left">{index + 1}</NumberingCell>
//               <TableCell align="left">{course.name}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </StyledTable>
//     </Box>
//   );
// };

// export default Courseoist;


import React from 'react';
import { Box, styled, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

const StyledTable = styled(Table)(({ theme }) => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

const NumberingCell = styled(TableCell)(({ theme }) => ({
  paddingLeft: 0,
  width: '110px', // Set the fixed width to 110 pixels
}));

const CourseNameCell = styled(TableCell)(({ theme }) => ({
  width: '250px', // Set the desired width for the Course Name column
}));

const CategoryCell = styled(TableCell)(({ theme }) => ({
  width: '150px', // Set the desired width for the Category column
}));

const Courseoist = ({ courses }) => {
  console.log(courses); // Add your logging here

  if (!Array.isArray(courses) || courses.length === 0) {
    return <p>No courses found.</p>;
  }

  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <NumberingCell align="left"></NumberingCell>
            <CourseNameCell align="left">Course Name</CourseNameCell>
            <CategoryCell align="left">Category</CategoryCell>
            <TableCell align="left">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((course, index) => (
            <TableRow key={course.id}>
              <NumberingCell align="left">{index + 1}</NumberingCell>
              <CourseNameCell align="left">{course.name}</CourseNameCell>
              <CategoryCell align="left">{course.category}</CategoryCell>
              <TableCell align="left">{course.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Box>
  );
};

export default Courseoist;
