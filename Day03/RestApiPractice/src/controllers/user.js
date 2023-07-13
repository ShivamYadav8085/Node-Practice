import createError from "http-errors";
import * as userService from "../services/user.js";
const register = async (req, res, next) => {
  const newUser = req.body;
  try {
    const response = userService.register(newUser);
    return res.status(201).json(response);
  } catch (error) {
    next(createError(500, error));
  }
};

const login = async (req, res, next) => {
  const credentials = req.body;
  try {
    const response = await userService.login(credentials);
    return res.status(200).json({ token: response });
  } catch (error) {
    if (error.name === "WrongCredentialError")
      return next(createError(401, error.message));
    else return next(createError(500, error.message));
  }
};

export { register, login };
