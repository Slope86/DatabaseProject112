// import React, { useState } from 'react';
// import SearchForm from './shared/SearchForm';
// import CourseList from './shared/Courseoist';
// import axios from 'axios.js';

// const Search_detail = () => {
//     const [searchResults, setSearchResults] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');

//     const searchCourses = async () => {
//         try {
//             // 使用查询参数将搜索词传递给 API
//             const response = await axios.get(`http://140.120.14.106:5000/api/admin/courses?searchTerm=${searchTerm}`);
//             const data = response.data;

//             // 处理从 API 获取的数据
//             const filteredCourses = data.courses.filter(course =>
//                 course.name.toLowerCase().includes(searchTerm.toLowerCase())
//             );

//             // 设置搜索结果
//             setSearchResults(filteredCourses);
//         } catch (error) {
//             console.error('Error fetching courses:', error);
//         }
//     };

//     const handleSearch = () => {
//         searchCourses();
//     };

//     const handleInputChange = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     return (
//         <div>
//             <h1>Search for Course</h1>
//             {/*<SearchForm onSearch={handleSearch} />*/}
//             <input
//                 type="text"
//                 placeholder="輸入課程名稱"
//                 value={searchTerm}
//                 onChange={handleInputChange}
//             />





//             <button onClick={handleSearch}>Search</button>
//             <CourseList courses={searchResults} />
//         </div>
//     );
// };

// export default Search_detail;



import React, { useState } from 'react';
import SearchForm from './shared/SearchForm';
import Courseoist from './shared/Courseoist'; // Corrected typo in import
import axios from 'axios.js';

// Import Material-UI components
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
// import styled from "@mui/material";
import { TextField as MUITextField ,
styled} from '@mui/material';
import { Breadcrumb, SimpleCard } from "app/components";


const CustomTextField = styled(MUITextField)(({ theme }) => ({
  width: '200px', // Adjust the width as needed
  marginBottom: theme.spacing(2),
}));


const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const Search_detail = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchCourses = async () => {
        try {
            // 使用查询参数将搜索词传递给 API
            const response = await axios.get(`http://140.120.14.106:5000/api/admin/courses?searchTerm=${searchTerm}`);
            const data = response.data;

            // 处理从 API 获取的数据
            const filteredCourses = data.courses.filter(course =>
                course.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            // 设置搜索结果
            setSearchResults(filteredCourses);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const handleSearch = () => {
        searchCourses();
    };





    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

		return (
		    <div>
		    	
		        <h1>Search for Course</h1>
					<CustomTextField
				  type="text"
				  placeholder="Please input course name"
				  value={searchTerm}
				  onChange={handleInputChange}
				/>


		        <div style={{ marginRight: '3px' }}> {/* Add marginRight for space */}
		            <Button color="primary" variant="contained" type="submit" onClick={handleSearch}>
		                <Icon>send</Icon>
		                <Typography sx={{ pl: 1, textTransform: "capitalize" }}>Search</Typography>
		            </Button>
		        </div>

		        <Courseoist courses={searchResults} />
		        		
		    </div>
		);

};

export default Search_detail;
