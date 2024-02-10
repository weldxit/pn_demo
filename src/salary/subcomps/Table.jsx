import React from 'react';

const CollectionTable = ({ columns, data }) => {
  return (
    <div className="flex flex-1 flex-col ">
      <h2 className="text-2xl font-bold bg-blue-500 text-white py-1 px-3">Collection Details</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            {columns.map((column, index) => (
              <th key={index} className="border p-2">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="border p-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CollectionTable;
