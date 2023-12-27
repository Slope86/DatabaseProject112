// // import React, { useState, useEffect } from 'react';
// // import { Autocomplete, TextField, styled } from '@mui/material';
// // import axios from 'axios.js';
// // import { Button, Icon } from "@mui/material";
// // import { Span } from "app/components/Typography";

// // const AutoComplete = styled(Autocomplete)(() => ({
// //   width: 300,
// //   marginBottom: '16px',
// // }));

// // const CourseEnter = () => {
// //   const [courses, setCourses] = useState([]);
// //   const [category, setCategory] = useState('');
// //   const [courseName, setCourseName] = useState('');
// //   const [selectedCourseId, setSelectedCourseId] = useState(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get('http://140.120.14.106:5000/api/admin/courses');
// //         setCourses(response.data.courses);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   const filteredCourses = Array.isArray(courses) && courses.length > 0
// //     ? courses.filter(course => course.category === category)
// //     : [];

// //   const handleCategoryChange = (e) => {
// //     const newCategory = e.target.value;
// //     if (newCategory !== category) {
// //       setCategory(newCategory);
// //       setCourseName('');
// //       setSelectedCourseId(null);
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await axios.post('http://140.120.14.106:5000/api/student/enter_course', {
// //         category,
// //         courseName,
// //       });

// //       // 更新選擇的課程ID
// //       setSelectedCourseId(response.data.courseId);

// //       console.log('Submit successful:', response.data);
// //     } catch (error) {
// //       console.error('Error submitting data:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <form onSubmit={handleSubmit}>
// //         <label>
// //           <AutoComplete
// //             options={courses}
// //             getOptionLabel={(option) => option.category}
// //             onChange={(e, newValue) => {
// //               setCategory(newValue?.category || '');
// //               setCourseName('');
// //               setSelectedCourseId(null);
// //             }}
// //             renderInput={(params) => (
// //               <TextField {...params} label="Category" variant="outlined" fullWidth />
// //             )}
// //           />
// //         </label>

// //         <label>
// //           <AutoComplete
// //             options={filteredCourses}
// //             getOptionLabel={(option) => option.name}
// //             onChange={(e, newValue) => {
// //               setCourseName(newValue?.name || '');
// //               setSelectedCourseId(newValue?.id || null);
// //             }}
// //             renderInput={(params) => (
// //               <TextField {...params} label="Course Name" variant="outlined" fullWidth />
// //             )}
// //           />
// //         </label>

// //         <Button color="primary" variant="contained" type="submit">
// //           <Icon>send</Icon>
// //           <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
// //         </Button>
// //       </form>

// //       {/* 顯示選定的課程ID */}
// //       {selectedCourseId && <p>已選擇的課程ID：{selectedCourseId}</p>}
// //     </div>
// //   );
// // };

// // export default CourseEnter;


import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField, styled } from '@mui/material';
import axios from 'axios.js';
import { Button, Icon } from "@mui/material";
import { Span } from "app/components/Typography";
import {
  // Button,
  Checkbox,
  FormControlLabel,
  Grid,
  // Icon,
  Radio,
  RadioGroup,
  // styled,
  Snackbar,
} from "@mui/material";
const AutoComplete = styled(Autocomplete)(() => ({
  width: 300,
  marginBottom: '16px',
}));

const CourseEnter = () => {
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState('');
  const [courseName, setCourseName] = useState('');
  const [selectedCourseId, setSelectedCourseId] = useState(null);
 const [updateSuccess, setUpdateSuccess] = useState(false); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://140.120.14.106:5000/api/admin/courses');
        setCourses(response.data.courses);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredCourses = Array.isArray(courses) && courses.length > 0
    ? courses.filter(course => course.category === category)
    : [];

  // const handleCategoryChange = (e) => {
  //   const newCategory = e.target.value;
  //   if (newCategory !== category) {
  //     setCategory(newCategory);
  //     setCourseName('');
  //     setSelectedCourseId(null);
  //   }
  //   setUpdateSuccess(true);
  // };

const handleCategoryChange = (e) => {
  const newCategory = e.target.value;
  if (newCategory !== category) {
    setCategory(newCategory);
    setCourseName('');
    setSelectedCourseId(null);
    // Do not set updateSuccess here
  }
};

  const handleSnackbarClose = () => {
    setUpdateSuccess(false); // 關閉 Snackbar 時重置更新成功狀態
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post('http://140.120.14.106:5000/api/student/enter_course', {
  //       category: category, // 修改这里为categoryId
  //       course_name: courseName, // 修改这里为courseId
  //     });

  //     // 更新选定的课程ID
  //     setSelectedCourseId(response.data.courseId);
  //     setUpdateSuccess(true);
  //     console.log('Submit successful:', response.data);
  //   } catch (error) {
  //     console.error('Error submitting data:', error);
  //   }
  // };


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://140.120.14.106:5000/api/student/enter_course', {
      category: category,
      course_name: courseName,
    });

    // 更新选定的课程ID
    setSelectedCourseId(response.data.courseId);
    setUpdateSuccess(true);
    console.log('Submit successful:', response.data);
  } catch (error) {
    console.error('Error submitting data:', error);
    setUpdateSuccess(false); // 设置为失败状态
  }
};


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <AutoComplete
            options={courses}
            getOptionLabel={(option) => option.category}
            onChange={(e, newValue) => {
              setCategory(newValue?.category || '');
              setCourseName('');
              setSelectedCourseId(null);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Category" variant="outlined" fullWidth />
            )}
          />
        </label>

        <label>
          <AutoComplete
            options={filteredCourses}
            getOptionLabel={(option) => option.name}
            onChange={(e, newValue) => {
              setCourseName(newValue?.name || '');
              setSelectedCourseId(newValue?.id || null);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Course Name" variant="outlined" fullWidth />
            )}
          />
        </label>

        <Button color="primary" variant="contained" type="submit">
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
        </Button>
      </form>
       <Snackbar
        open={updateSuccess}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        message={updateSuccess ? 'Updated successfully' : 'Failed to update'}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />

      {/* 显示选定的课程ID */}
      {/*{selectedCourseId && <p>已选定的课程ID：{selectedCourseId}</p>}*/}
    </div>
  );
};

