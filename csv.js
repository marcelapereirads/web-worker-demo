// This function do not uses the values inputted, because I need a large number of rows to demonstrate the iteration with the page
export const createCsv = () => {
  const rows = [];

  rows.push("Id,description");

  for (var i = 0; i < 10000000; i++) {
    rows.push(`${i},Description for ${i}`);
  }

  return rows.join("\n");
};
