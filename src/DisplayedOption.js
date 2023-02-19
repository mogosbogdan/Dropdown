import React from "react";
import { renderedInvoice } from "./utils";

const DisplayedOption = ({ option }) => {
  return (
    <div className="invoiceDetails">
      <div>{renderedInvoice(option)}</div>
      <div>
        {"Due: " + option.amountDue.value + " " + option.amountDue.unit}
      </div>
      <div>{"Bill: " + option.billNo}</div>
      <div>{"ID: " + option.id}</div>
    </div>
  );
};

export default DisplayedOption;
