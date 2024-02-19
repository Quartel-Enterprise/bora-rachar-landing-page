export function InputValidationMessage({
  message,
  error = false,
}: {
  message: string
  error?: boolean
}) {
  return (
    <span
      className={`absolute ${error ? '-top-6' : '-top-10'} left-2 text-sm text-white xs:top-14`}
    >
      <div
        className={`flex items-center gap-2 ${error ? 'text-gray-200' : 'text-white'}`}
      >
        <div className={`h-1 w-1.5 ${error ? 'bg-rose-500' : 'g-secondary'}`} />
        {message}
      </div>
    </span>
  )
}
