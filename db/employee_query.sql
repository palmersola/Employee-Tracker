USE employee_tracker;

SELECT 
e.e_id,
e.first_name,
e.last_name,
c.title,
d.department_name,
c.salary,
e.manager
      FROM company_role c
      INNER JOIN employees e 
      ON c.cr_id = e.cr_id
      INNER JOIN department d
      ON d.d_id = c.d_id;

      