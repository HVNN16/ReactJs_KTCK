import React, { createContext, useState } from 'react';

const States = createContext();

export default function Context({ children }) {
  const [dataFromServer ] = useState(null);
  const [featuredData] = useState(null);

  const handleCategory = (category) => {
    // Thực hiện các hành động cần thiết với category
    console.log(`Selected category: ${category.name}`);
  };

  const handleFeaturedCategory = (category) => {
    // Thực hiện các hành động cần thiết với featured category
    console.log(`Selected featured category: ${category.name}`);
  };

  console.log('Context data:', { dataFromServer, featuredData, handleCategory, handleFeaturedCategory });

  return (
    <States.Provider value={{ dataFromServer, featuredData, handleCategory, handleFeaturedCategory }}>
      {children}
    </States.Provider>
  );
}

export { States };
