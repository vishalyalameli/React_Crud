import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Create() {
  const [values, setValues] = useState({
    id: '',
    name: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    const newErrors = {};
    if (!values.id.trim()) newErrors.id = 'id is required.';
    if (!values.name.trim()) newErrors.name = 'Name is required.';
    if (!values.email.trim()) newErrors.email = 'Email is required.';
    if (!values.phone.trim()) newErrors.phone = 'Phone number is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      // Send data to the server if no errors
      axios.post('http://localhost:3000/users', values)
        .then(res => {
          console.log(res);
          navigate('/');
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-750 border bg-white shadow px-2 pt-3 pb-5 rounded'>
        <h1>Add a user</h1>
        <form onSubmit={handleSubmit}>
        <div className='mb-2'>
            <label htmlFor="id">Id:</label>
            <input
              type="text"
              id='id'
              className='form-control'
              placeholder='Enter Id'
              onChange={e => setValues({ ...values, id: e.target.value })}
            />
            {errors.id && <span className='text-danger'>{errors.id}</span>}
          </div>
          <div className='mb-2'>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name='name'
              className='form-control'
              placeholder='Enter Name'
              onChange={e => setValues({ ...values, name: e.target.value })}
            />
            {errors.name && <span className='text-danger'>{errors.name}</span>}
          </div>
          <div className='mb-2'>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name='email'
              className='form-control'
              placeholder='Enter Email'
              onChange={e => setValues({ ...values, email: e.target.value })}
            />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              name='phone'
              className='form-control'
              placeholder='Enter Phone Number'
              onChange={e => setValues({ ...values, phone: e.target.value })}
            />
            {errors.phone && <span className='text-danger'>{errors.phone}</span>}
          </div>
          <button className='btn btn-success'>Submit</button>
          <Link to="/" className='btn btn-primary ms-3'>Back</Link>
        </form>
      </div>
    </div>
  );
}

export default Create;
