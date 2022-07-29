// const inquirer = require("inquirer");
const express = require("express");

const fs = require("fs");
const cTable = require("console.table");
const inquirer = require("inquirer");
const db = require("./db/connection");
const start = [
  {
    type: "checkbox",
    name: "choice",
    choices: [
      "View All Departments",
      "View All Roles",
      "View All Employees",
      "Add Department",
      "Add Role",
      "Add Employee",
      "Update Employee Role",
      "Quit"
    ],
    message: "What would you like to do?"
  }
];

function prompt() {
  inquirer
    .prompt(start)
    .then(data => {
      const choice = data.choice[0];
      //     console.log(start[0].choices);
      if (choice === "View All Employees") {
        selector =
          "SELECT e.e_id, e.first_name, e.last_name, c.title, d.department_name, c.salary, e.manager FROM company_role c INNER JOIN employees e ON c.cr_id = e.cr_id INNER JOIN department d ON d.d_id = c.d_id;";
      } else if (choice === "View All Roles") {
        selector =
          "SELECT c.title, c.cr_id, d.department_name, c.salary FROM department d JOIN company_role c ON c.d_id = d.d_id;";
      } else if (choice === "View All Departments") {
        selector = "SELECT * FROM department;";
      }
    })
    .then(() => {
      db.query(selector, (err, data) => {
        if (err) return console.log(err);

        console.table(data);
        process.exit;
        prompt();
      });
    });
}

prompt();
//   console.table([
//     {
//       name: "foo",
//       age: 10
//     },
//     {
//       name: "bar",
//       age: 20
//     }
//   ]);
