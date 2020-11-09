import React from 'react';
import * as yup from 'yup';

const Pizza = ({change, values, errors, submit}) => {

    const onChange = (event) => {

        const {name, value, checked, type} = event.target;
        const val = type ==="checkbox" ? checked : value;
        change(name, val);
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
        console.log(values)
      }

    return(
        <form onSubmit={onSubmit}>
            <label htmlFor='name'>
                Name: 
                <input type='text' id='name' name='name' value={values.name} onChange={onChange}/>
            </label>
            <br />
            <div class='errorName'>{errors.name}</div>
            <br />
            <label htmlFor='size'>
                Pizza Size: 
                <select id='size' name='size' value={values.size} onChange={onChange}>
                    <option value="">---Select a Size---</option>
                    <option value="small">Small - 9"</option>
                    <option value="medium">Medium - 12"</option>
                    <option value="large">Large - 15"</option>
                </select>
            </label>
            <br />
            <div class='errorEmail'>{errors.size}</div>
            <br />
            <label htmlFor='cheese'>
                Extra cheese 
                <input type='checkbox' id='checkbox' name='cheese' onChange={onChange}/>
            </label>
            <label htmlFor='pepperoni'>
                Pepperoni 
                <input type='checkbox' id='checkbox' name='pepperoni' onChange={onChange}/>
            </label>
            <label htmlFor='mushroom'>
                Mushroom 
                <input type='checkbox' id='checkbox' name='mushroom' onChange={onChange}/>
            </label>
            <label htmlFor='bacon'>
                Bacon 
                <input type='checkbox' id='checkbox' name='bacon' onChange={onChange}/>
            </label>
            <label htmlFor='chicken'>
                Chicken 
                <input type='checkbox' id='checkbox' name='chicken' onChange={onChange}/>
            </label>
            <br />
            <label htmlFor='instructions'>
                Special Instructions 
                <input type='text' id='instructions' name='instructions' onChange={onChange}/>
            </label>
            <br />
            <div>{errors.instructions}</div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Pizza;