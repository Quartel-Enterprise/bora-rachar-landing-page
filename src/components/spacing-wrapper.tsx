interface SpacingWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function SpacingWrapper({
  children,
  className,
  ...props
}: SpacingWrapperProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1200px] px-5 py-20 md:px-8 md:py-32 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
