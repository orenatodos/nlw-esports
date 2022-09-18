import { forwardRef, SelectHTMLAttributes } from 'react'
import { CircleNotch } from 'phosphor-react'

type SelectProps = {
  error?: boolean
  loading?: boolean
} & SelectHTMLAttributes<HTMLSelectElement>

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, error, loading, ...props }, forwardedRef) => (
    <div className="relative">
      <select
        disabled={props.disabled || loading}
        {...props}
        ref={forwardedRef}
        className={`bg-secondary-900 py-3 px-4 rounded text-sm appearance-none focus border-2 w-[100%] disabled:text-secondary-500 disabled:cursor-wait ${
          error ? 'border-danger-500' : 'border-transparent'
        }`}
      >
        {children}
      </select>

      {loading && (
        <CircleNotch
          weight="bold"
          className="animate-spin h-5 w-5 absolute top-3.5 right-4 text-secondary-500"
        />
      )}
    </div>
  )
)
