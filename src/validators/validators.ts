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
        'string.pattern.base': 'The password must be contain at least one capital letter.'
    });

const validateFirstName = Joi.string()
    .trim()
    .pattern(/^[A-Za-z]+$/)
    .required()
    .messages({
        'string.empty': 'First name cannot be empty',
        'string.pattern.base': 'First name must consist of letters only',
        'any.required': 'First name is required'
    });

const validateLastName = Joi.string()
    .trim()
    .pattern(/^[A-Za-z]+$/)
    .required()
    .messages({
        'string.empty': 'Last name cannot be empty',
        'string.pattern.base': 'Last name must consist of letters only',
        'any.required': 'Last name is required'
    });

const validateCity = Joi.string()
    .trim()
    // .required()
    .messages({
        'string.empty': 'City cannot be empty',
        'any.required': 'City is required'
    });

const validateRegion = Joi.string()
    .trim()
    // .required()
    .messages({
        'string.empty': 'Region cannot be empty',
        'any.required': 'Region is required'
    });

const validateZipCode = Joi.string()
    .trim()
    // .required()
    .messages({
        'string.empty': 'Zip code cannot be empty',
        'any.required': 'Zip code is required'
    });

const validateBuild = Joi.string()
    .trim()
    .required()
    .messages({
        'string.empty': 'Build number cannot be empty',
        'any.required': 'Build number is required'
    });
const validateStreet = Joi.string()
    // .required()
    .messages({
        'string.empty': 'Street cannot be empty',
        'any.required': 'Street is required'
    });

const validatePhoneNumber = Joi.string()
    .trim()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
        'string.empty': 'Phone number cannot be empty',
        'string.pattern.base': 'Phone number must consist of 10 digits',
        'any.required': 'Phone number is required'
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
}