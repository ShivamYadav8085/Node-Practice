import { queryDatabase } from '../shared/database/connections/connectMySQL.js';

const getAllEmployeesSortedByAgeAndHiredDate = async () => {
	try {
		const query =
			'SELECT *, TIMESTAMPDIFF(YEAR, birth_date, CURDATE()) AS age FROM employees ORDER BY age ASC, hire_date DESC';
		const row = await queryDatabase(query);
		console.log(row);
		return row;
	} catch (error) {
		throw error;
	}
};

const getAllDepartmentsManagersWithSalary = async () => {
	try {
		const query = `
        SELECT Concat(E.first_name," ",E.last_name) as manager_name,
            CASE
                WHEN E.gender='M' THEN 'Male'
                ELSE 'Female'
            END AS manager_gender,
            dept_name as department_name,
            salary
            FROM employees E
                JOIN dept_manager DM ON E.emp_no=DM.emp_no 
                JOIN salaries S ON E.emp_no=S.emp_no 
                JOIN departments D ON DM.dept_no=D.dept_no; `;
		const row = await queryDatabase(query);
		return row;
	} catch (error) {
		throw error;
	}
};

const maxSalaryEmployeesDepartmentWise = async () => {
	try {
		const query = `
        SELECT D.dept_name as department_name, Concat(E.first_name," ",E.last_name) AS employee_name,S.salary FROM employees E 
            JOIN dept_emp DE ON E.emp_no = DE.emp_no 
            JOIN salaries S ON E.emp_no=S.emp_no
            JOIN departments D ON DE.dept_no = D.dept_no
            JOIN (SELECT DE.emp_no, MAX(S.salary) as salary, DE.dept_no FROM dept_emp DE 
                    JOIN salaries S 
                    ON S.emp_no = DE.emp_no 
                    GROUP BY DE.dept_no) ms ON ms.salary=S.salary`;
		const row = await queryDatabase(query);
		return row;
	} catch (error) {
		throw error;
	}
};

const totalSalaryOfDepartment = async () => {
	try {
		const query = `
            SELECT D.dept_name as department_name,SUM(S.salary) AS totalSalary FROM employees E 
            JOIN dept_emp DE ON E.emp_no=DE.emp_no 
            JOIN departments D ON D.dept_no=DE.dept_no 
            JOIN salaries S ON S.emp_no = DE.emp_no
            GROUP BY D.dept_no`;
		const row = await queryDatabase(query);
		return row;
	} catch (error) {
		throw error;
	}
};

const salaryAndNamesFilteredByAgeRange = async (minAge, maxAge) => {
	try {
		const query = `SELECT CONCAT(E.first_name," ",last_name) AS employee_name, S.salary AS salary FROM employees E 
        JOIN salaries S ON E.emp_no = S.emp_no
        WHERE TIMESTAMPDIFF(YEAR,E.birth_date,CURRENT_DATE()) BETWEEN ? AND ?`;
		const row = await queryDatabase(query, [
			minAge ? minAge : 30,
			maxAge ? maxAge : 40,
		]);
		return row;
	} catch (error) {
		throw error;
	}
};

const getEmployeesDetails = async (limit, offset) => {
	try {
		const query = `SELECT CONCAT(E.first_name," ",last_name) AS employee_name,d.dept_name as department_name, 
						TIMESTAMPDIFF(YEAR,E.birth_date,CURRENT_DATE()) AS employee_age, T.title AS employee_title 
						FROM employees E JOIN titles T ON E.emp_no = T.emp_no 
						JOIN dept_emp de ON E.emp_no=de.emp_no 
						JOIN departments d ON d.dept_no = de.dept_no LIMIT ? offset ?`;
		const row = await queryDatabase(query, [limit, offset]);
		return row;
	} catch (error) {
		throw error;
	}
};
const getEmployeesDetailsById = async (id) => {
	try {
		const query = `SELECT CONCAT(E.first_name," ",last_name) AS employee_name,d.dept_name as department_name, 
						TIMESTAMPDIFF(YEAR,E.birth_date,CURRENT_DATE()) AS employee_age, T.title AS employee_title 
						FROM employees E JOIN titles T ON E.emp_no = T.emp_no 
						JOIN dept_emp de ON E.emp_no=de.emp_no 
						JOIN departments d ON d.dept_no = de.dept_no WHERE E.emp_no = ?`;
		const row = await queryDatabase(query, [id]);
		return row;
	} catch (error) {
		throw error;
	}
};

export {
	getAllEmployeesSortedByAgeAndHiredDate,
	getAllDepartmentsManagersWithSalary,
	maxSalaryEmployeesDepartmentWise,
	totalSalaryOfDepartment,
	salaryAndNamesFilteredByAgeRange,
	getEmployeesDetails,
	getEmployeesDetailsById,
};
