import React, { useState } from 'react';

const SalaryManagement = () => {
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
    <div className="flex flex-1 flex-col ">
      <button onClick={() => setOpenAddStructureDialog(true)} className="bg-blue-500 text-white px-4 py-2 mt-4 self-end">
        Add New Structure
      </button>
      <table className=" w-full border-collapse border mt-4">
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
      </table>

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
    </div>
  );
};

export default SalaryManagement;
