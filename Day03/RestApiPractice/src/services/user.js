import { User } from "../Models/user.js";
import jwt from "jsonwebtoken";

const register = async (user) => {
  try {
    const registeredUser = await User.create(user);
    return registeredUser;
  } catch (error) {
    throw error;
  }
};

const login = async (userCredentials) => {
  const { sign } = jwt;
  const { email, password } = userCredentials;
  try {
    const userWithEmail = await User.findOne({ email: email });
    if (userWithEmail && userWithEmail.password === password) {
      const token = sign(userCredentials.email, process.env.PRIVATE_KEY, {
        algorithm: "HS256",
      });
      return token;
    } else {
      const wrongCredentialError = new Error("Wrong credentials");
      wrongCredentialError.name = "WrongCredentialError";
      throw wrongCredentialError;
    }
  } catch (error) {
    throw error;
  }
};

export { register, login };
