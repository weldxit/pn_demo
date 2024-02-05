import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const Dashboard = ({ data }) => {
  const { attendance, salary, reminders } = data;

  return (
    <Grid container spacing={3} className='h-screen'>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Attendance</Typography>
            <Typography variant="h4">{attendance.total}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Salary Expenses</Typography>
            <Typography variant="h4">${salary.totalExpenses}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Upcoming Reminders</Typography>
            <Typography variant="h4">{reminders.upcoming.length}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
