const { body, validationResult } = require('express-validator');

function validateResult(req,res,next){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

const uservalidation = [
    body('name')
    .isString().withMessage('name should be in string'),

    body('email')
    .isEmail().withMessage("Email should in email format"),

    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 8, max: 128 }).withMessage('Password must be between 8 and 128 characters')
        .matches(/^(?=.*[A-Za-z])(?=.*\d).+$/).withMessage('Password must contain at least one letter and one number'),

        validateResult,
]

module.exports = {uservalidation};
