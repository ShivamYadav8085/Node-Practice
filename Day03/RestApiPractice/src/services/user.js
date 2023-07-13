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
  console.log(userCredentials);
  try {
    const userWithEmail = await User.findOne({ email: email });
    if (userWithEmail && userWithEmail.password === password) {
      const token = sign(userCredentials.email, "privatekeystoredinenv", {
        algorithm: "HS256",
      });
      return token;
    } else {
        throw new Error("Wrong credentials")
    }
  } catch (error) {
    throw error
  }
};

export { register,login };
