import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Container,
} from '@mui/material';
const sampleAttendanceData = [
    { employeeId: 1, date: '2022-01-01', status: true },
    { employeeId: 1, date: '2022-01-03', status: true },
    { employeeId: 1, date: '2022-01-04', status: true },
    { employeeId: 1, date: '2022-01-05', status: true },
    { employeeId: 1, date: '2022-01-06', status: true },
    { employeeId: 1, date: '2022-01-07', status: false },
    { employeeId: 1, date: '2022-01-08', status: true },
    { employeeId: 1, date: '2022-01-09', status: true },
    { employeeId: 1, date: '2022-01-10', status: false },
    { employeeId: 1, date: '2022-01-11', status: true },
    { employeeId: 1, date: '2022-01-12', status: true },
    { employeeId: 1, date: '2022-01-13', status: false },
    { employeeId: 1, date: '2022-01-14', status: true },
    { employeeId: 1, date: '2022-01-15', status: true },
    { employeeId: 2, date: '2022-01-02', status: false },
    { employeeId: 2, date: '2022-01-04', status: false },
    { employeeId: 3, date: '2022-01-01', status: true },
    // Add more sample attendance data
  ];
  
  const AttendanceManagement = ({ employees }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [searchQuery, setSearchQuery] = useState('');
    const [sortType, setSortType] = useState('all'); // 'all', 'present', 'absent'
    const [attendanceData, setAttendanceData] = useState(sampleAttendanceData);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [filterStartDate, setFilterStartDate] = useState('');
    const [filterEndDate, setFilterEndDate] = useState('');
    const [filterStatus, setFilterStatus] = useState('all'); // 'all', 'present', 'absent'
    const [attendanceSheet, setAttendanceSheet] = useState({}); // Initialize with an empty object
  
    // Function to update attendance status
    const updateAttendanceStatus = (employeeId, status) => {
      // Implement the logic to update attendance in the state
      // This is a placeholder and should be replaced with your actual logic
      const updatedAttendance = [...attendanceData];
      const existingEntryIndex = updatedAttendance.findIndex(
        (entry) => entry.employeeId === employeeId && entry.date === selectedDate.toISOString().split('T')[0]
      );
  
      if (existingEntryIndex !== -1) {
        updatedAttendance[existingEntryIndex].status = status;
      } else {
        updatedAttendance.push({
          employeeId,
          date: selectedDate.toISOString().split('T')[0],
          status,
        });
      }
  
      setAttendanceData(updatedAttendance);
    };
  
    // Function to handle employee name click
    const handleEmployeeClick = (employeeId) => {
      setSelectedEmployeeId(employeeId);
      setOpenDialog(true);
    };
  
    // Function to filter and sort employees
    const filteredAndSortedEmployees = employees
      .filter((employee) => employee.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .filter((employee) => {
        if (sortType === 'all') return true;
        const attendanceEntry = attendanceData.find(
          (entry) => entry.employeeId === employee.id && entry.date === selectedDate.toISOString().split('T')[0]
        );
        return attendanceEntry && attendanceEntry.status === sortType;
      });
  
    // Function to filter attendance history based on date and status
    const filterAttendanceHistory = () => {
      // Implement the logic to filter attendance history based on the selected date range and status
      // This is a placeholder and should be replaced with your actual logic
      return attendanceData
        .filter((entry) => entry.employeeId === selectedEmployeeId)
        .filter((entry) => {
          const entryDate = new Date(entry.date);
          const filterStartDateObj = filterStartDate ? new Date(filterStartDate) : null;
          const filterEndDateObj = filterEndDate ? new Date(filterEndDate) : null;
  
          // Check if the entry date is within the selected date range
          const isDateInRange =
            (!filterStartDateObj || entryDate >= filterStartDateObj) &&
            (!filterEndDateObj || entryDate <= filterEndDateObj);
  
          // Check if the entry status matches the selected filter status
          const isStatusMatch = filterStatus === 'all' || entry.status === filterStatus;
  
          return isDateInRange && isStatusMatch;
        });
    };
  
    // Function to create the attendance sheet
    const createAttendanceSheet = () => {
      // Implement the logic to create the attendance sheet
      // This is a placeholder and should be replaced with your actual logic
  
      const attendanceMap = {};
      attendanceData.forEach((entry) => {
        const date = new Date(entry.date);
        const formattedDate = date.toISOString().split('T')[0];
  
        if (!attendanceMap[entry.employeeId]) {
          attendanceMap[entry.employeeId] = {};
        }
  
        attendanceMap[entry.employeeId][formattedDate] = entry.status;
      });
  
      setAttendanceSheet(attendanceMap);
    };
  
    useEffect(() => {
      // Update the attendance sheet whenever attendanceData changes
      createAttendanceSheet();
    }, [attendanceData]);

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Attendance Management
      </Typography>

      {/* Search Filter */}
      <TextField label="Search by Employee Name" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

      {/* Sort Buttons */}
      <Button onClick={() => setSortType('all')} variant={sortType === 'all' ? 'contained' : 'outlined'}>
        All
      </Button>
      <Button onClick={() => setSortType('present')} variant={sortType === 'present' ? 'contained' : 'outlined'}>
        Present
      </Button>
      <Button onClick={() => setSortType('absent')} variant={sortType === 'absent' ? 'contained' : 'outlined'}>
        Absent
      </Button>

      {/* Date Picker */}
      <TextField
        type="date"
        label="Select Date"
        value={selectedDate.toISOString().split('T')[0]}
        onChange={(e) => setSelectedDate(new Date(e.target.value))}
        InputLabelProps={{
          shrink: true,
        }}
      />

      {/* Employee Attendance Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Attendance Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAndSortedEmployees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.id}</TableCell>
                <TableCell
                  onClick={() => handleEmployeeClick(employee.id)}
                  style={{ cursor: 'pointer', textDecoration: 'underline', color: 'blue' }}
                >
                  {employee.name}
                </TableCell>
                <TableCell>{employee.attendance ? 'Present' : 'Absent'}</TableCell>
                <TableCell>
                  <Button variant="contained" onClick={() => updateAttendanceStatus(employee.id, true)}>
                    Present
                  </Button>
                  <Button variant="contained" onClick={() => updateAttendanceStatus(employee.id, false)}>
                    Absent
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for Single Employee Attendance Records */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="lg" fullWidth>
        <DialogTitle>Attendance Records for Employee</DialogTitle>
        <DialogContent>
          <Typography variant="h6">Employee ID: {selectedEmployeeId}</Typography>
          <Typography variant="h6">Employee Name: {employees.find((employee) => employee.id === selectedEmployeeId)?.name}</Typography>

          {/* Filter Section */}
          <Box marginTop={2}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="date"
                  label="Start Date"
                  value={filterStartDate}
                  onChange={(e) => setFilterStartDate(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="date"
                  label="End Date"
                  value={filterEndDate}
                  onChange={(e) => setFilterEndDate(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="true">Present</MenuItem>
                    <MenuItem value="false">Absent</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>

          {/* Attendance History Table (Sheet) */}
          <Box marginTop={2}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Attendance Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* Display attendance sheet for the selected employee */}
                  {Object.entries(attendanceSheet[selectedEmployeeId] || {}).map(([date, status]) => (
                    <TableRow key={date}>
                      <TableCell>{date}</TableCell>
                      <TableCell style={{ color: status ? 'green' : 'red' }}>{status ? 'Present' : 'Absent'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AttendanceManagement;
