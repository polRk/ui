import React, { FC } from 'react'
import { TextFieldProps } from './types'

const TextField: FC<TextFieldProps> = props => {
  return <input {...props} />
}

export { TextField, TextFieldProps }
