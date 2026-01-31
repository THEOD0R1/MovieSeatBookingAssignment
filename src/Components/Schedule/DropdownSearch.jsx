import { useState } from "react";
import Dropdown from "../Dropdown";
import "./DropdownSearch.css";

const DropdownSearch = ({
  items,
  identifier,
  handleSelectedValue,
  children,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredList, setFilteredList] = useState(null);

  if (items?.length === 0 || !identifier || !handleSelectedValue) return;

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase().trim();

    const newList = items.filter((item) => {
      const itemTitle = item.title.toLowerCase();
      if (itemTitle.includes(value)) return item;
    });
    setSearchValue(value);
    setFilteredList(newList);
  };

  const handleValue = (item) => {
    setSearchValue(item.title);
    handleSelectedValue(item);
  };

  return (
    <section className="dropdown-search-container">
      {children && <label htmlFor={identifier}>{children}</label>}
      <input
        className="dropdown-search-input"
        onChange={handleSearch}
        type="text"
        value={searchValue}
        name={identifier}
        id={identifier}
      />
      <Dropdown
        handleSelectedValue={handleValue}
        items={filteredList ? filteredList : items}
      />
    </section>
  );
};

export default DropdownSearch;
