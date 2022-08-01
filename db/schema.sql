DROP DATABASE IF EXISTS employee_tracker;

CREATE DATABASE employee_tracker;

USE employee_tracker; 

CREATE TABLE department ( 
      d_id INT AUTO_INCREMENT PRIMARY KEY,
      department_name VARCHAR(30)
);

CREATE TABLE company_role( 
      cr_id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(30),
      salary INT,
      d_id INT NOT NULL
);

CREATE TABLE employees( 
      e_id INT AUTO_INCREMENT PRIMARY KEY,
      first_name VARCHAR(30),
      last_name VARCHAR(30),
      cr_id INT NOT NULL,
      manager VARCHAR(30)
);

SELECT * FROM employees;
-- INSERT INTO department(id, department_name) VALUES
-- ('1', 'Management'),
-- ('2', 'Sales'),
-- ('3', 'Marketing'),
-- ('4', 'Warehouse') 

-- INSERT INTO company_role(id, title, salary) VALUES
-- ('1', 'Chief Exectuive Officer', '175000'),
-- ('2', 'Chief Financial Officer', '150000'),
-- ('3', 'Sales Lead', '100000'),
-- ('4', 'Salesperson', '80000'),
-- ('5', 'Head of Marketing', '100500'),
-- ('6', 'Product Marketing', '75000'),
-- ('7', 'Warehouse Manager', '90000'),
-- ('8', 'Warehouse Worker', '40000'),