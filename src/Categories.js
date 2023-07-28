import React, {useState} from "react";
import data from "./data.json";

const Categories = ({ SelectCategory}) => {
  const allCategories = [...new Set(data.map((item) => item.category))];
  const [selectedIndex, setSelectedIndex] = useState(null);
  return (
    <div className="left">
      <h4>
        Categories:
      </h4>
      {allCategories.map((category, index) => {
        return (
          <div className="left-btn" key={index}>
            <button
              type="button"
              className={`btn ${index === selectedIndex ? "default-btn" : ""}`}
              onClick={() => {
                SelectCategory(category);
                setSelectedIndex(index);
              }}
            >
              {category}
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Categories;
