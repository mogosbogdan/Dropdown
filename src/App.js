import React, { useState } from "react";
import { options } from "./options";
import DropdownMenu from "./DropdownMenu";
import DisplayedOption from "./DisplayedOption";
import "./App.css";

const SelectDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    const option = options.find((option) => option.billDate === value);
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <DropdownMenu
        value={selectedOption.value}
        options={options}
        onChange={handleSelectChange}
      />
      <DisplayedOption option={selectedOption} />
    </div>
  );
};

export default SelectDropdown;
