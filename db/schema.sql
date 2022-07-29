CREATE DATABASE employee_tracker;

USE employee_tracker; 

CREATE TABLE department ( 
      id INT PRIMARY KEY,
      department_name VARCHAR(30)
);

CREATE TABLE company_role( 
      id INT PRIMARY KEY,
      title VARCHAR(30),
      salary DECIMAL,
      department_id INT
);

CREATE TABLE employee( 
      id INT PRIMARY KEY,
      first_name VARCHAR(30),
      last_name VARCHAR(30),
      role_id INT,
      manager_id INT
);

INSERT INTO department(id, department_name) VALUES
('1', 'Management'),
('2', 'Sales'),
('3', 'Marketing'),
('4', 'Warehouse') 

INSERT INTO company_role(id, title, salary, department_id) VALUES
('1', 'Chief Exectuive Officer', '175000', '1'),
('2', 'Chief Financial Officer', '150000', '1'),
('3', 'Sales Lead', '100000', '2'),
('4', 'Salesperson', '80000', '2'),
('5', 'Head of Marketing', '100500', '3'),
('6', 'Product Marketing', '75000', '3'),
('7', 'Warehouse Manager', '90000', '4'),
('8', 'Warehouse Worker', '40000', '4'),