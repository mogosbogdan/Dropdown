import React, { useState } from "react";
import { options } from "./options";
import dateFormat from "dateformat";
import "./App.css";
import { translatedBillMonth } from "./TranslatedBillMonth";

const billMonth = (param) => {
  return dateFormat(param.billDate, "mmmm");
};

const billYear = (param) => {
  return dateFormat(param.billDate, "yyyy");
};

const DropdownMenu = ({ value, options, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="dropdown">
      {options.map((option) => {
        return (
          <option key={option.billDate} value={option.billDate}>
            {"Factura " +
              translatedBillMonth(billMonth(option)) +
              " " +
              billYear(option)}
          </option>
        );
      })}
    </select>
  );
};
const DisplayedOption = ({ option }) => {
  return (
    <div className="invoiceDetails">
      <div>
        Factura{" "}
        {translatedBillMonth(billMonth(option)) + " " + billYear(option)}
      </div>
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
