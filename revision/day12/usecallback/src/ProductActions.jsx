import React from 'react';

const ProductActions = React.memo(({ onReset }) => {
  console.log("Child component rendered");

  return (
    <button onClick={onReset}>
      Reset Filters
    </button>
  );
});

export default ProductActions;