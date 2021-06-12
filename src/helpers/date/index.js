export const formatDate = (date, type = "full") => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const the_date = new Date(date);
  let formated_date;

  if (type === "full") {
    formated_date = `${
      months[the_date.getMonth()]
    }  ${the_date.getDate()}, ${the_date.getFullYear()} `;
  } else {
    formated_date = the_date.getFullYear();
  }

  return formated_date;
};
