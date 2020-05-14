import { IClassNameProps } from '@bem-react/core'
import { ElementType, ReactElement } from 'react'

export interface ButtonProps extends IClassNameProps {
  as?: ElementType
  variant?: 'default' | 'primary' | 'danger'
  disabled?: boolean
  href?: string
  elementAfter?: ReactElement
  elementBefore?: ReactElement
  isLoading?: boolean
  onClick?(): void
}
