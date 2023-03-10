import Joi from 'joi';
import logger from '../logger/index.js';

const genrateOtpSchema = Joi.object({
    username:  Joi.string().alphanum().min(3).max(30).required()
});

const confirmOtpSchema = Joi.object({
    username:  Joi.string().alphanum().min(3).max(30).required(),
    otp: Joi.number().min(1000).max(9999).required()
});

const validateGenerateOtp = (obj) => {
    const data = genrateOtpSchema.validate(obj);
    logger.silly('valdate output ',data);

    if(data.error){
        return { status: data.error.isJoi, message: data.error.message};
    } else {
        return { status: false, message: 'pass'};
    }
};

const validateConfirmOtp = (obj) => {
    const data = confirmOtpSchema.validate(obj);
    logger.silly('valdate output ',data);

    if(data.error){
        return { status: data.error.isJoi, message: data.error.message};
    } else {
        return { status: false, message: 'pass'};
    }
};

export { validateGenerateOtp, validateConfirmOtp };