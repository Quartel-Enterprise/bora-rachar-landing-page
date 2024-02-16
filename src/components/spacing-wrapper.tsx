interface SpacingWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function SpacingWrapper({
  children,
  className,
  ...props
}: SpacingWrapperProps) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] ${className}`} {...props}>
      {children}
    </div>
  )
}
