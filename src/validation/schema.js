
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required().min(2),
    size: yup.string().required(),
    cheese: yup.boolean(),
    pepperoni: yup.boolean(),
    mushroom: yup.boolean(),
    bacon: yup.boolean(),
    chicken: yup.boolean(),
    instructions: yup.string().required(),
})

export default schema;