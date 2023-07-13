import jwt from 'jsonwebtoken'
import createError from "http-errors";

const authenticate = (req,res,next)=>{
    const bearerToken = req.headers["authorization"]
    const {verify} = jwt
    const token = bearerToken.split(' ')[1]
    try {
        verify(token,process.env.PRIVATE_KEY)
        next()
    } catch (error) {
        next(createError(403,new Error("You are not allowed to access this route")))
    }
}

export {authenticate}