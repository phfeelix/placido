import Container from '@/components/features/Container'
import Text from '@/components/shared/Text'
import Title from '@/components/shared/Title'
import Image from 'next/image'
import React from 'react'
import cartEmpty from '@/assets/Add to Cart-amico.svg'
import { Button } from '@/components/ui/button'

const Features = () => {
  return (
    <Container>
      <div className='flex flex-col gap-10 mt-20'>
        <div className='flex flex-col items-center justify-center'>
          <Text className="text-primary-500">Porque nós?</Text>
          <Title className="text-2xl font-bold md:text-4xl md:leading-tight">Por que escolher o Meio de Pagamento</Title>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='w-full flex flex-col md:flex-row gap-5'>
            <Card className='flex-1'>
              <div className='flex flex-col justify-between gap-5'>
                <Title className='text-2xl md:text-6xl text-primary-500'>3K+</Title>
                <Title className='text-lg'>Empresas que já estão em operação</Title>
              </div>
            </Card>
            <Card className='flex-1 '>
              <div className='flex flex-col justify-between gap-5'>
                <Title className='text-2xl md:text-6xl text-primary-500'>99.9%</Title>
                <Title className='text-lg'>Taxa de sucesso nas transações</Title>
              </div>
            </Card>
          </div>
          <div className='w-full flex flex-col md:flex-row gap-5'>
            <Card className='w-full md:w-2/3'>
              <div className='flex-1 flex flex-col justify-center items-center text-center'>
                <Title className='text-4xl md:text-6xl text-primary-500 font-bold'>20%</Title>
                <Title className='text-xl md:text-2xl font-semibold mt-4'>Mais conversões do mercado</Title>
                <Text className="text-gray-600 mt-2 max-w-md">
                  Reduza os abandonos de carrinho e aumente suas vendas com nossa solução de pagamento otimizada.
                </Text>
                <Button className="mt-6">
                  Saiba como aumentar suas vendas
                </Button>
              </div>
              <div className='flex-1 flex justify-center mt-8 md:mt-0'>
                <Image
                  className="w-full max-w-xs md:max-w-sm"
                  alt='Ilustração de carrinho de compras'
                  src={cartEmpty}
                />
              </div>
            </Card>
            <Card className='w-full md:w-1/3'>
              <div className='flex flex-col items-center text-center'>
                <Title className='text-4xl md:text-6xl text-primary-500 font-bold'>100%</Title>
                <Title className='text-xl md:text-2xl font-semibold mt-4'>Disponibilidade</Title>
                <Text className="text-gray-600 mt-2">
                  Garantia de uptime e transações seguras 24/7.
                </Text>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Features

const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center justify-between p-4 md:p-8 bg-white rounded-lg shadow-sm border border-gray-100 ${className && className}`}>{children}</div>
  )
}