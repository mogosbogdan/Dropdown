import dateFormat from "dateformat";

export const translatedBillMonth = (month) => {
  switch (month) {
    case "January":
      return "Ianuarie";
    case "February":
      return "Februarie";
    case "March":
      return "Martie";
    case "April":
      return "Aprilie";
    case "May":
      return "Mai";
    case "June":
      return "Iunie";
    case "July":
      return "Iulie";
    case "August":
      return "August";
    case "September":
      return "Septembrie";
    case "October":
      return "Octombrie";
    case "November":
      return "Noiembrie";
    case "December":
      return "Decembrie";
    default:
      <p color="red">Error</p>;
      break;
  }
};

export const billMonth = (param) => {
  return dateFormat(param.billDate, "mmmm");
};

export const billYear = (param) => {
  return dateFormat(param.billDate, "yyyy");
};

export const renderedInvoice = (param) => {
  return (
    "Factura " + translatedBillMonth(billMonth(param)) + " " + billYear(param)
  );
};
