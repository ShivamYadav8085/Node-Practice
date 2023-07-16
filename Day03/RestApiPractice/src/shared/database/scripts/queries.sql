-- Create app that will return all departments manager with his salary
-- o [{
-- o manager_name: '',
-- o manager_gender: '',
-- o department_name:'',
-- o salary: ''
-- o }]
SELECT Concat(E.first_name, " ", E.last_name) as manager_name,
    CASE
        WHEN E.gender = 'M' THEN 'Male'
        ELSE 'Female'
    END AS manager_gender,
    dept_name as department_name,
    salary
FROM employees E
    JOIN dept_manager DM ON E.emp_no = DM.emp_no
    JOIN salaries S ON E.emp_no = S.emp_no
    JOIN departments D ON DM.dept_no = D.dept_no;
-- Create Api to find department wise max salary with employee name
-- o [{
-- o department_name:'',
-- o emloyee_name: '',
-- o max_salary: ''
-- o }]
SELECT D.dept_name as department_name,
    Concat(E.first_name, " ", E.last_name) AS employee_name,
    S.salary
FROM employees E
    JOIN dept_emp DE ON E.emp_no = DE.emp_no
    JOIN salaries S ON E.emp_no = S.emp_no
    JOIN departments D ON DE.dept_no = D.dept_no
    JOIN (
        SELECT DE.emp_no,
            MAX(S.salary) as salary,
            DE.dept_no
        FROM dept_emp DE
            JOIN salaries S ON S.emp_no = DE.emp_no
        GROUP BY DE.dept_no
    ) ms ON ms.salary = S.salary;
-- create api to find sum of department's employee salary
-- o [{
-- o department_name: '',
-- o totalSalary: ''
-- o }]
SELECT D.dept_name as department_name,
    SUM(S.salary) AS totalSalary
FROM employees E
    JOIN dept_emp DE ON E.emp_no = DE.emp_no
    JOIN departments D ON D.dept_no = DE.dept_no
    JOIN salaries S ON S.emp_no = DE.emp_no
GROUP BY D.dept_no;
--  create Api to find all employee age is between 30 to 40 with below data
-- o [{
-- o employee_name: '',
-- o salary:''
-- o }]
SELECT CONCAT(E.first_name, " ", last_name) AS employee_name,
    S.salary AS salary
FROM employees E
    JOIN salaries S ON E.emp_no = S.emp_no
WHERE TIMESTAMPDIFF(YEAR, E.birth_date, CURRENT_DATE()) BETWEEN 30 AND 40;
-- create api to fetch all employee with below information with pagination (Per 
-- page record should be 10 and sorted by age)
-- o [{
-- o employee_name: '',
-- o department_name: '',
-- o employee_age: ''.
-- o employee_title: ''
-- o }]
SELECT CONCAT(E.first_name, " ", last_name) AS employee_name,
    d.dept_name as department_name,
    TIMESTAMPDIFF(YEAR, E.birth_date, CURRENT_DATE()) AS employee_age,
    T.title AS employee_title
FROM employees E
    JOIN titles T ON E.emp_no = T.emp_no
    JOIN dept_emp de ON E.emp_no = de.emp_no
    JOIN departments d ON d.dept_no = de.dept_no
LIMIT 2 offset 5;