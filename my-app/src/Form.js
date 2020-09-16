import React, { useState } from 'react';






export default function Form(props){

    const { users, setUsers, values, setValues } = props;
    

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        setValues({...values, [name]: value})
        
        // const valueToUse = type === 'checkbox' ? checked : value;
        // change(name, valueToUse)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        // setValues(initialFormValues);
        const newForm = {
            name: values.name.trim(),
            email: values.email.trim(),
            tos: values.tos,
        }
        setUsers({...users, newForm});
        
        
    }
    // const newUsers = {
    //     name: values.name.trim(),
    //     email: values.email.trim(),
    //     tos: values.tos
    // }


    return(
        <form onSubmit={onSubmit}>
            <br/>
            <div>
            <label>Name : 
                <input 
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={onChange}
                    
                />
                
            </label>
            </div>

            <div>
            <label>Email : 
                <input 
                    type='email'
                    name='email'
                    value={values.email}
                    onChange={onChange}

                />
            </label>
            </div>

            <div>
            <label>Password : 
                <input 
                    type='password'
                    name='password'
                    value={values.password}
                    onChange={onChange}

                />
            </label>
            </div>
            <div>
            <br/>
            <label>Terms of Service
                <input
                    type='checkbox'
                    name='TOS'
                    checked={values.tos}
                    onChange={onChange}

                />
            </label>
            </div>
            <br/>
            <div>
            <button>Submit</button>
            </div>
        </form>
    )
}