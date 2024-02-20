import Image from 'next/image'

export interface ExplanationCardProps {
  step: number
  title: string
  description: string
  image: string
  reverse?: boolean
  secondary?: boolean
  credit?: React.ReactNode
}

export function ExplanationCard({
  step,
  title,
  description,
  image,
  reverse = false,
  secondary = false,
  credit,
}: ExplanationCardProps) {
  return (
    <div
      className={`flex shadow-sm ${reverse ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'} mx-auto w-full max-w-4xl items-center`}
    >
      <div
        className={`min-h-[324px] w-11/12 px-11 py-11 xs:h-[324px] md:w-1/2 md:px-16 ${secondary ? 'bg-primary' : 'bg-white'}`}
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

      <div className="relative flex h-[324px] w-11/12 items-end justify-center bg-secondary md:w-1/2">
        <Image
          src={image}
          alt={image
            ?.replaceAll('-', ' ')
            .replace('/', '')
            .replace('.webp', '')}
          width={210}
          height={310}
        />
        <div className="absolute -bottom-4 left-0 text-end text-xs text-gray-600 opacity-40">
          {credit}
        </div>
      </div>
    </div>
  )
}
