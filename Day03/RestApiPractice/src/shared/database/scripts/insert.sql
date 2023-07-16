insert into employees(
        birth_date,
        first_name,
        last_name,
        gender,
        hire_date
    )
values ('2000-05-05', 'shiv', 'yadav', 'M', '2022-08-16'),
    (
        '1997-11-01',
        'ragh',
        'sharma',
        'M',
        '2014-11-12'
    ),
    (
        '2002-05-05',
        'apurva',
        'gupta',
        'F',
        '2022-04-11'
    ),
    ('1995-11-21', 'amn', 'tiwari', 'M', '2022-08-22'),
    (
        '1987-01-15',
        'vinita',
        'modi',
        'F',
        '2019-11-06'
    ),
    ('2000-12-09', 'rahul', 'rai', 'M', '2022-08-16'),
    (
        '2001-09-19',
        'chitra',
        'mishra',
        'F',
        '2022-08-16'
    ),
    ('1990-01-01', 'John', 'Doe', 'M', '2020-05-01'),
    ('1992-03-15', 'Jane', 'Smith', 'F', '2019-10-12'),
    (
        '1985-07-20',
        'Michael',
        'Johnson',
        'M',
        '2021-02-28'
    ),
    (
        '1993-12-05',
        'Emily',
        'Davis',
        'F',
        '2022-06-10'
    );
select *
from employees;
insert into salaries(emp_no, salary, from_date, to_date)
values (1, 20000, '2022-08-16', '2022-09-16'),
    (2, 35000, '2022-11-01', '2022-12-01'),
    (8, 50000, '2020-05-01', '2021-12-31'),
    (8, 55000, '2022-01-01', '2023-12-31'),
    (9, 60000, '2019-10-12', '2022-06-30'),
    (10, 45000, '2021-02-28', '2022-12-31'),
    (11, 70000, '2022-06-10', '2023-12-31');
select *
from salaries;
INSERT INTO titles (emp_no, title, from_date, to_date)
VALUES (
        1,
        'Software Engineer',
        '2020-05-01',
        '2023-07-15'
    ),
    (2, 'HR Manager', '2019-10-12', '2022-06-30'),
    (3, 'Sales Associate', '2021-02-28', '2022-12-31'),
    (4, 'Sales Associate', '2022-08-22', '2023-12-31'),
    (5, 'Project Manager', '2022-06-10', '2023-12-31'),
    (6, 'Sales Manager', '2022-02-21', '2023-08-31'),
    (7, 'Team Lead', '2020-11-21', '2023-01-11'),
    (
        8,
        'Associate Software Engineer',
        '2020-02-12',
        '2022-12-31'
    ),
    (9, 'Project Manager', '2017-12-08', '2019-12-31'),
    (
        10,
        'Associate Software Engineer',
        '2022-06-10',
        '2023-12-31'
    ),
    (11, 'Team Lead', '2022-06-10', '2023-12-31')
select *
from titles;
INSERT INTO departments (dept_name)
VALUES ('Engineering'),
    ('HR'),
    ('Sales'),
    ('Finance');
select *
from titles;
INSERT INTO dept_emp (dept_no, emp_no, from_date, to_date)
VALUES (1, 1, '2020-05-01', '2023-07-15'),
    (2, 2, '2019-10-12', '2022-06-30'),
    (2, 3, '2021-02-28', '2022-12-31'),
    (3, 4, '2022-06-10', '2023-12-31');
INSERT INTO dept_manager (dept_no, emp_no, from_date, to_date)
SELECT d.dept_no,
    e.emp_no,
    e.hire_date,
    CURDATE() -- Assuming the current date is the "to_date"
FROM employees e
    JOIN titles t ON e.emp_no = t.emp_no
    JOIN departments d ON LOWER(t.title) LIKE '%manager%';
SELECT E.emp_no as Employee_No,
    concat(first_name, " ", last_name) as Employee_Name,
    gender,
    E.hire_date as Hired_Date,
    T.to_date as To_Date,
    title
FROM employees E
    JOIN titles T ON E.emp_no = T.emp_no
WHERE Lower(T.title) LIKE '%manager%';
insert into dept_manager
VALUES (2, 2, '2014-11-12', '2015-03-01'),
    (1, 5, '2019-11-06', '2019-11-14'),
    (3, 6, '2022-08-16', '2023-05-21'),
    (1, 9, '2019-10-12', '2019-10-17'),
    (4, 13, '2014-12-11', '2021-11-21')