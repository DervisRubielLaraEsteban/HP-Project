import React, { useState } from "react";
import "./fondo.css"

const CategoryInput = ({ categories = [], setCategories, onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddCategoryButton = () => {
    setCategories([inputValue, ...categories]);
    setInputValue("");
  };

  return (
    <div >
      <button
        onClick={handleAddCategoryButton}
        className="btn btn-primary btn-sm ms-2 mb-1"
        type="button"
      >
        AGREGAR
      </button>
    </div>
  );
};
export default CategoryInput;