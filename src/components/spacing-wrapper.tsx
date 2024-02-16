interface SpacingWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function SpacingWrapper({
  children,
  className,
  ...props
}: SpacingWrapperProps) {
  return (
    <div className={`max-w-[1200px] mx-auto w-full ${className}`} {...props}>
      {children}
    </div>
  )
}
