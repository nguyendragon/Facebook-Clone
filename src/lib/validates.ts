import Joi from 'joi';

export const signInSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .regex(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)
        .required()
        .messages({
            'string.email': 'Vui lòng nhập địa chỉ email hợp lệ',
            'string.empty': 'Vui lòng nhập địa chỉ email',
            'any.required': 'Email là trường bắt buộc',
            'string.pattern.base': 'Email phải có định dạng @gmail.com',
        }),
    password: Joi.string().min(6).max(50).required().messages({
        'string.empty': 'Vui lòng nhập mật khẩu',
        'string.min': 'Mật khẩu phải chứa ít nhất {#limit} ký tự',
        'string.max': 'Mật khẩu không được dài quá {#limit} ký tự',
        'any.required': 'Mật khẩu là trường bắt buộc',
    }),
    checked: Joi.boolean().valid(true).required().messages({
        'any.only': 'Hãy đồng ý với các điều khoản và điều kiện',
    }),
});

export const signUpSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .regex(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)
        .required()
        .messages({
            'string.email': 'Vui lòng nhập địa chỉ email hợp lệ',
            'string.empty': 'Vui lòng nhập địa chỉ email',
            'any.required': 'Email là trường bắt buộc',
            'string.pattern.base': 'Email phải có định dạng @gmail.com',
        }),
    password: Joi.string().min(6).max(50).required().messages({
        'string.empty': 'Vui lòng nhập mật khẩu',
        'string.min': 'Mật khẩu phải chứa ít nhất {#limit} ký tự',
        'string.max': 'Mật khẩu không được dài quá {#limit} ký tự',
        'any.required': 'Mật khẩu là trường bắt buộc',
    }),
    password_confirm: Joi.string().required().valid(Joi.ref('password')).messages({
        'string.empty': 'Vui lòng nhập lại mật khẩu',
        'any.only': 'Mật khẩu nhập lại không khớp',
        'any.required': 'Vui lòng nhập lại mật khẩu',
    }),
    checked: Joi.boolean().valid(true).required().messages({
        'any.only': 'Hãy đồng ý với các điều khoản và điều kiện',
    }),
});
