import { FieldValues, RegisterOptions } from 'react-hook-form'

export type Field = {
  title: string
  type: string
  name: string
  options?: Option[] // Add options for fields like radio buttons, checkboxes, etc.
  validators?: RegisterOptions<FieldValues, string> | undefined
}

export type Template = {
  title: string
  fields: Field[]
}

export type Option = {
  label: string
  value: string
}
