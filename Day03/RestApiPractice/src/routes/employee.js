import { Router } from 'express';

import * as employeeController from '../controllers/employee.js';

const router = Router();

router.get('/salary', employeeController.salaryAndNamesFilteredByAgeRange);
router.get(
	'/sorted',
	employeeController.getAllEmployeesSortedByAgeAndHiredDate,
);
router.get('/details', employeeController.getEmployeesDetails);
router.get('/details/:id', employeeController.getEmployeesDetailsById);
router.get('/managers', employeeController.getAllDepartmentsManagersWithSalary);
router.get(
	'/departments/max_salary',
	employeeController.maxSalaryEmployeesDepartmentWise,
);
router.get(
	'/departments/total_salary',
	employeeController.totalSalaryOfDepartment,
);

export { router };
