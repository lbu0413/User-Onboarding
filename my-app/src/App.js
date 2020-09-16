import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import axios from 'axios';
import * as yup from 'yup';

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

const initialForm = []
const initialDisabled = true;

function App() {

  const [users, setUsers] = useState({})  
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [form, setForm] = useState(initialForm);


  return (
    <div className="App">
      <Form 
        users={users} 
        setUsers={setUsers}
        values={formValues}
        setValues={setFormValues}
        errors={formErrors}
        disabled={disabled}
        />
    </div>
  );
}

export default App;
