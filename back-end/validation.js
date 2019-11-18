import Joi from '@hapi/joi';

const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(8).required().email(),
    password: Joi.string().min(8).required()
});

const registerValidation = (userInput) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(8).required().email(),
        password: Joi.string().min(8).required()
    });
    return schema.validate(userInput);
}

const loginValidation = (userInput) => {
    const schema = Joi.object({
        email: Joi.string().min(8).required().email(),
        password: Joi.string().min(8).required()
    });
    return schema.validate(userInput);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;