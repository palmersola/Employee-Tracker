USE employee_tracker;

-- SELECT 
-- e.e_id,
-- e.first_name,
-- e.last_name,
-- c.title,
-- d.department_name,
-- c.salary,
-- e.manager
--       FROM company_role c
--       INNER JOIN employees e 
--       ON c.cr_id = e.cr_id
--       INNER JOIN department d
--       ON d.d_id = c.d_id;
--  INSERT INTO company_role(title, salary, d_id) VALUES
--       ('Test', '345987', '2');
    -- SELECT 
    --               c.title AS Title, 
    --               c.cr_id AS Role_Id, 
    --               d.department_name AS Department, 
    --               c.salary AS Salary
    --                 FROM department d 
    --                   INNER JOIN company_role c 
    --                   ON c.d_id = d.d_id;  
    SELECT 
          e.e_id, 
          e.first_name, 
          e.last_name, 
          c.title, 
          c.cr_id
            FROM company_role c 
            INNER JOIN employees e ON c.cr_id = e.cr_id;
    SELECT * FROM company_role;