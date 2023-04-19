import Joi from 'joi';

import { validateEmail, validatePassword } from '../../validators';

const logInValidator = Joi.object({
    email: validateEmail,
    password: validatePassword,
});

export { logInValidator };