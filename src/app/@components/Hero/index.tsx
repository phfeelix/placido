'use client'

import heroImage from '@/assets/Payment Information-pana.svg'
import AnimateOnScroll from '@/components/features/AnimateOnScroll'
import Container from '@/components/features/Container'
import Title from '@/components/shared/Title'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Hero = () => {
  const router = useRouter()

  return (
    <Container className='py-16'>
      <div className="w-full min-h-[calc(100vh-248px)] flex flex-col mt-7">
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
          <div className="flex-1 flex flex-col gap-6 items-start justify-center">
            <AnimateOnScroll delay={0.4}>
              <Title className="text-5xl md:text-7xl font-bold leading-tight">
                Solução de pagamento para negócios{' '}
                <span className='text-primary-500'>on-line</span>.
              </Title>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.8}>
              <p className='text-lg text-gray-600'>
                Oferecemos a melhor solução de pagamento para o seu negócio, com segurança, agilidade e facilidade de integração.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={1.2}>
              <div className='flex gap-4 mt-6'>
                <Button
                  variant={'default'}
                  size={'xl'}
                  className='w-[200px] rounded-full hover:bg-primary-700 transition-colors'
                  onClick={() => router.push('/contato')}
                >
                  Começar agora!
                </Button>
                <Button
                  variant={'outline'}
                  size={'xl'}
                  className='w-[200px] rounded-full hover:bg-primary-100 transition-colors'
                >
                  Demo
                </Button>
              </div>
            </AnimateOnScroll>
          </div>

          <div className='flex-1 flex items-center justify-center md:justify-end'>
            <Image
              className="w-full max-w-lg"
              alt='Ilustração de pagamento'
              src={heroImage}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Hero