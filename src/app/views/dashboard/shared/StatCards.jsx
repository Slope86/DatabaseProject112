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
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          // const response = await axios.get('http://140.120.14.106:5000/users');
          const response = await axios.get('http://140.120.14.106:5000/api/admin/teachers');
          setData(response.data);
        } catch (err) {
          setError(err);
        }
      };

      fetchData();
    }, []);

    if (!data || !data.teachers_count) {
      return <div>Loading...</div>; // or any other fallback UI
    }

  const cardList = [

   { name: 'UserList', amount: 0, path: "/Userlist/default", icon: 'group' },
    { name: 'This week Sales',path:"/Userlist/default", amount: '$80,500', icon: 'attach_money' },
    { name: 'Inventory Status',path:"/Userlist/default", amount: '8.5% Stock Surplus', icon: 'store' },
    { name: 'Orders to deliver',path:"/Userlist/default", amount: '305 Orders', icon: 'shopping_cart' },
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

