const express = require("express");
const Server_Port = 3000;
const app = express();
app.use("/static", express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const students = {
  firstname: "Yueyang",
  lastname: "Peng",
};
app.get("/hello", (req, res) => {
  res.send("Hello, Express JS");
});

app.get("/user", (req, res) => {
  const defaultLastname = students.lastname;
  const defaultfirstname = students.firstname;
  const firstname = req.query.firstname;
  const lastname = req.query.lastname;
  if (firstname == null || lastname == null) {
    return res.json({ defaultLastname, defaultfirstname });
  }

  if (defaultLastname != lastname || defaultfirstname != firstname) {
    return res.status(404).json({
      error: `404 Not Found ${lastname} And ${firstname}`,
    });
  }

  res.json({ defaultLastname, defaultfirstname });
});

app.post("/user/:firstname/:lastname", (req, res) => {
  const firstname = req.params.firstname;
  const lastname = req.params.lastname;
  res.status(200).json({
    firstname: firstname,
    lastname: lastname,
  });
});

app.post("/user", (req, res) => {
  const name = req.body;
  if (!name.firstname || !name.lastname) {
    res.status(400).json({
      error: "Missing firstname or lastname",
    });
  }
  console.log(name);
  res.status(200).json({
    firstname: name.firstname,
    lastname: name.lastname,
  });
});

app.listen(Server_Port, () => {
  console.log("Server is running...");
});
