import Joi from 'joi';
import {
    validateBuild,
    validateCity,
    validateEmail,
    validateFirstName,
    validateLastName,
    validatePassword, validatePhoneNumber,
    validateRegion, validateStreet, validateZipCode
} from '../../validators';

const registerValidator = Joi.object({
    firstName: validateFirstName,
    lastName: validateLastName,
    city: validateCity,
    region: validateRegion,
    build_number: validateBuild,
    zip_code:validateZipCode,
    phone_number: validatePhoneNumber,
    email: validateEmail,
    password: validatePassword,
    street:validateStreet
});

export { registerValidator };