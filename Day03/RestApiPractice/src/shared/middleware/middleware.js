import {bookSchema} from "../validation/bookSchema.js"

const validate = (req,res,next)=>{
    const {error}=bookSchema.validate(req.body)
    if(error){
        const {details} = error
        const message = details.map(errorDetail => errorDetail.message).join(',')
        res.json({error:message})
    }else{
        next();
    }
}

export {validate}