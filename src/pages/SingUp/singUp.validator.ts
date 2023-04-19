import Joi from 'joi';
import {
    validateCity,
    validateFirstName,
    validateLastName,
    validatePhoneNumber,
    validateEmail,
    validatePassword,
    validateRegion,
    validateStreet,
    validateZipCode,
    validateBuild
} from '../../validators';

export const registerValidator = Joi.object({
    first_name: validateFirstName,
    last_name: validateLastName,
    phone_number: validatePhoneNumber,
    email: validateEmail,
    password: validatePassword,
    address: Joi.object({
        city: validateCity,
        region: validateRegion,
        build_number: validateBuild,
        zip_code: validateZipCode,
        street: validateStreet,
    }),
});
