'use client'

import Container from '@/components/features/Container'
import Text from '@/components/shared/Text'
import Title from '@/components/shared/Title'
import countries, { Country } from '@/constants/countries'
import { cn } from '@/lib/cn'
import { useState } from 'react'
import { IconType } from 'react-icons'
import Flag from 'react-world-flags'

const Coutry = () => {
  const [countryName, setCountryName] = useState<string>('Brasil')

  return (
    <Container>
      <div className='flex flex-col gap-10 mb-10'>
        <div className="flex gap-4 w-full">
          {countries.map((country, index) => (
            <CountrySelect country={country} key={index} selected={countryName === country.name} onClick={(name) => setCountryName(name)}/>
          ))}
        </div>
        <div className='flex gap-5 px-5'>
          {countries.filter((country) => country.name === countryName)[0].cards.map((card, index) => (
            <Card text={card.description} title={card.title} key={index}  Icon={card.icon}/>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Coutry

function CountrySelect({ country, selected=false, onClick }: { country: Country, selected?: boolean, onClick: (name: string) => void }) {
  return (
    <div className={cn("flex items-center justify-center w-fit px-4 py-2 border rounded-full cursor-pointer transition-all duration-300", selected && ' border-primary-500')} onClick={() => onClick(country.name)}>
      <div className="flex items-center justify-center gap-2">
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <Flag
            code={country.code}
            className="w-full h-full object-cover"
          />
        </div>
        <Text className="text-neutral-900">{country.name}</Text>
      </div>
    </div>
  )
}

function Card({ text, title, Icon }: { text: string, title: string, Icon: IconType }) {
  return (
    <div className="h-[200px] w-[500px] border rounded-lg flex gap-3 p-4 hover:shadow-sm">
      <div className='flex items-center justify-center px-3'>
        <Icon size={70} className='text-neutral-900' />
      </div>
      <div className='px-4 flex justify-center flex-col gap-4'>
        <Title className='text-lg'>{title}</Title>
        <Text className='text-sm'>{text}</Text>
      </div>
    </div>
  )
}