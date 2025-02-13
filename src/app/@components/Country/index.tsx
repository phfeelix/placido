'use client'

import Container from '@/components/features/Container'
import Text from '@/components/shared/Text'
import Title from '@/components/shared/Title'
import countries, { type Country } from '@/constants/countries'
import { cn } from '@/lib/cn'
import { useState } from 'react'
import { IconType } from 'react-icons'
import Flag from 'react-world-flags'

const Country = () => {
  const [countryName, setCountryName] = useState<string>('Brasil')

  return (
    <Container className="pt-16 px-4 md:px-8 lg:px-12" id='metodo'>
      <div className="flex flex-col gap-10">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {countries.map((country, index) => (
            <CountrySelect
              key={index}
              country={country}
              selected={countryName === country.name}
              onClick={(name) => setCountryName(name)}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {countries
            .find((country) => country.name === countryName)
            ?.cards.map((card, index) => (
              <Card
                key={index}
                text={card.description}
                title={card.title}
                Icon={card.icon}
              />
            ))}
        </div>
      </div>
    </Container>
  )
}

export default Country

function CountrySelect({
  country,
  selected = false,
  onClick,
}: {
  country: Country
  selected?: boolean
  onClick: (name: string) => void
}) {
  return (
    <div
      className={cn(
        'flex items-center justify-center px-3 sm:px-4 py-2 border rounded-full cursor-pointer transition-all duration-300 hover:bg-primary-50',
        selected && 'border-primary-500 bg-primary-50'
      )}
      onClick={() => onClick(country.name)}
    >
      <div className="flex items-center justify-center gap-2">
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden">
          <Flag code={country.code} className="w-full h-full object-cover" />
        </div>
        <Text className={cn('text-neutral-900 text-sm sm:text-base', selected && 'font-semibold')}>
          {country.name}
        </Text>
      </div>
    </div>
  )
}

function Card({ text, title, Icon }: { text: string; title: string; Icon: IconType }) {
  return (
    <div className="min-h-[180px] sm:min-h-[200px] w-full border rounded-lg flex gap-3 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-center w-12 sm:w-16">
        <Icon size={50} className="text-primary-500" />
      </div>
      <div className="flex-1 flex flex-col justify-center gap-2">
        <Title className="text-lg sm:text-xl font-semibold">{title}</Title>
        <Text className="text-sm text-gray-600">{text}</Text>
      </div>
    </div>
  )
}
