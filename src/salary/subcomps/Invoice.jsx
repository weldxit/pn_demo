import React from 'react';

const CalculatedSalary = ({ invoiceData }) => {
  return (
    <div className="flex flex-1 flex-col shadow-md">
      <h2 className="text-2xl font-bold mb-4 bg-blue-500 text-white py-2 px-4">Invoice</h2>
      <div className="bg-white p-4">
        <div className="flex justify-between mb-4">
          <div>
            <p className="font-bold">{invoiceData.customerName}</p>
            <p>{invoiceData.customerAddress}</p>
            {/* <p>O</p> */}
          </div>
          <div>
            <p className="font-bold">Employee Id: PN-C-01</p>
            <p>Date: {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <div className="mb-4">
          <p className="font-bold">Bill To:</p>
          <p>{invoiceData.customerName}</p>
          <p>{invoiceData.customerAddress}</p>
          <p>{invoiceData.customerCity}, {invoiceData.customerCountry}</p>
        </div>

        <table className="w-full border-collapse mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Item</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Unit Price</th>
              <th className="border p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.items.map((item, index) => (
              <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'} hover:shadow-md`}>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.description}</td>
                <td className="border p-2">{item.quantity}</td>
                <td className="border p-2">${item.unitPrice.toFixed(2)}</td>
                <td className="border p-2">${(item.quantity * item.unitPrice).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end">
          <div>
            <p className="font-bold">Subtotal: ${invoiceData.subtotal.toFixed(2)}</p>
            <p className="font-bold">Tax (10%): ${invoiceData.tax.toFixed(2)}</p>
            <p className="font-bold">Total: ${invoiceData.total.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatedSalary;
