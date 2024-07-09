'use client'

import Form from '@/components/form'
import { Template } from '@/lib/types'

export default function Home() {
  const template: Template = {
    title: 'Dynamic Form',
    fields: [
      {
        title: 'First Name',
        name: 'firstname',
        type: 'text',
        validators: {
          required: 'First Name is mandatory',
        },
      },
      {
        title: 'Last Name',
        name: 'lastname',
        type: 'text',
      },
      {
        title: 'Email',
        name: 'email',
        type: 'email',
      },
      {
        title: 'Date of Birth',
        name: 'DOB',
        type: 'date',
      },
      {
        title: 'Password',
        name: 'password',
        type: 'password',
        validators: {
          required: 'Please enter your password',
          minLength: {
            value: 10,
            message: 'Password must be atleast of 10 characters',
          },
          maxLength: {
            value: 30,
            message: "Don't write essay here",
          },
        },
      },
      {
        title: 'Age',
        name: 'age',
        type: 'number',
        validators: {
          required: 'Please enter your age',
          min: {
            value: 18,
            message: 'Children are not allowed here',
          },
          max: {
            value: 60,
            message: 'You are too old',
          },
        },
      },
      {
        title: 'Gender',
        name: 'gender',
        type: 'radio',
        options: [
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ],
      },
      {
        title: 'Hobbies',
        name: 'hobbies',
        type: 'checkbox',
        options: [
          { label: 'Reading', value: 'reading' },
          { label: 'Traveling', value: 'traveling' },
          { label: 'Gaming', value: 'gaming' },
        ],
      },
    ],
  }

  const onSubmit = (values: any) => {
    console.log(values)
    alert(JSON.stringify(values, null, 4))
  }

  return (
    <div className='w-screen flex justify-center items-center'>
      <Form template={template} onSubmit={onSubmit} />
    </div>
  )
}
