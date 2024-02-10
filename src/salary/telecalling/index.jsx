import React, { useState } from 'react';
import EmployeeList from '../../components/Employees';
import CollectionTable from "../subcomps/Table";
import CalculatedSalary from "../subcomps/Invoice";


const SalaryManagement = () => {
  const [salaryStructures, setSalaryStructures] = useState([
    { id: 1, name: 'Standard Salary', basicSalary: 50000, overtimeRate: 0.05, bonusRate: 0.1, deductionRate: 0.02 },
    // Add more sample structures
  ]);
  const [selectedEmployeeIndex, setSelectedEmployeeIndex] = useState(0);
  const handleEmployeeClick = (index) => {
    setSelectedEmployeeIndex(index);
  };
  const tableColumns = ["Column 1", "Column 2"];
  const tableData = [
    ["Data 1", "Data 2"],
    ["Data 3", "Data 4"],
    ["Data 1", "Data 2"],
    ["Data 3", "Data 4"],
    ["Data 1", "Data 2"],
    ["Data 3", "Data 4"],
    ["Data 1", "Data 2"],
    ["Data 3", "Data 4"],
    ["Data 1", "Data 2"],
    ["Data 3", "Data 4"],
    ["Data 1", "Data 2"],
    ["Data 3", "Data 4"],
    ["Data 1", "Data 2"],
    ["Data 3", "Data 4"],
    // Add more rows as needed
  ];

  const sampleInvoiceData = [{
    customerName: "Alice Smith",
    customerAddress: "456 Oak St",
    customerCity: "Villagetown",
    customerCountry: "Countryland",
    items: [
      { name: "Product A", description: "Description A", quantity: 2, unitPrice: 30.0 },
      { name: "Product B", description: "Description B", quantity: 1, unitPrice: 20.5 },
      { name: "Product C", description: "Description C", quantity: 3, unitPrice: 15.75 },
    ],
    subtotal: 130.25,
    tax: 13.03,
    total: 143.28,
  },
  {
    customerName: "Bob Johnson",
    customerAddress: "789 Pine St",
    customerCity: "Treetown",
    customerCountry: "Countryland",
    items: [
      { name: "Widget X", description: "High-quality widget", quantity: 5, unitPrice: 12.0 },
      { name: "Gadget Y", description: "Tech gadget", quantity: 2, unitPrice: 50.0 },
    ],
    subtotal: 130.0,
    tax: 13.0,
    total: 143.0,
  },
  {
    customerName: "Charlie Brown",
    customerAddress: "987 Elm St",
    customerCity: "Leaftown",
    customerCountry: "Countryland",
    items: [
      { name: "Book A", description: "Novel", quantity: 3, unitPrice: 18.0 },
      { name: "Movie DVD", description: "Classic film", quantity: 1, unitPrice: 30.0 },
    ],
    subtotal: 84.0,
    tax: 8.4,
    total: 92.4,
  },
];


  const employees = [
    { id: 1, name: "Chakradhara Routray Sing", position: "Software Engineer" },
    { id: 2, name: "Naresh", position: "UX Designer" },
    { id: 3, name: "Ravi", position: "Product Manager" },
   
    // Add more employees as needed
  ];

  
  const [openAddStructureDialog, setOpenAddStructureDialog] = useState(false);
  const [openEditStructureDialog, setOpenEditStructureDialog] = useState(false);
  const [newStructureName, setNewStructureName] = useState('');
  const [newStructureBasicSalary, setNewStructureBasicSalary] = useState(0);
  const [newStructureOvertimeRate, setNewStructureOvertimeRate] = useState(0);
  const [newStructureBonusRate, setNewStructureBonusRate] = useState(0);
  const [newStructureDeductionRate, setNewStructureDeductionRate] = useState(0);
  const [selectedStructureId, setSelectedStructureId] = useState(null);

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

  return (
    <div className="flex flex-1 flex-col bg-white p-4">
      <div className='flex flex-1 flex-row w-full h-fit items-center gap-4 justify-end px-4'>
      <button onClick={() => setOpenAddStructureDialog(true)} className="bg-blue-500 text-white px-4 py-2  self-end">
        Add New Structure
      </button>
      <button onClick={() => setOpenAddStructureDialog(true)} className="bg-blue-500 text-white px-4 py-2  self-end">
        Add New Structure
      </button>
      </div>
      {/* <table className=" w-full border-collapse border mt-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Basic Salary</th>
            <th className="border px-4 py-2">Overtime Rate</th>
            <th className="border px-4 py-2">Bonus Rate</th>
            <th className="border px-4 py-2">Deduction Rate</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {salaryStructures.map((structure) => (
            <tr key={structure.id}>
              <td className="border px-4 py-2">{structure.name}</td>
              <td className="border px-4 py-2">{structure.basicSalary}</td>
              <td className="border px-4 py-2">{structure.overtimeRate}</td>
              <td className="border px-4 py-2">{structure.bonusRate}</td>
              <td className="border px-4 py-2">{structure.deductionRate}</td>
              <td className="border px-4 py-2">
                <button onClick={() => handleEditButtonClick(structure.id)} className="bg-green-500 text-white px-2 py-1 mr-2">
                  Edit
                </button>
                <button onClick={() => handleDeleteStructure(structure.id)} className="bg-red-500 text-white px-2 py-1">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}

      {/* Add/Edit Structure Dialog */}
      {openAddStructureDialog || openEditStructureDialog ? (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-md">
            <h2 className="text-lg font-bold mb-4">{openAddStructureDialog ? 'Add New' : 'Edit'} Salary Structure</h2>
            <label className="block mb-2">Name:</label>
            <input
              type="text"
              value={newStructureName}
              onChange={(e) => setNewStructureName(e.target.value)}
              className="border px-2 py-1 mb-4 w-full"
            />
            <label className="block mb-2">Basic Salary:</label>
            <input
              type="number"
              value={newStructureBasicSalary}
              onChange={(e) => setNewStructureBasicSalary(e.target.value)}
              className="border px-2 py-1 mb-4 w-full"
            />
            <label className="block mb-2">Overtime Rate:</label>
            <input
              type="number"
              value={newStructureOvertimeRate}
              onChange={(e) => setNewStructureOvertimeRate(e.target.value)}
              className="border px-2 py-1 mb-4 w-full"
            />
            <label className="block mb-2">Bonus Rate:</label>
            <input
              type="number"
              value={newStructureBonusRate}
              onChange={(e) => setNewStructureBonusRate(e.target.value)}
              className="border px-2 py-1 mb-4 w-full"
            />
            <label className="block mb-2">Deduction Rate:</label>
            <input
              type="number"
              value={newStructureDeductionRate}
              onChange={(e) => setNewStructureDeductionRate(e.target.value)}
              className="border px-2 py-1 mb-4 w-full"
            />
            <div className="flex justify-end">
              <button onClick={() => {setOpenAddStructureDialog(false); setOpenEditStructureDialog(false)}} className="bg-gray-500 text-white px-2 py-1 mr-2">
                Cancel
              </button>
              <button
                onClick={openAddStructureDialog ? handleAddStructure : handleEditStructure}
                className="bg-blue-500 text-white px-2 py-1"
              >
                {openAddStructureDialog ? 'Add Structure' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      ):''}
       <div className="flex flex-1 flex-row flex-wrap w-full p-4 gap-5 overflow-hidden md:flex-row">
        <div className="flex h-full w-full md:w-fit ">
          <EmployeeList employees={employees} onEmployeeClick={handleEmployeeClick} />
        </div>
        <div className="flex flex-1 flex-col md:flex-row gap-5">
          <div className="flex flex-1">
            <CollectionTable columns={tableColumns} data={tableData} />
          </div>
          <div className="flex flex-1">
            <CalculatedSalary invoiceData={selectedEmployeeIndex !== null ? sampleInvoiceData[selectedEmployeeIndex] : null} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryManagement;
