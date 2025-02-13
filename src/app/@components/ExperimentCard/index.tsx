'use client'

import Container from '@/components/features/Container'
import Text from '@/components/shared/Text'
import Title from '@/components/shared/Title'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

const ExperimentCard = () => {
  const router = useRouter()

  return (
    <Container className='md:py-16 md:px-16 rounded-3xl bg-primary-500 mt-20'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
        <div className='flex-1 flex flex-col gap-2 items-start justify-center'>
          <Text className='text-primary-700 text-sm font-semibold uppercase tracking-widest'>
            Experimente agora
          </Text>
          <Title className="text-white text-2xl md:text-4xl font-bold leading-tight">
            Preparado para otimizar sua forma de pagamento?
          </Title>
          <Text className="text-white text-sm md:text-base mt-2">
            Descubra como nossa solução pode aumentar suas conversões e simplificar seus processos.
          </Text>
        </div>

        <div className='flex-1 flex items-center justify-center md:justify-end'>
          <Button
            variant={'secondary'}
            className='w-full md:w-auto px-8 py-4 text-lg font-semibold'
            onClick={() => router.push("contatos")}
          >
            Experimente agora!
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default ExperimentCard