import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
import TopSellingTable from './shared/TopSellingTable';

const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginRight: '.5rem',
  textTransform: 'capitalize',
}));

const SubTitle = styled('span')(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
}));



const Userlist_detail = () => {
  const { palette } = useTheme();

  return (
    <Fragment>
      <ContentBox className="Userlist_detail">
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <TopSellingTable />
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default Userlist_detail;
