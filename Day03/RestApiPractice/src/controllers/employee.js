import createError from 'http-errors';
import * as employeeService from '../services/employee.js';

const getAllEmployeesSortedByAgeAndHiredDate = async (req, res, next) => {
	try {
		const employees =
			await employeeService.getAllEmployeesSortedByAgeAndHiredDate();
		return res.status(200).json(employees);
	} catch (error) {
		next(createError(500, error));
	}
};

const getAllDepartmentsManagersWithSalary = async (req, res, next) => {
	try {
		const employees =
			await employeeService.getAllDepartmentsManagersWithSalary();
		return res.status(200).json(employees);
	} catch (error) {
		next(createError(500, error));
	}
};

const maxSalaryEmployeesDepartmentWise = async (req, res, next) => {
	try {
		const employees =
			await employeeService.maxSalaryEmployeesDepartmentWise();
		return res.status(200).json(employees);
	} catch (error) {
		next(createError(500, error));
	}
};

const totalSalaryOfDepartment = async (req, res, next) => {
	try {
		const employees = await employeeService.totalSalaryOfDepartment();
		return res.status(200).json(employees);
	} catch (error) {
		next(createError(500, error));
	}
};
const salaryAndNamesFilteredByAgeRange = async (req, res, next) => {
	try {
		const { minAge, maxAge } = req.query;
		const employees =
			await employeeService.salaryAndNamesFilteredByAgeRange(
				minAge,
				maxAge,
			);
		return res.status(200).json(employees);
	} catch (error) {
		next(createError(500, error));
	}
};
const getEmployeesDetails = async (req, res, next) => {
	try {
		const { limit, offset } = req.query;
		const employees = await employeeService.getEmployeesDetails(
			parseInt(limit),
			parseInt(offset),
		);
		return res.status(200).json(employees);
	} catch (error) {
		next(createError(500, error));
	}
};
const getEmployeesDetailsById = async (req, res, next) => {
	try {
		const { id } = req.params;
		const employee = await employeeService.getEmployeesDetailsById(
			parseInt(id),
		);
		return res.status(200).json(employee);
	} catch (error) {
		next(createError(500, error));
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
