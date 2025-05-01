import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFilterCategory } from "../../model/reducer/productFilterReducer";

const CategoryComponent = ({
  data,
  selectedCategories,
  setSelectedCategories,
  setproductresult,
  setoffset,
}) => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  console.log("categories in category component :::", categories)

  useEffect(() => {
    if (data?.length > 0) {
      const transformedData = transformCategoryData(data);
      const allCategory = {
        id: "all",
        name: "All",
        children: [],
        isExpanded: false,
      };
      setCategories([allCategory, ...transformedData]);

      // Set default selected category to "Ready to Cook" if it exists
      const defaultCategory = data.find((category) => category.name === "All");
      if (selectedCategories.length === 0) {
        setSelectedCategories([defaultCategory?.id || "all"]);
      }
    }
  }, [data, selectedCategories, setSelectedCategories]);

  const transformCategoryData = (categories) =>
    categories.map((category) => ({
      id: category.id,
      name: category.name,
      children: category.children || [], // Handle nested children
      isExpanded: false,
    }));
  

  const handleCategoryClick = (id) => {
    // If the clicked category is already selected, do nothing
    if (selectedCategories.includes(id)) return;

    // Update selected categories
    const newSelectedCategories = id === "all" ? ["all"] : [id];

    setproductresult([]); // Clear product results
    setoffset(0); // Reset offset
    setSelectedCategories(newSelectedCategories);

    dispatch(
      setFilterCategory({
        data: id === "all" ? "" : id, // Pass the selected category ID
      })
    );
  };

  const renderCategories = (categories) =>
    categories.map((category) => (
      <div
        key={category.id}
        className={`unique-category-item ${
          selectedCategories.includes(category.id) ? "unique-category-selected" : ""
        }`}
        onClick={() => handleCategoryClick(category.id)}
      >
        <span className="unique-category-name">{category.name}</span>
      </div>
    ));
  
  return (
    <div className="unique-category-tree">
      {renderCategories(categories)}
    </div>
  );
};

export default CategoryComponent;
