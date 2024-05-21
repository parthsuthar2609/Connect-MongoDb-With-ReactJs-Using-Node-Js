import React, { useState, useEffect } from 'react';

const Forms = () => {
  const [value, setValue] = useState({
    name: '',
    email: '',
    password: '',
    verify: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate password and verify password match
    if (value.password !== value.verify) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: value.name,
          email: value.email,
          password: value.password
        })
      });

      if (response.ok) {
        alert('User registered successfully!');
      } else {
        alert('Registration failed!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3001');
        const data = await res.json();
        console.log(data);
        setValue((prevValue) => ({
          ...prevValue,
          // Assuming you're fetching the first user's data for demonstration
          ...data[0]
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex justify-center min-h-screen items-center bg-gray-100'>
      <form
        className='bg-white p-6 rounded shadow-stone-950 w-full max-w-sm border-spacing-4'
        onSubmit={handleSubmit}
      >
        <div className='text-3xl text-cyan-500 text-center mb-3'>Welcome</div>
        <div className='mb-4'>
          <label htmlFor='name' className='block font-medium text-gray-700'>
            Name:<sup className='text-lg text-red-600'>*</sup>
          </label>
          <input
            type='text'
            name='name'
            className='mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm'
            placeholder='Enter Your Name'
            autoComplete='off'
            value={value.name}
            onChange={handleChange}
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='email' className='block font-medium text-gray-700'>
            Email:<sup className='text-lg text-red-600'>*</sup>
          </label>
          <input
            type='email'
            name='email'
            className='mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm'
            placeholder='Enter Your Email'
            autoComplete='off'
            value={value.email}
            onChange={handleChange}
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='password' className='block font-medium text-gray-700'>
            Password:<sup className='text-lg text-red-600'>*</sup>
          </label>
          <input
            type='password'
            name='password'
            className='mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm'
            placeholder='Enter Password'
            autoComplete='off'
            value={value.password}
            onChange={handleChange}
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='verify' className='block font-medium text-gray-700'>
            Verify Password:<sup className='text-lg text-red-600'>*</sup>
          </label>
          <input
            type='password'
            name='verify'
            className='mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm'
            placeholder='Please Enter Password For Verify'
            autoComplete='off'
            value={value.verify}
            onChange={handleChange}
          />
        </div>

        <button
          type='submit'
          className='bg-cyan-500 p-2 rounded shadow-md w-full mt-5 font-medium text-gray-700'
        >
          Register
        </button>
        <div className='mt-4'>
          <h6>
            The <sup className='text-lg text-red-600'>*</sup> Field Must be Required
          </h6>
        </div>
      </form>
    </div>
  );
};

export default Forms;
