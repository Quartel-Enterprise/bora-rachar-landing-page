export interface ExplanationCardProps {
  step: number
  title: string
  description: string
  reverse?: boolean
  secondary?: boolean
}

export function ExplanationCard({
  step,
  title,
  description,
  reverse = false,
  secondary = false,
}: ExplanationCardProps) {
  return (
    <div
      className={`flex shadow-sm ${reverse ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'} mx-auto w-full max-w-4xl items-center`}
    >
      <div
        className={`h-[324px] w-11/12 px-11 py-11 md:w-1/2 md:px-16 ${secondary ? 'bg-primary' : 'bg-white'}`}
      >
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-full text-3xl ${secondary ? 'bg-white text-primary' : 'bg-primary text-white'}`}
        >
          {step}
        </div>
        <h3 className={`pt-2 text-3xl leading-6 ${secondary && 'text-white'}`}>
          {title}
        </h3>
        <p className={`pt-8 text-base leading-6 ${secondary && 'text-white'}`}>
          {description}
        </p>
      </div>

      <div className="flex h-[324px] w-11/12 items-end justify-center bg-secondary md:w-1/2">
        <div className="flex h-[280px] w-[240px] items-center justify-center bg-gray-600 text-white">
          Print do App
        </div>
      </div>
    </div>
  )
}
