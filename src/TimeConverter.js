import dateFormat from "dateformat";

export const translatedBillMonth = (month) => {
  if (month === "January") {
    return "Ianuarie";
  } else if (month === "February") {
    return "Februarie";
  } else if (month === "March") {
    return "Martie";
  } else if (month === "April") {
    return "Aprilie";
  } else if (month === "May") {
    return "Mai";
  } else if (month === "June") {
    return "Iunie";
  } else if (month === "July") {
    return "Iulie";
  } else if (month === "August") {
    return "August";
  } else if (month === "September") {
    return "Septembrie";
  } else if (month === "October") {
    return "Octombrie";
  } else if (month === "November") {
    return "Noiembrie";
  } else if (month === "December") {
    return "Decembrie";
  }
};

export const billMonth = (param) => {
  return dateFormat(param.billDate, "mmmm");
};

export const billYear = (param) => {
  return dateFormat(param.billDate, "yyyy");
};
