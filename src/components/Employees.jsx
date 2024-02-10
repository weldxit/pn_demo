import React from 'react';

const EmployeeList = ({ employees, onEmployeeClick }) => {
  return (
    <div className='flex flex-1 flex-col'>
      <h2 className="text-2xl font-bold mb-4 py-1 px-4 bg-blue-500 text-white self-start w-full">Employee List</h2>
      <ul className="list-none p-0 m-0 w-full">
        {employees.map((employee, index) => (
          <li key={employee.id} className="mb-2">
            <button
              onClick={() => onEmployeeClick(index)}
              className="text-black py-2 px-4 rounded cursor-pointer hover:bg-blue-700 hover:text-white w-full text-left"
            >
              {employee.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
