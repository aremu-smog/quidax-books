export const convertArrayToString = (array) => {
  const names = array.map((item) => item.name);

  return names.join(" ");
};

export const getLongString = (...args) => {
  let finalString = "";

  args.forEach((arg) => {
    if (Array.isArray(arg)) {
      finalString += convertArrayToString(arg);
    } else {
      finalString += arg;
    }

    finalString += " ";
  });

  return finalString;
};
