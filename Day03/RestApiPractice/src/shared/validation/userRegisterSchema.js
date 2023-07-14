import Joi from "joi";

const userRegisterSchema = Joi.object({
    name:Joi.string(),
    email:Joi.string().email({minDomainSegments:2, tlds:{allow:["com","net"]}}).required(),
    password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
})
export {userRegisterSchema}