export default CourseEnter;


// import React, { useState, useEffect } from 'react';
// import { Autocomplete, TextField, styled, Button, Snackbar } from '@mui/material';
// import axios from 'axios.js';
// // import { Icon, Span } from "app/components/Typography";
// import {
//   // Button,
//   Checkbox,
//   FormControlLabel,
//   Grid,
//   Icon,
//   Radio,
//   RadioGroup,
//   // styled,
//   // Snackbar,
// } from "@mui/material";
// import { Span } from "app/components/Typography";

// const AutoComplete = styled(Autocomplete)(() => ({
//   width: 300,
//   marginBottom: '16px',
// }));

// const CourseEnter = () => {
//   const [courses, setCourses] = useState([]);
//   const [category, setCategory] = useState('');
//   const [courseName, setCourseName] = useState('');
//   const [selectedCourseId, setSelectedCourseId] = useState(null);
//   const [updateSuccess, setUpdateSuccess] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://140.120.14.106:5000/api/admin/courses');
//         setCourses(response.data.courses);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const filteredCourses = Array.isArray(courses) && courses.length > 0
//     ? courses.filter(course => course.category === category)
//     : [];

//   const handleCategoryChange = (e) => {
//     const newCategory = e.target.value;
//     if (newCategory !== category) {
//       setCategory(newCategory);
//       setCourseName('');
//       setSelectedCourseId(null);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://140.120.14.106:5000/api/student/enter_course', {
//         category: category,
//         course_name: courseName,
//       });

//       // 更新选定的课程ID
//       setSelectedCourseId(response.data.courseId);

//       // 顯示成功 Snackbar
//       setUpdateSuccess(true);

//       console.log('Submit successful:', response.data);
//     } catch (error) {
//       console.error('Error submitting data:', error);
//     }
//   };

//   const handleSnackbarClose = () => {
//     // 關閉 Snackbar
//     setUpdateSuccess(false);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <AutoComplete
//             options={courses}
//             getOptionLabel={(option) => option.category}
//             onChange={(e, newValue) => {
//               setCategory(newValue?.category || '');
//               setCourseName('');
//               setSelectedCourseId(null);
//             }}
//             renderInput={(params) => (
//               <TextField {...params} label="Category" variant="outlined" fullWidth />
//             )}
//           />
//         </label>

//         <label>
//           <AutoComplete
//             options={filteredCourses}
//             getOptionLabel={(option) => option.name}
//             onChange={(e, newValue) => {
//               setCourseName(newValue?.name || '');
//               setSelectedCourseId(newValue?.id || null);
//             }}
//             renderInput={(params) => (
//               <TextField {...params} label="Course Name" variant="outlined" fullWidth />
//             )}
//           />
//         </label>

//         <Button color="primary" variant="contained" type="submit">
//           <Icon>send</Icon>
//           <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
//         </Button>
//       </form>

//       {/* 显示选定的课程ID */}
//       {selectedCourseId && <p>已选定的课程ID：{selectedCourseId}</p>}

//       {/* 成功 Snackbar */}
//       <Snackbar
//         open={updateSuccess}
//         autoHideDuration={5000} // 顯示時間（毫秒）
//         onClose={handleSnackbarClose}
//         message="Updated successfully"
//       />
//     </div>
//   );
// };

// export default CourseEnter;
