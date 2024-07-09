'use client'

import { useForm } from 'react-hook-form'
import { Card } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Field, Template } from '@/lib/types'
import React from 'react'

type FormProps = {
  template: Template
  onSubmit: (values: any) => void
}

const Form: React.FC<FormProps> = ({ template, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const renderFields = (fields: Field[]) => {
    return fields.map(field => {
      let { title, type, name, options, validators } = field

      return (
        <div key={name} className='pb-2'>
          <Label htmlFor={name}>{title}</Label>
          {type === 'text' ||
          type === 'email' ||
          type === 'number' ||
          type === 'date' ||
          type === 'password' ? (
            <Input type={type} id={name} {...register(name, validators)} />
          ) : type === 'radio' ? (
            options?.map(option => (
              <div key={option.value} className='text-sm ml-2 pb-1'>
                <input
                  type='radio'
                  id={`${name}-${option.value}`}
                  value={option.value}
                  {...register(name, validators)}
                />
                <label htmlFor={`${name}-${option.value}`} className='ml-2'>
                  {option.label}
                </label>
              </div>
            ))
          ) : type === 'checkbox' ? (
            options?.map(option => (
              <div key={option.value} className='text-sm ml-2 pb-1'>
                <input
                  type='checkbox'
                  id={`${name}-${option.value}`}
                  value={option.value}
                  {...register(name, validators)}
                />
                <label htmlFor={`${name}-${option.value}`} className='ml-2'>
                  {option.label}
                </label>
              </div>
            ))
          ) : null}
          {errors[name] && (
            <div className='text-red-500 pt-1 text-sm'>
              {String(errors[name]?.message)}
            </div>
          )}
        </div>
      )
    })
  }

  return (
    <Card className='w-4/5 my-10'>
      <form className='px-8 py-4' onSubmit={handleSubmit(onSubmit)}>
        <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight pb-4'>
          {template.title}
        </h3>
        {renderFields(template.fields)}
        <br />
        <Button type='submit'>Submit</Button>
      </form>
    </Card>
  )
}

export default Form
