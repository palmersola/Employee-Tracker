USE employee_tracker;

INSERT INTO employee(id, first_name, last_name, role_id, manager_id) VALUES
('1', 'Mary', 'Stevens', '1', NULL),
('2', 'Brian', 'Johnston', '2', NULL),
('3', 'Phillip', 'Evans', '3', '2'),
('4', 'Rachel', 'Hansen', '4', '3'),
('5', 'Mark', 'Robinson', '4', '3'),
('6', 'Brock', 'Hampton', '5', '1'),
('7', 'Lauren', 'Strainer', '6', '6'),
('8', 'Zach', 'Williams', '6', '6'),
('9', 'Buzz', 'Snaggin', '7', '1'),
('10', 'Leroy', 'Jenkins', '8', '9'),
('11', 'Duke', 'Nukem', '8', '9')