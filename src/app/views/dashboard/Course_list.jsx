import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
import CourseList from './shared/CourseList';

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



const Course_list = () => {
  const { palette } = useTheme();

  return (
    <Fragment>
      <ContentBox className="CourseList">
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <CourseList />
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default Course_list;
