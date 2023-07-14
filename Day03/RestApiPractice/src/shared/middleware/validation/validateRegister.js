import createError from "http-errors"

import {userRegisterSchema} from "../../validation/userRegisterSchema.js"

const validateUserRegister = (req,res)=>{
    const {error}=userRegisterSchema.validate(req.body)
    if(error){
        const {details} = error
        console.log(error);
        console.log(details);
        const message = details.map(errorDetail => errorDetail.message.replace(/['"]/g, '')).join(',')
        next(createError(422,message))
    }else{
        next();
    }
}
export {validateUserRegister}