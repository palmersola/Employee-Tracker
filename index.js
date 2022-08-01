// const express = require("express");
// const fs = require("fs");
const cTable = require("console.table");
const inquirer = require("inquirer");
const db = require("./db/connection");
let selector = "";

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

function addDepartment() {
  const department = [
    {
      name: "department_name",
      message: "Enter Department Name: "
    }
  ];
  inquirer
    .prompt(department)
    .then(data => {
      db.query(
        `INSERT INTO department(department_name) VALUES
        ('${data.department_name}');`,
        (err, data) => {
          if (err) return console.log(err);
        }
      );
    })
    .then(() => {
      view(start[0].choices[0]);
    });
}

function addRole() {
  let departmentChoices = [];
  let title = "";
  let salary = 0;
  let id = 0;
  db.query(`SELECT * FROM department`, (err, data) => {
    if (err) return console.log(err);
    data.forEach(department => {
      departmentChoices.push(department.department_name);
    });
  });
  const company_role = [
    {
      name: "title",
      message: "Enter Role Name: "
    },
    {
      type: "number",
      name: "salary",
      message: "Enter Salary: "
    },
    {
      type: "checkbox",
      name: "d_id",
      choices: departmentChoices,
      message: "Select Department: "
    }
  ];
  inquirer
    .prompt(company_role)
    .then(data => {
      title = data.title;
      salary = data.salary;
      db
        .promise()
        .query(
          `SELECT d_id FROM department WHERE department_name = '${data.d_id}';`
        )
        .then(([rows, fields]) => {
          id = rows[0].d_id;
        })
        .catch(console.log)
        .then(() => {
          db.query(
            `INSERT INTO company_role(title, salary, d_id) VALUES
        ('${title}', '${salary}', '${id}');`,
            err => {
              if (err) return console.log(err);
            }
          );
        });
    })
    .then(() => {
      view(start[0].choices[1]);
    });
}

function addEmployee() {
  let roleChoices = [];
  let first_name = "";
  let last_name = "";
  let cr_id = 0;
  let manager = "";
  db.query(`SELECT * FROM company_role`, (err, data) => {
    if (err) return console.log(err);
    data.forEach(role => {
      roleChoices.push(role.title);
    });
  });
  const employees = [
    {
      name: "first_name",
      message: "Enter First Name: "
    },
    {
      name: "last_name",
      message: "Enter Last Name: "
    },
    {
      type: "checkbox",
      name: "cr_id",
      choices: roleChoices,
      message: "Select Role: "
    },
    {
      name: "manager",
      message: "Enter Manager Name"
    }
  ];
  inquirer
    .prompt(employees)
    .then(data => {
      first_name = data.first_name;
      last_name = data.last_name;
      manager = data.manager;
      db
        .promise()
        .query(`SELECT cr_id FROM company_role WHERE title = '${data.cr_id}';`)
        .then(([rows, fields]) => {
          cr_id = rows[0].cr_id;
        })
        .catch(console.log)
        .then(() => {
          db.query(
            `INSERT INTO employees(first_name, last_name, cr_id, manager) VALUES
            ('${first_name}', '${last_name}', '${cr_id}', '${manager}');`,
            err => {
              if (err) return console.log(err);
            }
          );
        });
    })
    .then(() => {
      view(start[0].choices[2]);
    });
}

function updateEmployee() {
  return new Promise((resolve, reject) => {
    let employeesChoices = [];
    let roleChoices = [];
    let promptChoices = [];
    db
      .promise()
      .query(
        `SELECT 
          e.e_id, 
          e.first_name, 
          e.last_name, 
          c.title, 
          c.cr_id
            FROM company_role c 
            INNER JOIN employees e ON c.cr_id = e.cr_id;
        SELECT * FROM company_role;`
      )
      .then(([rows, fields]) => {
        rows[0].forEach(rows => {
          employeesChoices.push(
            `${rows.e_id}    ${rows.first_name} ${rows.last_name}    ${rows.title} `
          );
        });
        rows[1].forEach(rows => {
          roleChoices.push(rows.title);
        });
        promptChoices.push(employeesChoices, roleChoices);
        resolve(promptChoices);
      });
  })
    .then(promptChoices => {
      return new Promise((resolve, reject) => {
        let empArray = promptChoices[0];
        let roleArray = promptChoices[1];
        let updateId = [];
        const employeeList = [
          {
            type: "checkbox",
            name: "employee",
            choices: empArray,
            message: "Select Employee: "
          },
          {
            type: "checkbox",
            name: "title",
            choices: roleArray,
            message: "Select Role: "
          }
        ];
        inquirer.prompt(employeeList).then(data => {
          const e_id = data.employee[0];
          const role = data.title[0];
          db
            .promise()
            .query(`SELECT cr_id FROM company_role WHERE title = '${role}';`)
            .then(([rows, fields]) => {
              // console.log(rows[0].cr_id);
              const cr_id = rows[0].cr_id;
              updateId.push(e_id[0], cr_id);
              resolve(updateId);
            });
        });
      });
    })
    .then(updateId => {
      return new Promise((resolve, reject) => {
        let e_id = updateId[0];
        let cr_id = updateId[1];
        db
          .promise()
          .query(
            `UPDATE employees SET cr_id = '${cr_id}' WHERE e_id = ${e_id};`
          );
        resolve(init());
      });
    });
}

function view(choice) {
  if (choice === start[0].choices[0]) {
    selector = `SELECT * FROM department;`;
  } else if (choice === start[0].choices[1]) {
    selector = `SELECT 
                  c.title AS Title, 
                  c.cr_id AS Role_Id, 
                  d.department_name AS Department, 
                  c.salary AS Salary
                    FROM department d 
                      INNER JOIN company_role c 
                      ON c.d_id = d.d_id;`;
  } else if (choice === start[0].choices[2]) {
    selector = `SELECT 
                  e.e_id, 
                  e.first_name, 
                  e.last_name, 
                  c.title, 
                  d.department_name, 
                  c.salary, 
                  e.manager 
                    FROM company_role c 
                      INNER JOIN employees e ON c.cr_id = e.cr_id 
                      INNER JOIN department d ON d.d_id = c.d_id;`;
  }
  db.query(selector, (err, data) => {
    if (err) return console.log(err);
    console.table(data);
    process.exit;
    init();
  });
}

function init() {
  inquirer.prompt(start).then(data => {
    const choice = data.choice[0];
    if (
      choice === start[0].choices[0] ||
      choice === start[0].choices[1] ||
      choice === start[0].choices[2]
    ) {
      view(choice);
    } else if (choice === start[0].choices[3]) {
      addDepartment(choice);
    } else if (choice === start[0].choices[4]) {
      addRole(choice);
    } else if (choice === start[0].choices[5]) {
      addEmployee(choice);
    } else {
      updateEmployee();
    }
  });
}

init();
