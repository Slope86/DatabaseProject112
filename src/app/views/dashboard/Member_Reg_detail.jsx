import { Stack, Grid } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import MemRegForm from "./shared/MemRegForm";
// import StepperForm from "./StepperForm";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const Member_Reg_detail = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Home", path: "/dashboard/default" }, { name: "Form" }]} />
      </Box>

      <Stack spacing={6}   sx={{ width: '100%', maxWidth: '800px' }}  > 
        <SimpleCard title="RegisterForm" >
           <MemRegForm />
        </SimpleCard>
      </Stack>


    </Container>
  );
};

export default Member_Reg_detail;
