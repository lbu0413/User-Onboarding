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

const initialFormErros ={
  name: '',
  email:'',
  password:'',
}


 
function App() {

  const [users, setUsers] = useState({})  
  const [formValues, setFormValues] = useState(initialFormValues)


  return (
    <div className="App">
      <Form 
        users={users} 
        setUsers={setUsers}
        values={formValues}
        setValues={setFormValues}
        />
    </div>
  );
}

export default App;
