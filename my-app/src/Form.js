import React, { useState } from 'react';






export default function Form(props){

    const { users, setUsers, values, setValues, submit, change, errors, disabled } = props;
    

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        setValues({...values, [name]: value})
        
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
        
        
    }
  


    return(
        

        <form onSubmit={onSubmit}>
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.tos}</div>

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
                    value={values.tos}
                    onChange={onChange}

                />
            </label>
            </div>
            <br/>
            <div>
            <button disabled={disabled}>Submit</button>
            </div>
        </form>
    )
}