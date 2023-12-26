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
} from "@mui/material";
import { Span } from "app/components/Typography";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));



// import axios from 'axios';
const MemRegForm = () => {
  const [students, setUsers] = useState([]);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    address: '',
    phone: '',
  });

  // Function to fetch users from the API
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://140.120.14.106:5000/api/admin/students');
      setUsers(response.students);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

    useEffect(() => {
      const fetchData = async () => {
        try {
          // const response = await axios.get('http://140.120.14.106:5000/users');
          const response = await axios.get('http://140.120.14.106:5000/api/admin/students');
          setData(response.data);
        } catch (err) {
          setError(err);
        }
      };

      fetchData();
    }, []);




    if (!data || !data.students) {
      return <div>Loading...</div>; // or any other fallback UI
    }


  // Function to handle deletion of a user
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://140.120.14.106:5000/api/admin/students/${userId}`);
      fetchUsers(); // Refresh the user list after deleting a user
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://140.120.14.106:5000/api/admin/students', newUser);
      fetchUsers(); // Refresh the user list after creating a new user
      setNewUser({
        username: '',
        email: '',
        address: '',
        phone: '',
      });
      fetchUsers();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };


//   return (
//     <div>
//       <h1>User Management</h1>

//       <h2>Users:</h2>
//       <ul>
//         {data.students.map((user) => (
//           <li key={user.id}>
//             {user.username} - {user.email} - {user.address} - {user.phone} {}
//             <button onClick={() => deleteUser(user.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>

//       <h2>Add New User:</h2>
//       <form onSubmit={handleFormSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={newUser.username}
//           onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
//         />
//         <br />
//         <input
//           type="email"
//           placeholder="Email"
//           value={newUser.email}
//           onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
//         />
//         <br />
//         <input
//           type="address"
//           placeholder="Address"
//           value={newUser.address}
//           onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
//         />
//         <input
//           type="phone"
//           placeholder="Phone"
//           value={newUser.phone}
//           onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
//         />                
//         <button type="submit">Add User</button>
//       </form>
//     </div>
//   );
// };
    return (
    <div>
      <ValidatorForm onSubmit={handleFormSubmit} onError={() => null}>
        <Grid container spacing={12}   >
          <Grid item lg={9} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              type="text"
              name="username"
              id="standard-basic"
              placeholder="Username"
              value={newUser.username}
              onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
              errorMessages={["this field is required"]}
              label="Username (Min length 4, Max length 20)"
              validators={["required", "minStringLength: 4", "maxStringLength: 20"]}
            />

            <TextField
              type="text"
              name="fullname"
              label="Fullname"
              placeholder="Fullname"
              // onChange={handleChange}
              value={newUser.fullname}
              onChange={(e) => setNewUser({ ...newUser, fullname: e.target.value })}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />

            <TextField
              type="email"
              name="email"
              label="Email"
              placeholder="Email"              
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              validators={["required", "isEmail"]}
              errorMessages={["this field is required", "email is not valid"]}
            />

{/*            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={date}
                onChange={handleDateChange}
                renderInput={(props) => (
                  <TextField
                    {...props}
                    label="Birth Date"
                    id="mui-pickers-date"
                    sx={{ mb: 2, width: "100%" }}
                  />
                )}
              />
            </LocalizationProvider>*/}

             <TextField
              type="text"
              name="address"
              placeholder="Address" 
              value={newUser.address}
              onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
              errorMessages={["this field is required"]}
              label="Address"
              validators={["required"]}
            />
          {/*</Grid>

          {/*<Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>*/}
          <TextField
            type="text"
            name="phone"
            placeholder="Phone"
            value={newUser.phone}
            label="Mobile Number"
            onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
            validators={["required", "isNumber"]}
            errorMessages={["This field is required", "Please enter a valid number"]}
            InputProps={{
              inputProps: {
                inputMode: "numeric",
              },
            }}
          />
            <TextField
              name="password"
              type="password"
              label="Password"
              value={newUser.password}
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
 {/*           <TextField
              type="password"
              name="confirmPassword"
              onChange={(e) => setNewUser({ ...newUser, confirmPassword: e.target.value })}
              label="Confirm Password"
              value={newUser.confirmPassword}
              validators={["required", "isPasswordMatch"]}
              errorMessages={["this field is required", "password didn't match"]}
            />*/}
{/*            <RadioGroup
              row
              name="gender"
              sx={{ mb: 2 }}
              value={gender || ""}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Male"
                label="Male"
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />

              <FormControlLabel
                value="Female"
                label="Female"
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />

              <FormControlLabel
                value="Others"
                label="Others"
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />
            </RadioGroup>

            <FormControlLabel
              control={<Checkbox />}
              label="I have read and agree to the terms of service."
            />*/}
          </Grid>
        </Grid>

        <Button color="primary" variant="contained" type="submit">
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default MemRegForm;
