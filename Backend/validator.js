const Joi = require("joi")

const validator =(schema)=>(payload)=> schema.validate(payload,{abortEarly:false})

const Schema = Joi.object({
    name:Joi.string().required(),
    year:Joi.number(),
    description:Joi.string().required(),
    feature:Joi.string().required(),
    image:Joi.string().required()
})

exports.validateEntry = validator(Schema    )