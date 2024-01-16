// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DashboardLayout from './dashboardlayout/App'
import Attendance from './attendance/Attendance';
import Salary from './salary/Salary';
import Reminder from './reminders/Reminder';
import Dashboard from './dashboard/Dashboard';
import Employee from './employees/Employee';
{/* <TableCell>{employee.attendance ? <span className='text-green-700 font-bold  text-center'><b>PRESENT</b></span>  : <span className=' text-red-700 font-bold'>ABSENT</span>}</TableCell> */}

const employees = [
  { id: 1,  attendance: true, name: 'John Doe' },
  { id: 2,  attendance: true, name: 'Jane Doe' },
  { id: 3,  attendance: false, name: 'Subhransu' },
  { id: 4,  attendance: true, name: 'Rahul' },
  { id: 5,  attendance: false, name: 'Aman' },
  { id: 6,  attendance: true, name: 'Rajesh' },
  // Add more employee data
];
// Static data for the dashboard
const dashboardData = {
  attendance: {
    total: 120,
    recent: [
      { date: '2022-01-10', status: 'Present' },
      { date: '2022-01-09', status: 'Absent' },
      // Add more recent attendance data
    ],
  },
  salary: {
    totalExpenses: 50000,
    employees: [
      { name: 'John Doe', salary: 15000 },
      { name: 'Jane Doe', salary: 20000 },
      // Add more employee data
    ],
  },
  reminders: {
    upcoming: [
      { id: 1, title: 'Meeting at 10 AM', dueDate: '2022-01-15' },
      { id: 2, title: 'Submit Reports', dueDate: '2022-01-20' },
      // Add more upcoming reminders
    ],
    completed: [
      { id: 3, title: 'Review Proposal', completedDate: '2022-01-12' },
      // Add more completed reminders
    ],
  },
};


const App = () => {
  return (
    <DashboardLayout>
    <Router>
      <div>
        {/* Route components */}
        <Routes>
          <Route path="/" element={<Dashboard data={dashboardData}/>} />
          <Route path="/attendance" element={<Attendance employees={employees}/>} />
          <Route path="/salary" element={<Salary employees={employees}/>} />
          <Route path="/reminder" element={<Reminder />} />
          <Route path="/employees" element={<Employee />} />
          <Route path="*" element={<Dashboard data={dashboardData}/>} />
        </Routes>
      </div>
    </Router>
    </DashboardLayout>
  );
};

export default App;
