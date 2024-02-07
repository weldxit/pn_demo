import React from 'react';

const EmployeeList = ({ employees, onEmployeeClick }) => {
  return (
    <div >
      <h2 className="text-2xl font-bold mb-4">Employee List</h2>
      <ul className="list-none p-0 m-0">
        {employees.map((employee, index) => (
          <li key={employee.id} className="mb-2">
            <button
              onClick={() => onEmployeeClick(index)}
              className="text-black py-2 px-4 rounded cursor-pointer hover:bg-blue-700 hover:text-white"
            >
              {employee.name} - {employee.position}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
