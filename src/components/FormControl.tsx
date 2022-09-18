type FormControlProps = {
  children: React.ReactNode
  error?: boolean
  helperText?: string
  label?: string
}

export const FormControl = ({
  children,
  error = false,
  helperText,
  label
}: FormControlProps) => (
  <div className="flex flex-col gap-2">
    <label className="flex flex-col gap-2">
      <small className="font-semibold text-base">{label}</small>
      {children}
    </label>

    {helperText && (
      <span
        className={`text-xs ${error ? 'text-danger-500' : 'text-white'}`}
      >
        {helperText}
      </span>
    )}
  </div>
)
