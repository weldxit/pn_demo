import React, { useState } from 'react';

const EmployeeList = ({ employees }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    const filtered = employees.filter((employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEmployees(filtered);
  };

  const handleEmployeeClick = (employeeId) => {
    // Use react-router to navigate to details page
    window.history.pushState({}, '', `/employees/${employeeId}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Employee List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search by name"
          className="bg-gray-100 px-4 py-2 rounded-lg mr-4"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Department</th>
            <th className="px-4 py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr
              key={employee.id}
              className="cursor-pointer hover:bg-gray-100"
              onClick={() => handleEmployeeClick(employee.id)}
            >
              <td className="px-4 py-2">{employee.name}</td>
              <td className="px-4 py-2">{employee.department}</td>
              <td className="px-4 py-2">{employee.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
