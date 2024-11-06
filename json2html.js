// json2html.js

// Function to convert JSON array to HTML table
function json2html(data) {
    // Start table HTML
    let html = `
      <table data-user="chammanlalshahu0210@gmail.com">
        <thead>
          <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
        </thead>
        <tbody>
    `;

    // Loop through data and add rows
    data.forEach(person => {
        html += `<tr><td>${person.Name}</td><td>${person.Age}</td><td>${person.Gender || ''}</td></tr>`;
    });

    // Close the table HTML
    html += `
        </tbody>
      </table>
    `;

    // Return HTML as string
    return html;
}

// Export the function for CommonJS
module.exports = json2html;