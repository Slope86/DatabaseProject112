import React, { useState, useEffect } from 'react';
import axios from 'axios.js';
import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Radio,
  RadioGroup,
  styled,
  Snackbar,
} from "@mui/material";
import { Span } from "app/components/Typography";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));






const ProfileDetail = () => {
  const [data, setData] = useState(null);
  const [newUser, setNewUser] = useState({
    // username: '',
    // email: '',
    // address: '',
    // phone: '',
    // gender: '',
  });
 const [updateSuccess, setUpdateSuccess] = useState(false); 

    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://140.120.14.106:5000/api/auth/profile');
        setData(response.data);
        setNewUser(response.data.user);  // Set initial form values
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  useEffect(() => {
    fetchUserData();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch('http://140.120.14.106:5000/api/admin/users', newUser);
      const updatedData = await axios.get('http://140.120.14.106:5000/api/auth/profile');
      setData(updatedData.data);
      setNewUser(updatedData.data.user);  // 更新 newUserData 狀態
      setUpdateSuccess(true);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };
  const handleSnackbarClose = () => {
    setUpdateSuccess(false); // 關閉 Snackbar 時重置更新成功狀態
  };

 const handleInputChange = (fieldName, value) => {
  console.log([fieldName, value]);
  setNewUser((prevUser) => ({
    ...prevUser,
    [fieldName]: value,
  }));
};

    if (!data || !data.user) {
    return <div>Loading...</div>; // or any other fallback UI
  }

  return (
    <div>
      <ValidatorForm onSubmit={handleFormSubmit} onError={() => null}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type="text"
              name="username"
              placeholder="Username"
              label="Username"
              value={newUser.username||newUser.name || "" }
              onChange={(e) => handleInputChange('username', e.target.value)}
              validators={['required', 'minStringLength:4', 'maxStringLength:20']}
              errorMessages={['This field is required', 'Min length: 4', 'Max length: 20']}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="text"
              name="fullname"
              placeholder="Fullname"
              label="Fullname"              
              value={newUser.fullname || ""}
              onChange={(e) => handleInputChange('fullname', e.target.value)}
              validators={['required']}
              errorMessages={['This field is required']}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="email"
              name="email"
              placeholder="Email"
              label="Email"
              value={newUser.email || ""}
              onChange={(e) => handleInputChange('email', e.target.value)}
              validators={['required', 'isEmail']}
              errorMessages={['This field is required', 'Email is not valid']}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="text"
              name="address"
              placeholder="Address"
              label="Address"
              value={newUser.address ||""}
              onChange={(e) => handleInputChange('address', e.target.value)}
              validators={['required']}
              errorMessages={['This field is required']}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="text"
              name="phone"
              placeholder="Phone"
              label="Mobile Number"
              value={newUser.phone ||""}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              validators={['required']}
              errorMessages={['This field is required']}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="text"
              name="gender"
              placeholder="Gender"
              label="Gender"
              value={newUser.gender ||""}
              onChange={(e) => handleInputChange('gender', e.target.value)}
              validators={['required']}
              errorMessages={['This field is required']}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" variant="contained" type="submit">
              <Icon>send</Icon>
              <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Submit</Span>
            </Button>
          </Grid>
        </Grid>
      </ValidatorForm>
            <Snackbar
        open={updateSuccess}
        autoHideDuration={5000} // 顯示時間（毫秒）
        onClose={handleSnackbarClose}
        message="Updated successfully"
      />
    </div>
  );
};

export default ProfileDetail;






















// // import axios from 'axios';
// const Profiledetail = () => {
//   const [students, setUsers] = useState([]);
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [newUser, setNewUser] = useState({
//     username: '',
//     email: '',
//     address: '',
//     phone: '',
//   });
//   const [items, setItem] = useState(null);
//   // Function to fetch users from the API
//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://140.120.14.106:5000/api/auth/profile');
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//     useEffect(() => {
//       fetchUsers();
//     }, []);


//   // const selectedItem = data && data.courses ? data.courses.find(item => item.id == id) : null;

//   // Set initial state based on selectedItem
//   // const [newUser, setNewUser] = useState({

//   // });



//   // const [items, setItem] =  useState(selectedItem || {});

//   const [updateSuccess, setUpdateSuccess] = useState(false); // 新增狀態

//     if (!data || !data.user) {
//       return <div>Loading...</div>; // or any other fallback UI
//     }



//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.patch(`http://140.120.14.106:5000/api/admin/users`, items); // 使用 put 請求
//       // Update the item in the local state
//       setData(prevData => ({
//         ...prevData,
//       }
//       ));
//       // fetchData();
//       setUpdateSuccess(true); // 設定更新成功狀態
//     } catch (error) {
//       console.error('Error updating course:', error);
//     }
//   };

//   const handleSnackbarClose = () => {
//     setUpdateSuccess(false); // 關閉 Snackbar 時重置更新成功狀態
//   };

//   const handleInputChange = (fieldName, value) => {
//     setItem(prevItems => ({
//       ...prevItems,
//       [fieldName]: value,
//       // id:id,

//     }));
//   };


//     return (
//     <div>
//       <ValidatorForm onSubmit={handleFormSubmit} onError={() => null}>
//         <Grid container spacing={12}   >
//           <Grid item lg={9} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
//             <TextField
//               type="text"
//               name="username"
//               id="standard-basic"
//               placeholder="Username"
//               value={data.user.name}
//               onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
//               errorMessages={["this field is required"]}
//               label="Username (Min length 4, Max length 20)"
//               validators={["required", "minStringLength: 4", "maxStringLength: 20"]}
//             />

//             <TextField
//               type="text"
//               name="fullname"
//               label="Fullname"
//               placeholder="Fullname"
//               // onChange={handleChange}
//               value={data.user.fullname}
//               onChange={(e) => setNewUser({ ...newUser, fullname: e.target.value })}
//               validators={["required"]}
//               errorMessages={["this field is required"]}
//             />

//             <TextField
//               type="email"
//               name="email"
//               label="Email"
//               placeholder="Email"              
//               value={data.user.email}
//               onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
//               validators={["required", "isEmail"]}
//               errorMessages={["this field is required", "email is not valid"]}
//             />
//              <TextField
//               type="text"
//               name="address"
//               placeholder="Address" 
//               value={data.user.address}
//               onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
//               errorMessages={["this field is required"]}
//               label="Address"
//               validators={["required"]}
//             />
//           {/*</Grid>*/}

//           {/*<Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>*/}
//             <TextField
//               type="text"
//               name="phone"
//               placeholder="Phone" 
//               value={data.user.phone}
//               label="Mobile Nubmer"
//               onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
//               validators={["required"]}
//               errorMessages={["this field is required"]}
//             />
//             <TextField
//               name="gender"
//               type="text"
//               label="gender"
//               value={data.user.gender}
//               onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}
//               validators={["required"]}
//               errorMessages={["this field is required"]}
//             />
//           {/*</Grid>*/}
//         </Grid>
//         </Grid>

//         <Button color="primary" variant="contained" type="submit">
//           <Icon>send</Icon>
//           <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
//         </Button>
//       </ValidatorForm>
//     </div>
//   );
// };

// export default Profiledetail;
