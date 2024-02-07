import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='flex flex-1 '>
      {items.map((item, index) => (
        <div key={index} className="mb-4 border rounded w-full flex flex-1 flex-row">
          <div
            className={`p-4 cursor-pointer ${index === activeIndex ? 'bg-blue-200' : 'bg-white'} flex flex-1 justify-between w-full`}
            onClick={() => handleAccordionClick(index)}
          >
         <p>Sandeep Kumar</p>
         <p>3-bkt</p>
         {/* <p></p> */}
         <p>12,560</p>
          </div>
          {index === activeIndex && (
            <div className="p-4 flex flex-1">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
