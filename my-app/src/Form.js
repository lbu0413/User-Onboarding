import React, { useState } from 'react';



const initialFormValues ={
    name: '',
    email: '',
    password: '',
    tos: false,
  }


export default function Form(props){

    const { values, submit, change } = props;
    const [formValues, setFormValues] = useState(initialFormValues)

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
        const newMember = {
            name: values.name.trim(),
            email: values.email.trim(),
            tos: values.tos
        }
    }


    return(
        <form onSubmit={onSubmit}>
            <br/>
            <div>
            <label>Name : 
                <input 
                    type='text'
                    name='name'
                    value={formValues.name}
                    onchange={onChange}
                    
                />
                
            </label>
            </div>

            <div>
            <label>Email : 
                <input 
                    type='email'
                    name='email'
                    value={formValues.email}
                    onchange={onChange}

                />
            </label>
            </div>

            <div>
            <label>Password : 
                <input 
                    type='password'
                    name='password'
                    value={formValues.password}
                    onchange={onChange}

                />
            </label>
            </div>
            <div>
            <br/>
            <label>Terms of Service
                <input
                    type='checkbox'
                    name='TOS'
                    checked={formValues.tos}
                    onchange={onChange}

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