import React, { useState } from "react";
import { options } from "./options";
import dateFormat from "dateformat";
import "./App.css";
import { translatedBillMonth } from "./TranslatedBillMonth";

const DropdownMenu = ({ value, options, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="dropdown">
      {options.map((option) => {
        const billMonth = dateFormat(option.billDate, "mmmm");
        return (
          <option key={option.billDate} value={option.billDate}>
            Factura {translatedBillMonth(billMonth)}
          </option>
        );
      })}
    </select>
  );
};
const DisplayedOption = ({ option }) => {
  const billMonth = dateFormat(option.billDate, "mmmm");

  return (
    <div className="invoiceDetails">
      <div>Factura {translatedBillMonth(billMonth)}</div>
      <div>
        {"Due: " + option.amountDue.value + " " + option.amountDue.unit}
      </div>
      <div>{"Bill: " + option.billNo}</div>
      <div>{"ID: " + option.id}</div>
    </div>
  );
};

const SelectDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    const option = options.find((option) => option.billDate === value);
    setSelectedOption(option);
    console.log(selectedOption);
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
