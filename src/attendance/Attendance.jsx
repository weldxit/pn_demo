import React, { useState } from 'react';
import './attendance.css'
import { Checkbox } from "@material-tailwind/react";

const Attendance = () => {
  const [employees, setEmployees] = useState([
    { id: 1, status:true, name: 'John Doe', position: 'Software Engineer', department: 'Engineering' },
    { id: 2, status:true, name: 'Jane Smith', position: 'UX Designer', department: 'Design' },
    { id: 3, status:false, name: 'Alice Johnson', position: 'Marketing Specialist', department: 'Marketing' },
    { id: 4, status:true, name: 'Bob Williams', position: 'Sales Manager', department: 'Sales' },
    { id: 1, status:true, name: 'John Doe', position: 'Software Engineer', department: 'Engineering' },
    { id: 2, status:true, name: 'Jane Smith', position: 'UX Designer', department: 'Design' },
    { id: 3, status:true, name: 'Alice Johnson', position: 'Marketing Specialist', department: 'Marketing' },
    { id: 4, status:false, name: 'Bob Williams', position: 'Sales Manager', department: 'Sales' },
    { id: 1, status:true, name: 'John Doe', position: 'Software Engineer', department: 'Engineering' },
    { id: 2, status:true, name: 'Jane Smith', position: 'UX Designer', department: 'Design' },
    { id: 3, status:false, name: 'Alice Johnson', position: 'Marketing Specialist', department: 'Marketing' },
    { id: 4, status:true, name: 'Bob Williams', position: 'Sales Manager', department: 'Sales' },
    { id: 1, status:true, name: 'John Doe', position: 'Software Engineer', department: 'Engineering' },
    { id: 2, status:true, name: 'Jane Smith', position: 'UX Designer', department: 'Design' },
    { id: 3, status:false, name: 'Alice Johnson', position: 'Marketing Specialist', department: 'Marketing' },
    { id: 4, status:true, name: 'Bob Williams', position: 'Sales Manager', department: 'Sales' },
    { id: 1, status:true, name: 'John Doe', position: 'Software Engineer', department: 'Engineering' },
    { id: 2, status:true, name: 'Jane Smith', position: 'UX Designer', department: 'Design' },
    { id: 3, status:false, name: 'Alice Johnson', position: 'Marketing Specialist', department: 'Marketing' },
    { id: 4, status:true, name: 'Bob Williams', position: 'Sales Manager', department: 'Sales' },
    { id: 1, status:true, name: 'John Doe', position: 'Software Engineer', department: 'Engineering' },
    { id: 2, status:false, name: 'Jane Smith', position: 'UX Designer', department: 'Design' },
    { id: 3, status:true, name: 'Alice Johnson', position: 'Marketing Specialist', department: 'Marketing' },
    
    // Add more employees as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [editingEmployee, setEditingEmployee] = useState(null);

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditClick = (employee) => {
    setEditingEmployee(employee);
    // Open your modal for editing here
  };

  return (
    <div className="container mx-auto px-8 flex flex-col h-[85vh] ">

      <h1 className="text-4xl font-bold mb-6 text-gray-800">Employee List</h1>

      <div className='flex flex-1 flex-row w-full h-fit items-center gap-4 justify-end px-4'>
      <button onClick={() => {}} className="bg-blue-500 text-white px-4 py-2  self-end">
        Add New Structure
      </button>
      <button onClick={() => {}} className="bg-blue-500 text-white px-4 py-2  self-end">
        Add New Structure
      </button>
      </div>

      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-md w-full py-2 px-4 text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
        />
        <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500">
          🔍
        </span>
      </div>

      <div className="flex-grow overflow-scroll hide-scrollbar">
        <table className="w-full border-collapse border">
          <thead className="bg-gray-200 sticky top-0">
            <tr>
              <th className="border px-6 py-3">ID</th>
              <th className="border px-6 py-3">Name</th>
              <th className="border px-6 py-3">Status</th>
              {/* <th className="border px-6 py-3">Edit</th> */}
              <th className="border px-6 py-3">Edit</th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto ">
            {filteredEmployees.map(employee => (
              <tr key={employee.id}>
                <td className="border px-6 py-3">{employee.id}</td>
                <td className="border px-6 py-3">{employee.name}</td>
                <td className="border px-6 py-3">{employee.status === true ? 'present' : 'absent'}</td>
                {/* <td className="border px-6 py-3">{employee.department}</td> */}
                <td className="border px-6 py-3 flex flex-1 justify-around">
                  <button
                    onClick={() => handleEditClick(employee)}
                    className="bg-green-500 text-white px-2 py-1 rounded-md"
                  >
                    Present
                  </button>
                  <button
                    onClick={() => handleEditClick(employee)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                  >
                    Absent
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    
      </div>

      {editingEmployee && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-md">
            {/* Edit modal content goes here */}
            <h2 className="text-lg font-bold mb-4">Edit Employee</h2>
            {/* Add your form fields for editing employee data */}
            {/* Close modal button */}
            <button
              onClick={() => setEditingEmployee(null)}
              className="bg-gray-500 text-white px-2 py-1 mr-2"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                // Logic to save edited data
                setEditingEmployee(null);
              }}
              className="bg-blue-500 text-white px-2 py-1"
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Attendance;
