import Joi from "joi";

const validatePassword = Joi.string()
    .required()
    .min(8)
    .max(255)
    .regex(/^(?=.*[A-Z])(?=.*[a-z]).{8,255}$/)
    .messages({
        'string.empty': 'The password cannot be empty.',
        'string.min': 'The password must be longer than 8 characters.',
        'string.max': 'The should not contain more than 255 characters.',
        'string.pattern.base': 'The password must be contain at least one capital and small letter.'
    });

const validateLastName = Joi.string()
    .pattern(/^[A-Za-z]+$/)
    .required()
    .messages({
        'string.empty': 'Last name cannot be empty',
        'string.pattern.base': 'Last name must consist of letters only',
    });

const validateFirstName = Joi.string()
    .required()
    .pattern(/^[A-Za-z]+$/)
    .messages({
        'string.empty': 'First name cannot be empty',
        'string.pattern.base': 'First name must consist of letters only',
    });

 const validateCity = Joi.string()
    .required()
    .pattern(/^[A-Za-z]+$/)
    .messages({
        'string.empty': 'City cannot be empty',
        'string.pattern.base': 'City must consist of letters only',
    });

const validateRegion = Joi.string()
    .required()
    .pattern(/^[A-Za-z]+$/)
    .messages({
        'string.empty': 'Region cannot be empty',
        'string.pattern.base': 'Region must consist of letters only'
    });

const validateZipCode = Joi.string()
    .required()
    .min(3)
    .max(15)
    .messages({
        'string.min': 'Zip code must be longer than 3 characters.',
        'string.max': 'Zip code should not contain more than 15 characters.',
        'string.empty': 'Zip code cannot be empty',
    });

const validateBuild = Joi.string()
    .required()
    .min(1)
    .messages({
        'string.empty': 'Build number cannot be empty',
    });

const validatePhoneNumber = Joi.string()
    .required()
    .pattern(/^[0-9]{10}$/)
    .messages({
        'string.empty': 'Phone number cannot be empty',
        'string.pattern.base': 'Phone number must consist of 10 digits',
        'any.required': 'Phone number is required'
    });

const validateStreet = Joi.string()
    .required()
    .messages({
        'string.empty': 'Street cannot be empty',
    });

const validateEmail = Joi.string()
    .required()
    .min(1)
    .max(320)
    .regex(/\b[\w.%-]+@[-.\w]+\.[A-Za-z]{2,4}\b/)
    .messages({
        'string.empty': 'The email cannot be empty.',
        'string.min': 'The email must contain at least 1 character.',
        'string.max': 'The email should not contain more than 320 characters.',
        'string.pattern.base': 'The email must contain a valid ending.'
    });

export {
    validateEmail,
    validatePassword,
    validateRegion,
    validateCity,
    validateBuild,
    validateZipCode,
    validatePhoneNumber,
    validateFirstName,
    validateLastName,
    validateStreet
};