CREATE DATABASE EM;
USE EM;
CREATE TABLE employees(
    emp_no INT AUTO_INCREMENT PRIMARY KEY,
    birth_date date,
    first_name varchar(14) NOT NULL,
    last_name varchar(16),
    gender enum('M', 'F'),
    hire_date date NOT NULL
);
desc employees;
CREATE TABLE salaries(
    emp_no INT,
    salary INT NOT NULL,
    from_date date,
    to_date date NOT NULL,
    PRIMARY KEY (emp_no, from_date),
    FOREIGN KEY (emp_no) REFERENCES employees(emp_no)
);
desc salaries;
CREATE TABLE titles(
    emp_no INT,
    title VARCHAR(50) NOT NULL,
    from_date date,
    to_date date NOT NULL,
    PRIMARY KEY (emp_no, title, from_date),
    FOREIGN KEY (emp_no) REFERENCES employees(emp_no)
);
desc titles;
CREATE TABLE departments(
    dept_no INT AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(40)
);
desc departments;
CREATE TABLE dept_manager(
    dept_no INT,
    emp_no INT,
    from_date date,
    to_date date NOT NULL,
    PRIMARY KEY (emp_no, dept_no),
    FOREIGN KEY (emp_no) REFERENCES employees(emp_no),
    FOREIGN KEY (dept_no) REFERENCES departments(dept_no)
);
desc dept_manager;
CREATE TABLE dept_emp(
    dept_no INT,
    emp_no INT,
    from_date date,
    to_date date NOT NULL,
    PRIMARY KEY (emp_no, dept_no),
    FOREIGN KEY (emp_no) REFERENCES employees(emp_no),
    FOREIGN KEY (dept_no) REFERENCES departments(dept_no)
);
desc dept_emp;