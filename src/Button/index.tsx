/** @jsx jsx */
import { ButtonProps } from './types'
import { FC } from 'react'
import { jsx } from '@emotion/core'

const Button: FC<ButtonProps> = ({ children }) => {
  return <button>{children}</button>
}

export { Button, ButtonProps }
