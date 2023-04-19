import Joi from 'joi';

import {
    validateFirstName,
    validateLastName,
    validatePhoneNumber,
    validateEmail,
} from '../../validators';

export const settingValidator = Joi.object({
    first_name: validateFirstName,
    last_name: validateLastName,
    phone_number: validatePhoneNumber,
    email: validateEmail,
});