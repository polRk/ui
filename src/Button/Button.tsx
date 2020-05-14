import React, { FC } from 'react'
import { Spinner } from '../Icon'
import './Button.sass'
import { ButtonProps, cnButton } from './index'

const Button: FC<ButtonProps> = ({
  children,
  className,
  elementBefore,
  elementAfter,
  variant,
  isLoading,
  ...props
}) => {
  const Component = props.href ? 'a' : 'button'

  return (
    <Component
      {...props}
      className={cnButton({ variant, loading: isLoading }, [className])}
    >
      <span className={cnButton('Loader')}>
        <Spinner size={24} thickness={2} />
      </span>
      {elementBefore && (
        <span className={cnButton('ElementBefore')}>{elementBefore}</span>
      )}
      <span className={cnButton('Content')}>{children}</span>
      {elementAfter && (
        <span className={cnButton('ElementAfter')}>{elementAfter}</span>
      )}
    </Component>
  )
}
Button.defaultProps = {
  variant: 'default',
}

export { Button }
