import { forwardRef, InputHTMLAttributes } from 'react'

type InputProps = {
  error?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error = false, ...props }, forwardedRef) => (
    <input
      {...props}
      ref={forwardedRef}
      className={`bg-secondary-900 py-3 px-4 rounded text-sm placeholder:text-secondary-500 border-2 focus ${
        error ? 'border-danger-500' : 'border-transparent'
      }`}
    />
  )
)
