import { ButtonHTMLAttributes, forwardRef } from 'react'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  leftIcon?: JSX.Element
  rightIcon?: JSX.Element
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, variant = 'primary', leftIcon, rightIcon, ...props },
    forwardedRef
  ) => (
    <button
      type="button"
      ref={forwardedRef}
      {...props}
      className={`btn-${variant} ${props.className}`}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  )
)
