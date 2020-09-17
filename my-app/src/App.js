import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import axios from 'axios';
import * as yup from 'yup';
import schema from './schema';

const initialFormValues ={
  name: '',
  email: '',
  password: '',
  tos: false,
}

const initialFormErrors ={
  name: '',
  email:'',
  password:'',
}

const initialUsers = []
const initialDisabled = true;

function App() {

  const [users, setUsers] = useState(initialUsers)  
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
 
  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        debugger
      })
  }

  const postUser = newUser => {
    axios.post("https://reqres.in/api/users", newUser)
      .then(res => {
        setUsers([...users, res.data])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        debugger
      })
      .finally(() => {

      })
  }
  
  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors, [name]: ""
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      })
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      tos: formValues.tos,
    }

    postUser(newUser)
  }




  useEffect(() => {
    getUsers()
  },[])

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  },[formValues])

  return (
    <div className="App">
      <Form 
        users={users} 
        // setUsers={setUsers}
        values={formValues}
        setValues={setFormValues}
        errors={formErrors}
        disabled={disabled}
        change={inputChange}
        submit={formSubmit}
        />
    </div>
  );
}

export default App;
