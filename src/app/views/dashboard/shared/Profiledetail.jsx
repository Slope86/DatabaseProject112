import React, { useState, useEffect, createContext, useContext } from 'react';
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
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';






const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));





const ProfileDetail = () => {
  const navigate = useNavigate();

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
      navigate('/dashboard/default');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };
  const handleSnackbarClose = () => {
    setUpdateSuccess(false); // 關閉 Snackbar 時重置更新成功狀態
  };

  const handleInputChange = (fieldName, value) => {
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
                value={newUser.phone || ""}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                validators={["required", "isNumber"]}
                errorMessages={["This field is required", "Please enter a valid number"]}
                fullWidth
                inputProps={{
                  inputMode: 'numeric', // 设置为 numeric 
                }}
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













