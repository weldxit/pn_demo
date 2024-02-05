import React from 'react'
import ThreeDropdownComponent from '../../components/ThreeMenu'

export default function Collection() {
    const handleTLChange = (selectedTL) => {
        // Fetch data or trigger actions based on the selected TL
        console.log(`Selected TL: ${selectedTL}`);
      };
    
      const handleProductChange = (selectedProduct) => {
        // Fetch data or trigger actions based on the selected product
        console.log(`Selected Product: ${selectedProduct}`);
      };
    
      const handleExecutiveChange = (selectedExecutive) => {
        // Fetch data or trigger actions based on the selected executive
        console.log(`Selected Executive: ${selectedExecutive}`);
      };
    
      return (
        <div>
          <ThreeDropdownComponent
            onTLChange={handleTLChange}
            onProductChange={handleProductChange}
            onExecutiveChange={handleExecutiveChange}
          />
          {/* Other content in the parent component */}
          <div className='p-4 h-fit w-full bg-white flex overflow-hidden'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa consequatur quaerat magnam voluptate, aliquam ducimus placeat ea dolorem reiciendis sint at repudiandae. Labore, sequi rem? Officia natus rerum ipsum aliquam.
            Blanditiis suscipit, totam dolorem illum sunt asperiores praesentium commodi ipsam nobis animi cupiditate eum voluptates, soluta veniam, maxime id consectetur quasi quaerat a! Ducimus quia a amet architecto voluptatibus ea.
            Voluptatibus, repellat placeat. Corrupti odio possimus sequi quae exercitationem laboriosam incidunt necessitatibus numquam, animi voluptatibus voluptatem ea? Amet molestiae delectus voluptates error reprehenderit ducimus omnis in. Repellat ullam repudiandae omnis!
          </div>

        </div>
      );
}
