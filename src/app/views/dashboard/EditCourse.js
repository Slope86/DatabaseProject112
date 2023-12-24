import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios.js';
import {
  Button,
  Icon,
  styled,
  Snackbar, // 新增 Snackbar
} from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Span } from "app/components/Typography";
import { Breadcrumb,SimpleCard } from "app/components";
const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));


const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));



const EditCourse = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://140.120.14.106:5000/api/admin/courses');
  //       setData(response.data);
  //     } catch (err) {
  //       setError(err);
  //     }
  //   };

  //   fetchData();
  // }
  // , []); 


  const fetchData = async () => {
    try {
      const response = await axios.get('http://140.120.14.106:5000/api/admin/courses');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 


  // Check if data and data.courses are available before using find
  const selectedItem = data && data.courses ? data.courses.find(item => item.id == id) : null;

  // Set initial state based on selectedItem
  const [newUser, setNewUser] = useState({
    name: selectedItem ? selectedItem.name : '',
    category: selectedItem ? selectedItem.category : '',
    description: selectedItem ? selectedItem.description : '',
    id: id, 
  });



  const [items, setItem] =  useState(selectedItem || {});

  const [updateSuccess, setUpdateSuccess] = useState(false); // 新增狀態



  if (!data || !data.courses) {
    return <div>Loading...</div>; // or any other fallback UI
  }



  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://140.120.14.106:5000/api/admin/courses`, items); // 使用 put 請求
      // Update the item in the local state
      setData(prevData => ({
        ...prevData,
        items: prevData.items?.map(course =>
          course.id == id ? { ...course, ...items } : course
        ) || [],
        name: selectedItem.name,
        category: selectedItem.category,
        description : selectedItem.description,
        id: selectedItem.id,
      }));
      fetchData();
      setUpdateSuccess(true); // 設定更新成功狀態
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  const handleSnackbarClose = () => {
    setUpdateSuccess(false); // 關閉 Snackbar 時重置更新成功狀態
  };

  const handleInputChange = (fieldName, value) => {
    setItem(prevItems => ({
      ...prevItems,
      [fieldName]: value,
      id:id,

    }));
  };

  // const deleteUser = async (id) => {
  //   try {
  //     await axios.delete(`http://140.120.14.106:5000/api/admin/courses/${id}`);
  //     fetchData(); // Refresh the user list after deleting a user
  //   } catch (error) {
  //     console.error('Error deleting user:', error);
  //   }
  // };


  return (


    <div>

      <ValidatorForm onSubmit={handleFormSubmit} onError={() => null}>
        
        {selectedItem && (
          <div>
          
            <SimpleCard title={`Modify ${selectedItem.name}`}>
              <TextField
                type="text"
                name="Coursename"
                id="standard-basic"
                placeholder="Coursename"
                value={items.name || selectedItem.name }
                onChange={(e) => handleInputChange("name", e.target.value)}
                errorMessages={["this field is required"]}
                label="Course name"
                validators={["required"]}
              />
    


              <TextField
                type="text"
                name="Category"
                id="standard-basic"
                placeholder="Category"
                label="Category"
                value={items.category || selectedItem.category}
                onChange={(e) => handleInputChange("category", e.target.value)}
                errorMessages={["this field is required"]}
                validators={["required"]}
              />

              <TextField
                type="text"
                name="description"
                id="standard-basic"
                placeholder="description"
                label="Description"
                value={items.description || selectedItem.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                errorMessages={["this field is required"]}
                validators={["required"]}
              />



              <Button color="primary" variant="contained" type="submit">
                <Icon>send</Icon>
                <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
              </Button>
            </SimpleCard>
          </div>
        )}
      </ValidatorForm>

      {/* Snackbar 用來顯示更新成功的訊息 */}
      <Snackbar
        open={updateSuccess}
        autoHideDuration={5000} // 顯示時間（毫秒）
        onClose={handleSnackbarClose}
        message="Course updated successfully"
      />
    </div>
  );
};

export default EditCourse;
