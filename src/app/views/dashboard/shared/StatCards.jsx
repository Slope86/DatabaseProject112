import { Box, Card, Grid, Icon, IconButton, styled, Tooltip } from '@mui/material';
import { Small } from 'app/components/Typography';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios.js';


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

const StatCards = () => {

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
      setData2(response2.data);  // Fix: Use response2.data instead of response2.data2

     const response3 = await axios.get('http://140.120.14.106:5000/api/admin/courses');
      setData3(response3.data); 

    } catch (err) {
      setError(err);
      setError2(err);  // Fix: Handle errors for the second request
    }
  };

  fetchData();
}, []);

if (!data || !data.students_count || !data2 || !data2.teachers_count || !data3 || !data3.courses_count ) {
  return <div>Loading...</div>; // or any other fallback UI
}

  // const fetchUsers = async () => {
  //   try {
  //     const response2 = await axios.get('http://140.120.14.106:5000/api/admin/students');
  //     setData2(response2.data2);
  //   } catch (error) {
  //     console.error('Error fetching students:', error);
  //   }
  // };

  // if (!data2 || !data2.students_count) {
  //     return <div>Loading...</div>; // or any other fallback UI
  //   }

  const cardList = [

   { name: 'Student', amount:data.students_count , path: "/Userlist/default", icon: 'group' },
    { name: 'Teacher',path:"/Teacher/default", amount: data2.teachers_count, icon: 'group' },

    { name: 'Course',path:"/Course/default", amount: data3.courses_count, icon: 'class' },
  ];

  return (
    <Grid container spacing={3} sx={{ mb: '24px' }}>
      {cardList.map((item, index, path) => (
        <Grid item xs={12} md={6} key={index}>
          <StyledCard elevation={6}>
            <ContentBox>
              <Icon className="icon">{item.icon}</Icon>
              <Box ml="12px">
                <Small>{item.name}</Small>
                <Heading>{item.amount}</Heading>
              </Box>
            </ContentBox>

            <Tooltip title="View Details" placement="top">
              {/* 使用 Link 將組件連接到指定的路徑 */}
              <Link to={item.path}>
                <IconButton>
                  <Icon>arrow_right_alt</Icon>
                </IconButton>
              </Link>
            </Tooltip>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatCards;














// import React, { useState } from 'react';

// const MyForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     // 其他表單字段
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // 在這裡呼叫後端API將表單數據送到資料庫
//     sendDataToDatabase(formData);
//   };

//   const sendDataToDatabase = async (data) => {
//     try {
//       // 使用fetch或axios等工具向後端發送POST請求
//       const response = await fetch('http://140.120.14.106:5000api/admin/teachers', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       // 處理後端的回應，可能需要更新UI或顯示成功訊息
//       const result = await response.json();
//       console.log(result);
//     } catch (error) {
//       console.error('Error sending data to database:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" name="name" value={formData.name} onChange={handleChange} />
//       </label>
//       <label>
//         Email:
//         <input type="email" name="email" value={formData.email} onChange={handleChange} />
//       </label>
//       {/* 其他表單字段 */}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default MyForm;
