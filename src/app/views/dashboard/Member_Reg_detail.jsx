// import { Stack, Grid } from "@mui/material";
// import { Box, styled } from "@mui/system";
// import { Breadcrumb, SimpleCard } from "app/components";
// import MemRegForm from "./shared/MemRegForm";

// import CourseEnter from "./shared/CourseEnter";
// // import StepperForm from "./StepperForm";

// const Container = styled("div")(({ theme }) => ({
//   margin: "30px",
//   [theme.breakpoints.down("sm")]: { margin: "16px" },
//   "& .breadcrumb": {
//     marginBottom: "30px",
//     [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
//   },
// }));

// const Member_Reg_detail = () => {
//   return (
//     <Container>
//       <Box className="breadcrumb">
//         <Breadcrumb routeSegments={[{ name: "Home", path: "/dashboard/default" }, { name: "Course Enter" }]} />
//       </Box>

//       <Stack spacing={6}   sx={{ width: '100%', maxWidth: '800px' }}  > 
//         <SimpleCard title="Course Enter" >
//            <CourseEnter />
//         </SimpleCard>
//       </Stack>


//     </Container>
//   );
// };

// export default Member_Reg_detail;



// import { Stack, Grid } from "@mui/material";
// import { Box, styled } from "@mui/system";
// import { Breadcrumb, SimpleCard } from "app/components";
// import MemRegForm from "./shared/MemRegForm";
// import { useState, useEffect } from "react";
// import CourseEnter from "./shared/CourseEnter";

// const Container = styled("div")(({ theme }) => ({
//   margin: "30px",
//   [theme.breakpoints.down("sm")]: { margin: "16px" },
//   "& .breadcrumb": {
//     marginBottom: "30px",
//     [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
//   },
// }));

// const Member_Reg_detail = () => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     // Fetch user data from the API
//     fetch("http://140.120.14.106:5000/api/auth/profile")
//       .then((response) => response.json())
//       .then((data) => setUserData(data.user))
//       .catch((error) => console.error("Error fetching user data:", error));
//   }, []);

//   return (
//     <Container>
//       <Box className="breadcrumb">
//         <Breadcrumb routeSegments={[{ name: "Home", path: "/dashboard/default" }, { name: "Course Enter" }]} />
//       </Box>

//       <Stack spacing={6} sx={{ width: '100%', maxWidth: '800px' }}>
//         <SimpleCard title={`Hi! ${userName}  What course would you like to join?`}>
//           <CourseEnter />
//         </SimpleCard>
//       </Stack>
//     </Container>
//   );
// };

// export default Member_Reg_detail;

import { Stack, Grid } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import MemRegForm from "./shared/MemRegForm";
import { useState, useEffect } from "react";
import CourseEnter from "./shared/CourseEnter";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const Member_Reg_detail = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from the API
    fetch("http://140.120.14.106:5000/api/auth/profile")
      .then((response) => response.json())
      .then((data) => setUserData(data.user))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Home", path: "/dashboard/default" }, { name: "Course Enter" }]} />
      </Box>

      <Stack spacing={6} sx={{ width: '100%', maxWidth: '800px' }}>
        <SimpleCard title={`Hi! What course would you like to join?`}>
          <CourseEnter />
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default Member_Reg_detail;
