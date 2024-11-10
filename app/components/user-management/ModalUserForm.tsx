'use client';
import React, { useState } from 'react';
import validator from 'validator';
import { FaEye } from 'react-icons/fa';

interface ModalUserFormProps {
  handleSubmission: () => void;
}

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  age: string;
  password: string;
}
const ModalUserForm: React.FC<ModalUserFormProps> = ({ handleSubmission }) => {
  const [showPassword, setShowPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    age: '',
    password: '',
  });
  
  const togglePassword = () => {
    setShowPassword(() => !showPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: FormData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addUserData = async () => {
    const { first_name, last_name, email, age, password } = formData;
    try {
      if (!first_name || !last_name || !email || !age) {
        throw new Error('Please fill in all fields');
      }
      if (!validator.isEmail(email)) {
        throw new Error('Please enter a valid email');
      }
      if (!validator.isInt(age, { min: 1 })) {
        throw new Error('Please enter a valid age');
      }
      if (!validator.isLength(first_name, { min: 3, max: 50 })) {
        throw new Error('Name must be between 3 and 50 characters');
      }
      if (!validator.isLength(last_name, { min: 3, max: 50 })) {
        throw new Error('Name must be between 3 and 50 characters');
      }
      if (!validator.isLength(password, { min: 6 })) {
        throw new Error('Password must be at least 6 characters');
      }
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error('Failed to add user');
      }
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        age: '',
        password: '',
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error('Failed to add user:', error.message);
      } else {
        console.error('Failed to add user:', error);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const createUser = await addUserData();
    console.log('User created:', createUser);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='max-w-md mx-auto p-4 bg-white shadow-lg rounded-md'
      >
        <div className='mb-4'>
          <label
            htmlFor='first_name'
            className='block text-sm font-medium text-gray-700'
          >
            First Name
          </label>
          <input
            type='text'
            id='first_name'
            name='first_name'
            value={formData.first_name}
            onChange={handleChange}
            className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='last_name'
            className='block text-sm font-medium text-gray-700'
          >
            Last Name
          </label>
          <input
            type='text'
            id='last_name'
            name='last_name'
            value={formData.last_name}
            onChange={handleChange}
            className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='password'
            className='block text-sm font-medium text-gray-700'
          >
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
          />
          <FaEye
            className='absolute right-2 top-2 text-slate-900'
            style={{
              position: 'relative',
              left: '337px',
              top: '-28px',
              cursor: 'pointer',
            }}
            onClick={togglePassword}
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='age'
            className='block text-sm font-medium text-gray-700'
          >
            Age
          </label>
          <input
            type='number'
            id='age'
            name='age'
            value={formData.age}
            onChange={handleChange}
            className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
          />
        </div>

        <button
          type='submit'
          className='w-full bg-slate-900 text-white py-2 px-4 rounded-md hover:bg-indigo-700'
          onClick={handleSubmission}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ModalUserForm;
