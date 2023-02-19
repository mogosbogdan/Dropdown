import React from "react";
import { renderedInvoice } from "./utils";

const DropdownMenu = ({ value, options, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="dropdown">
      {options.map((option) => {
        return (
          <option key={option.billDate} value={option.billDate}>
            {renderedInvoice(option)}
          </option>
        );
      })}
    </select>
  );
};

export default DropdownMenu;
