const http = require("http");
const employee = require("./Employee");

console.log("Lab 03 -  NodeJs");

// Define Server Port
const port = process.env.PORT || 8081;

// Helper to send JSON
function sendJSON(res, statusCode, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
  });
  res.end(body);
}

// Helper to send HTML
function sendHTML(res, statusCode, html) {
  res.writeHead(statusCode, { "Content-Type": "text/html; charset=utf-8" });
  res.end(html);
}

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
  if (req.method !== "GET") {
    return sendJSON(res, 405, { error: http.STATUS_CODES[405] });
  }

  switch (req.url) {
    case "/":
      // Display message "<h1>Welcome to Lab Exercise 03</h1>"
      return sendHTML(res, 200, "<h1>Welcome to Lab Exercise 03</h1>");

    case "/employee":
      // Display all employees in JSON format
      return sendJSON(res, 200, employee.getAll());

    case "/employee/names":
      // Display only all employees {first name + lastname} in Ascending order in JSON Array
      // e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
      return sendJSON(res, 200, employee.getNamesAsc());

    case "/employee/totalsalary":
      // Display Sum of all employees salary in given JSON format
      // e.g. { "total_salary" : 100 }
      return sendJSON(res, 200, { total_salary: employee.getTotalSalary() });

    default:
      return sendJSON(res, 404, { error: http.STATUS_CODES[404] });
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});