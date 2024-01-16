import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const SalaryManagement = ({ employees }) => {
  const [salaryStructures, setSalaryStructures] = useState([
    { id: 1, name: 'Standard Salary', basicSalary: 50000, overtimeRate: 0.05, bonusRate: 0.1, deductionRate: 0.02 },
    // Add more sample structures
  ]);

  const [openAddStructureDialog, setOpenAddStructureDialog] = useState(false);
  const [openEditStructureDialog, setOpenEditStructureDialog] = useState(false);
  const [newStructureName, setNewStructureName] = useState('');
  const [newStructureBasicSalary, setNewStructureBasicSalary] = useState(0);
  const [newStructureOvertimeRate, setNewStructureOvertimeRate] = useState(0);
  const [newStructureBonusRate, setNewStructureBonusRate] = useState(0);
  const [newStructureDeductionRate, setNewStructureDeductionRate] = useState(0);
  const [selectedStructureId, setSelectedStructureId] = useState(null);
  const [selectedEmployeeForSalaryCalculation, setSelectedEmployeeForSalaryCalculation] = useState(null);
  const [calculatedSalary, setCalculatedSalary] = useState(null);
  // Employee Management State and Filter Options
  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const [filterOptions, setFilterOptions] = useState({
    employeeName: '',
    department: '',
    phoneNumber: '',
    position: '',
    isSalaryDistributed: true,
  });

  const applyFilters = () => {
    const filtered = employees.filter((employee) => {
      const nameMatches = employee.name?.toLowerCase().includes(filterOptions.employeeName.toLowerCase());
      const departmentMatches = employee.department?.toLowerCase().includes(filterOptions.department.toLowerCase());
      const phoneMatches = employee.phoneNumber?.includes(filterOptions.phoneNumber);
      const positionMatches = employee.position?.toLowerCase().includes(filterOptions.position.toLowerCase());
      const salaryDistributedMatches = filterOptions.isSalaryDistributed
        ? employee.salaryDistributed
        : !employee.salaryDistributed;

      return nameMatches && departmentMatches && phoneMatches && positionMatches && salaryDistributedMatches;
    });

    setFilteredEmployees(filtered);
  };

  const handleFilterChange = (field, value) => {
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      [field]: value,
    }));
  };
  const [selectedEmployee, setSelectedEmployee] = useState(null); // Added state for selected employee
  const [salaryHistoryDialogOpen, setSalaryHistoryDialogOpen] = useState(false);
  
  const openSalaryHistoryDialog = (employee) => {
    setSelectedEmployee(employee);
    setSalaryHistoryDialogOpen(true);
  };
  
  const closeSalaryHistoryDialog = () => {
    setSalaryHistoryDialogOpen(false);
    setSelectedEmployee(null);
  };
  const toggleSalaryDistributionFilter = () => {
    handleFilterChange('isSalaryDistributed', !filterOptions.isSalaryDistributed);
  };

  const handleAddStructure = () => {
    const newStructure = {
      id: salaryStructures.length + 1,
      name: newStructureName,
      basicSalary: newStructureBasicSalary,
      overtimeRate: newStructureOvertimeRate,
      bonusRate: newStructureBonusRate,
      deductionRate: newStructureDeductionRate,
    };

    setSalaryStructures([...salaryStructures, newStructure]);
    setOpenAddStructureDialog(false);
    clearNewStructureFields();
  };

  const handleEditStructure = () => {
    const updatedStructures = salaryStructures.map((structure) =>
      structure.id === selectedStructureId
        ? {
            ...structure,
            name: newStructureName,
            basicSalary: newStructureBasicSalary,
            overtimeRate: newStructureOvertimeRate,
            bonusRate: newStructureBonusRate,
            deductionRate: newStructureDeductionRate,
          }
        : structure
    );

    setSalaryStructures(updatedStructures);
    setOpenEditStructureDialog(false);
    clearNewStructureFields();
  };

  const handleEditButtonClick = (structureId) => {
    const selectedStructure = salaryStructures.find((structure) => structure.id === structureId);
    setSelectedStructureId(structureId);
    setNewStructureName(selectedStructure.name);
    setNewStructureBasicSalary(selectedStructure.basicSalary);
    setNewStructureOvertimeRate(selectedStructure.overtimeRate);
    setNewStructureBonusRate(selectedStructure.bonusRate);
    setNewStructureDeductionRate(selectedStructure.deductionRate);
    setOpenEditStructureDialog(true);
  };

  const handleDeleteStructure = (structureId) => {
    const updatedStructures = salaryStructures.filter((structure) => structure.id !== structureId);
    setSalaryStructures(updatedStructures);
  };

  const clearNewStructureFields = () => {
    setNewStructureName('');
    setNewStructureBasicSalary(0);
    setNewStructureOvertimeRate(0);
    setNewStructureBonusRate(0);
    setNewStructureDeductionRate(0);
  };

  const renderEmployeeManagement = () => (
    <div>
      <Typography variant="h6" gutterBottom>
        Employee Management
      </Typography>
      <TextField
        label="Employee Name"
        value={filterOptions.employeeName}
        onChange={(e) => handleFilterChange('employeeName', e.target.value)}
        margin="normal"
      />
      <TextField
        label="Department"
        value={filterOptions.department}
        onChange={(e) => handleFilterChange('department', e.target.value)}
        margin="normal"
      />
      <TextField
        label="Phone Number"
        value={filterOptions.phoneNumber}
        onChange={(e) => handleFilterChange('phoneNumber', e.target.value)}
        margin="normal"
      />
      <TextField
        label="Position"
        value={filterOptions.position}
        onChange={(e) => handleFilterChange('position', e.target.value)}
        margin="normal"
      />
      <Button onClick={applyFilters} variant="contained" color="primary">
        Apply Filters
      </Button>
      <Button onClick={() => setFilterOptions({})} variant="outlined">
        Clear Filters
      </Button>

      {/* Display filtered employees */}
      <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Salary Distributed</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredEmployees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>
                <Button onClick={() => openSalaryHistoryDialog(employee)}>{employee.name}</Button>
              </TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell>{employee.phoneNumber}</TableCell>
              <TableCell>{employee.position}</TableCell>
              <TableCell>{employee.salaryDistributed ? 'Yes' : 'No'}</TableCell>
              {/* Add additional action buttons as needed */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
  const renderSalaryHistoryDialog = () => (
    <Dialog open={salaryHistoryDialogOpen} onClose={closeSalaryHistoryDialog}>
      <DialogTitle>Salary History for {selectedEmployee ? selectedEmployee.name : ''}</DialogTitle>
      <DialogContent>
        {/* Display salary history here */}
        {/* You can fetch and display the actual salary history data */}
        {selectedEmployee && (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Salary Amount</TableCell>
                  {/* Add additional columns as needed */}
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Map through actual salary history data and display each entry */}
                {/* For now, using placeholder data */}
                <TableRow>
                  <TableCell>2022-01-01</TableCell>
                  <TableCell>$50,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2022-02-01</TableCell>
                  <TableCell>$55,000</TableCell>
                </TableRow>
                {/* Add more rows based on actual data */}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={closeSalaryHistoryDialog}>Close</Button>
      </DialogActions>
    </Dialog>
  );
  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Salary Management
      </Typography>

      {/* Salary Structures */}
      <Typography variant="h6" gutterBottom>
        Salary Structures
      </Typography>
      <Button variant="contained" onClick={() => setOpenAddStructureDialog(true)}>
        Add New Structure
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Basic Salary</TableCell>
              <TableCell>Overtime Rate</TableCell>
              <TableCell>Bonus Rate</TableCell>
              <TableCell>Deduction Rate</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {salaryStructures.map((structure) => (
              <TableRow key={structure.id}>
                <TableCell>{structure.name}</TableCell>
                <TableCell>{structure.basicSalary}</TableCell>
                <TableCell>{structure.overtimeRate}</TableCell>
                <TableCell>{structure.bonusRate}</TableCell>
                <TableCell>{structure.deductionRate}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEditButtonClick(structure.id)} color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteStructure(structure.id)} color="error">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add/Edit Structure Dialog */}
      <Dialog open={openAddStructureDialog || openEditStructureDialog} onClose={() => setOpenAddStructureDialog(false)}>
        <DialogTitle>{openAddStructureDialog ? 'Add New' : 'Edit'} Salary Structure</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={newStructureName}
            onChange={(e) => setNewStructureName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Basic Salary"
            type="number"
            value={newStructureBasicSalary}
            onChange={(e) => setNewStructureBasicSalary(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Overtime Rate"
            type="number"
            value={newStructureOvertimeRate}
            onChange={(e) => setNewStructureOvertimeRate(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Bonus Rate"
            type="number"
            value={newStructureBonusRate}
            onChange={(e) => setNewStructureBonusRate(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Deduction Rate"
            type="number"
            value={newStructureDeductionRate}
            onChange={(e) => setNewStructureDeductionRate(e.target.value)}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddStructureDialog(false)}>Cancel</Button>
          <Button
            onClick={openAddStructureDialog ? handleAddStructure : handleEditStructure}
            variant="contained"
            color="primary"
          >
            {openAddStructureDialog ? 'Add Structure' : 'Save Changes'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Employee Management Section */}
      {renderEmployeeManagement()}
      {renderSalaryHistoryDialog()}
    </Container>
  );
};

export default SalaryManagement;
