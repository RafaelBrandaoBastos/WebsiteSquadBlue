import * as yup from 'yup';

export const formBasicSchema = yup
    .object({
        name: yup
            .string()
            .required('Please enter your Name')
            .matches(
                /^[a-zA-Zà-úÀ-Ú]+(?:\s[a-zA-Zà-úÀ-Ú]+)+$/,
                'Fullname invalid',
            ),
        nickname: yup.string().matches(),
        email: yup
            .string()
            .required('Please enter your Email')
            .matches(
                /^[a-z0-9._-]+(?:\.[a-z0-9._-]+)*@(?:[a-z0-9](?:[a-z-]*[a-z])?.)+[a-z](?:[a-z]*[a-z]){1,}?$/,
                'Email invalid',
            ),
        phone: yup.string().optional().matches(),

        day: yup
            .number()
            .positive()
            .integer()
            .min(1)
            .max(31)
            .required('Please enter your age')
            .typeError('Please enter your age'),
        month: yup
            .number()
            .positive()
            .integer()
            .min(1)
            .max(12)
            .required('Please enter your age')
            .typeError('Please enter your age'),
        year: yup
            .number()
            .positive()
            .integer()
            .min(1901)
            .max(2004)
            .required('Please enter your age')
            .typeError('Please enter your age'),
        age: yup
            .number()
            .positive()
            .integer()
            .required('Please enter your age')
            .typeError('Please enter your age'),

        checkbox: yup.boolean().isTrue('Please confirm the terms'),
    })
    .required();

export const formCertificatesSchema = yup
    .object({
        certificates: yup.string(),
        teamname: yup
            .string()
            .required('Please enter your Team Name')
            .matches(
                /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'-\s]+$/,
                'Team Name Invalid',
            ),
        institution: yup
            .string()
            .required('Please enter your Institution')
            .matches(
                /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'-\s]+$/,
                'Institution Name Invalid',
            ),
        graduation: yup
            .string()
            .required('Please enter your Graduation')
            .matches(
                /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'-\s]+$/,
                'Graduation Name Invalid',
            ),
    })
    .required();

export const formSocialSchema = yup
    .object({
        linkedin: yup
            .string()
            .required('Please enter your Linkedin account')
            .matches(
                /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/,
                'Linkedin Invalid',
            ),
        github: yup
            .string()
            .required('Please enter your Github account')
            .matches(
                /^(?:https?:\/\/)?(?:www\.)?(?:github\.com)\/[a-zA-Zà-úÀ-Ú.,-_!@#$%&*´`;:|]/,
                'Github Invalid',
            ),
    })
    .required();
