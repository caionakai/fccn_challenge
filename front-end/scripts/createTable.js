const ENDPOINT = "comments";

const buildTable = (comments) => {
  comments.forEach((comment) => {
    const table = document.getElementById("table");
    const row = table.insertRow();
    // Iterate through all keys to build cells
    Object.keys(comment).forEach((key) => {
      if (key === "_id") return;
      // Insert at index 0 because the object's keys is in a reverse order
      const cell = row.insertCell(0);
      const newText = document.createTextNode(comment[key]);
      cell.appendChild(newText);
    });
  });
};

// Retrieve data from the API and render it as a table
// API_URL comes from config/api_config.js
fetch(API_URL + ENDPOINT)
  .then((response) => response.json())
  .then((comments) => {
    buildTable(comments);
  })
  .catch((err) => {
    alert("Something went wrong while retrieving the data :(");
  });
