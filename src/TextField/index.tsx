/** @jsx jsx */
import { FC } from 'react'
import { TextFieldProps } from './types'
import { jsx } from '@emotion/core'

const TextField: FC<TextFieldProps> = props => {
  return <input {...props} />
}

export { TextField, TextFieldProps }
