import { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ items, handleSelectedValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  if (!items || !handleSelectedValue) return;

  const toggleDropDown = () => setIsOpen(!isOpen);
  const handleItemClick = (item) => {
    handleSelectedValue(item);
    toggleDropDown();
    setSelectedValue(item);
  };
  return (
    <section className="dropdown-container">
      <button
        type="button"
        className="dropdown-toggle-btn"
        onClick={toggleDropDown}
        aria-label={`${isOpen ? "Close" : "Open"} dropdown`}
      >
        {isOpen ? "Close" : "Open"}
      </button>
      <ul
        className={`dropdown-items ${isOpen ? "dropdown-open" : "dropdown-closed"}`}
      >
        {items?.map((item, i) => (
          <li key={item.id + i.toString()} className="dropdown-item">
            <button
              type="button"
              aria-label={
                item.title === selectedValue?.title
                  ? `${item.title} is selected`
                  : `${item.title} not selected`
              }
              className={`dropdown-item-btn ${item.title === selectedValue?.title && "dropdown-selected-item"}`}
              onClick={() => handleItemClick(item)}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Dropdown;
