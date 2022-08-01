USE employee_tracker;

INSERT INTO department(department_name) VALUES
('Management'),
('Sales'),
('Marketing'),
('Warehouse'); 

INSERT INTO company_role(title, salary, d_id) VALUES
('Chief Exectuive Officer', '175000', '1'),
('Chief Financial Officer', '150000', '1'),
('Sales Lead', '100000', '2'),
('Salesperson', '80000', '2'),
('Head of Marketing', '100500', '3'),
('Product Marketing', '75000', '3'),
('Warehouse Manager', '90000', '4'),
('Warehouse Worker', '40000', '4');

INSERT INTO employees(first_name, last_name, cr_id, manager) VALUES
('Mary', 'Stevens', '1', NULL),
('Brian', 'Johnston', '2', NULL),
('Phillip', 'Evans', '3', 'Mary Stevens'),
('Rachel', 'Hansen', '4', 'Phillip Evans'),
('Mark', 'Robinson', '4', 'Phillip Evans'),
('Brock', 'Hampton', '5', 'Mary Stevens'),
('Lauren', 'Strainer', '6', 'Brock Hampton'),
('Zach', 'Williams', '6', 'Brock Hampton'),
('Buzz', 'Snaggin', '7', 'Mary Stevens'),
('Leroy', 'Jenkins', '8', 'Buzz Snaggin'),
('Duke', 'Nukem', '8', 'Buzz Snaggin');

SELECT * FROM employees;

-- SELECT 
-- company_role.id, 
-- employees.role_id 
--       FROM company_role
--       JOIN employees
--       ON company_role.id = employees.role_id;
