import {
  Avatar,
  Box,
  Card,
  Icon,
  IconButton,
  MenuItem,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material';
import { Paragraph } from 'app/components/Typography';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardHeader = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));

const ProductTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: 'pre',
  '& small': {
    width: 50,
    height: 15,
    borderRadius: 500,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
  },
  '& td': { borderBottom: 'none' },
  '& td:first-of-type': { paddingLeft: '16px !important' },
}));

const Small = styled('small')(({ bgcolor }) => ({
  width: 50,
  height: 15,
  color: '#fff',
  padding: '2px 8px',
  borderRadius: '4px',
  overflow: 'hidden',
  background: bgcolor,
  boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}));

const TopSellingTable = () => {
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;



    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

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

    if (!data || !data.users) {
      return <div>Loading...</div>; // or any other fallback UI
    }


  return (
    <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <CardHeader>
        <Title>User</Title>
        <Select size="small" defaultValue="this_month">
          <MenuItem value="this_month">This Month</MenuItem>
          <MenuItem value="last_month">Last Month</MenuItem>
        </Select>
      </CardHeader>

      <Box overflow="auto">
        <ProductTable>
          <TableHead>
            <TableRow>
              <TableCell sx={{ px: 3 }} colSpan={4}>
                Name
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Email
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                {/*Stock Status*/}
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={1}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.users.map((user) => (
              <TableRow key={user.id} hover>
                <TableCell colSpan={4} align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
                  <Box display="flex" alignItems="center">
                  {user.username} 

                  </Box>
                </TableCell>

                <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
                {user.email} 
                </TableCell>

                <TableCell sx={{ px: 0 }} align="left" colSpan={2}>

                </TableCell>

                <TableCell sx={{ px: 0 }} colSpan={1}>
                  <IconButton>
                    <Icon color="primary">edit</Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ProductTable>
      </Box>
    </Card>
  );
};

const productList = [
  {
    imgUrl: '/assets/images/products/headphone-2.jpg',
    name: 'earphone',
    price: 100,
    available: 15,
  },
  {
    imgUrl: '/assets/images/products/headphone-3.jpg',
    name: 'earphone',
    price: 1500,
    available: 30,
  },
  {
    imgUrl: '/assets/images/products/iphone-2.jpg',
    name: 'iPhone x',
    price: 1900,
    available: 35,
  },
  {
    imgUrl: '/assets/images/products/iphone-1.jpg',
    name: 'iPhone x',
    price: 100,
    available: 0,
  },
  {
    imgUrl: '/assets/images/products/headphone-3.jpg',
    name: 'Head phone',
    price: 1190,
    available: 5,
  },
];

export default TopSellingTable;










// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ApiTestComponent = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://140.120.14.106:5000/users');
//         setData(response.data);
//       } catch (err) {
//         setError(err);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>API Test</h2>
//       {data ? (
//         <div>
//           <h3>Data Received:</h3>
//           <ul>
//             {data.users.map((user) => (
//               <li key={user.id}>{user.username}</li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//       {error && <p>Error: {error.message}</p>}
//     </div>
//   );
// };

// export default ApiTestComponent;
