import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

type CheckboxProps = {
  label?: string
} & RadixCheckbox.CheckboxProps

export const Checkbox = (props: CheckboxProps) => (
  <label className="flex items-center gap-2 w-fit">
    <RadixCheckbox.Root
      {...props}
      className="w-6 h-6 rounded bg-secondary-900 p-1 focus"
    >
      <RadixCheckbox.Indicator>
        <Check className="w-4 h-4 text-emerald-400" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>

    {props.label && <span className="text-sm">{props.label}</span>}
  </label>
)
