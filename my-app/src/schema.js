import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string()
        .required('name is required')
        .min(3, 'name must be 3 or longer'),
    email: yup.string()
        .email('Must be a valid email')
        .required('email is required'),
    tos: yup.boolean(),

})