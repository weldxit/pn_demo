import React, { useState, useEffect } from 'react';

const ThreeDropdownComponent = ({ onTLChange, onProductChange, onExecutiveChange }) => {
  const [selectedTL, setSelectedTL] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedExecutive, setSelectedExecutive] = useState('');

  const tlOptions = ['Choose TL', 'TL1', 'TL2'];
  const [productOptions, setProductOptions] = useState(['Choose Product']);
  const executivesData = [
    { tl: 'TL1', product: 'Product A', executive: 'John Doe' },
    { tl: 'TL1', product: 'Product B', executive: 'Jane Smith' },
    { tl: 'TL1', product: 'Product A', executive: 'Michael Johnson' },
    { tl: 'TL2', product: 'Product B', executive: 'Emily Brown' },
    { tl: 'TL2', product: 'Product A', executive: 'Daniel White' },
    { tl: 'TL2', product: 'Product C', executive: 'Daniel Black' },
    // Add more realistic dummy data as needed
  ];
  const [executiveOptions, setExecutiveOptions] = useState(['Choose Executive']);

  useEffect(() => {
    // Update productOptions when selectedTL changes
    if (selectedTL !== 'Choose TL') {
      const filteredProductOptions = executivesData
        .filter((data) => data.tl === selectedTL)
        .map((data) => data.product);
      setProductOptions(['Choose Product', ...new Set(filteredProductOptions)]);
      setSelectedProduct('');
    }
  }, [selectedTL]);

  useEffect(() => {
    // Update executiveOptions when selectedProduct changes
    if (selectedProduct !== 'Choose Product') {
      const filteredExecutiveOptions = executivesData
        .filter((data) => data.tl === selectedTL && data.product === selectedProduct)
        .map((data) => data.executive);
      setExecutiveOptions(['Choose Executive', ...new Set(filteredExecutiveOptions)]);
      setSelectedExecutive('');
    }
  }, [selectedProduct, selectedTL]);

  const handleChangeTL = (event) => {
    const selectedValue = event.target.value;
    setSelectedTL(selectedValue);
    setSelectedProduct('');
    setSelectedExecutive('');
    onTLChange(selectedValue);
  };

  const handleChangeProduct = (event) => {
    const selectedValue = event.target.value;
    setSelectedProduct(selectedValue);
    setSelectedExecutive('');
    onProductChange(selectedValue);
  };

  const handleChangeExecutive = (event) => {
    const selectedValue = event.target.value;
    setSelectedExecutive(selectedValue);
    onExecutiveChange(selectedValue);
  };

  return (
    <div className="p-4 bg-blue-200">
      <div className="flex items-center">
        {/* TL Dropdown */}
        <select
          value={selectedTL}
          onChange={handleChangeTL}
          className="mr-2 p-2 border rounded"
        >
          {tlOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* Product Dropdown */}
        <select
          value={selectedProduct}
          onChange={handleChangeProduct}
          className="mr-2 p-2 border rounded"
        >
          {productOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* Executive Dropdown */}
        <select
          value={selectedExecutive}
          onChange={handleChangeExecutive}
          className="p-2 border rounded"
        >
          {executiveOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ThreeDropdownComponent;
