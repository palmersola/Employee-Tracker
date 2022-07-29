const tracker_router = require("express").Router();
// const path = require("path");
const db = require("../db/connection");

// get routes
tracker_router.get("/department", (req, res) => {
  db.query("SELECT * FROM department", (err, data) => {
    if (err) return console.log(err);

    res.json(data);
  });
});

tracker_router.get("/company_role", (req, res) => {
  db.query("SELECT * FROM company_role", (err, data) => {
    if (err) return console.log(err);

    res.json(data);
  });
});

tracker_router.get("/api/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, data) => {
    if (err) return console.log(err);

    res.json(data);
  });
});

// post routes
tracker_router.post("/department", (req, res) => {
  db.query(`INSERT INTO department SET ?`, req.body, (err, data) => {
    if (err) return console.log(err);

    res.json({
      id: data.insertId,
      message: "Added Todo Successfully"
    });
  });
});

tracker_router.post("/company_role", (req, res) => {
  db.query(`INSERT INTO company_role SET ?`, req.body, (err, data) => {
    if (err) return console.log(err);

    res.json({
      id: data.insertId,
      message: "Added Todo Successfully"
    });
  });
});

tracker_router.post("/employees", (req, res) => {
  db.query(`INSERT INTO employees SET ?`, req.body, (err, data) => {
    if (err) return console.log(err);

    res.json({
      id: data.insertId,
      message: "Added Todo Successfully"
    });
  });
});

// tracker_router.delete("/todos", (req, res) => {
//   const id = req.body.id;
//   console.log(req.body);
//   db.query(`DELETE FROM todos WHERE id = ?`, id, (err, data) => {
//     if (err) return console.log(err);

//     res.json({
//       message: `Todo with id of ${id} has been deleted successfully`
//     });
//   });
// });

module.exports = tracker_router;
