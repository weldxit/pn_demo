import React, { useState } from "react";
import ThreeDropdownComponent from "../../components/ThreeMenu";
import CollectionTable from "../subcomps/Table";
import CalculatedSalary from "../subcomps/Invoice";
import EmployeeList from "../../components/Employees";
import './collection.css'
export default function Collection() {

  const [selectedEmployeeIndex, setSelectedEmployeeIndex] = useState(0);

  const handleEmployeeClick = (index) => {
    setSelectedEmployeeIndex(index);
  };

  const handleTLChange = (selectedTL) => {
    console.log(`Selected TL: ${selectedTL}`);
  };

  const handleProductChange = (selectedProduct) => {
    console.log(`Selected Product: ${selectedProduct}`);
  };

  const handleExecutiveChange = (selectedExecutive) => {
    console.log(`Selected Executive: ${selectedExecutive}`);
  };

  let array = [1, 3, 4, 5, 6, 5, 5, 5, 5, 5, 7];
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

  return (
    <div className="flex flex-1 flex-col h-fit sm:bg-green-400 md:bg-red-400 lg:bg-white ">
      <ThreeDropdownComponent
        onTLChange={handleTLChange}
        onProductChange={handleProductChange}
        onExecutiveChange={handleExecutiveChange}
      />
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
}
