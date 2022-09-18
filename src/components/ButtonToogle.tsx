import * as ToggleGroup from '@radix-ui/react-toggle-group'

export const ButtonToggle = (props: ToggleGroup.ToggleGroupItemProps) => (
  <ToggleGroup.Item {...props} className="w-10 h-10 rounded focus">
    {props.children}
  </ToggleGroup.Item>
)
