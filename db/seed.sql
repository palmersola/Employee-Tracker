USE employee_tracker;

INSERT INTO department(department_name) VALUES
('Management'),
('Sales'),
('Marketing'),
('Warehouse'); 

INSERT INTO company_role(cr_id, title, salary, d_id) VALUES
('1', 'Chief Exectuive Officer', '175000', '1'),
('2', 'Chief Financial Officer', '150000', '1'),
('3', 'Sales Lead', '100000', '2'),
('4', 'Salesperson', '80000', '2'),
('5', 'Head of Marketing', '100500', '3'),
('6', 'Product Marketing', '75000', '3'),
('7', 'Warehouse Manager', '90000', '4'),
('8', 'Warehouse Worker', '40000', '4');

INSERT INTO employees(e_id, first_name, last_name, cr_id, manager) VALUES
('1', 'Mary', 'Stevens', '1', NULL),
('2', 'Brian', 'Johnston', '2', NULL),
('3', 'Phillip', 'Evans', '3', 'Mary Stevens'),
('4', 'Rachel', 'Hansen', '4', 'Phillip Evans'),
('5', 'Mark', 'Robinson', '4', 'Phillip Evans'),
('6', 'Brock', 'Hampton', '5', 'Mary Stevens'),
('7', 'Lauren', 'Strainer', '6', 'Brock Hampton'),
('8', 'Zach', 'Williams', '6', 'Brock Hampton'),
('9', 'Buzz', 'Snaggin', '7', 'Mary Stevens'),
('10', 'Leroy', 'Jenkins', '8', 'Buzz Snaggin'),
('11', 'Duke', 'Nukem', '8', 'Buzz Snaggin');

SELECT * FROM employees;

-- SELECT 
-- company_role.id, 
-- employees.role_id 
--       FROM company_role
--       JOIN employees
--       ON company_role.id = employees.role_id;
