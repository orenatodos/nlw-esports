type ContainerProps = {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => (
  <div className="max-w-[1344px] mx-auto px-6">{children}</div>
)
