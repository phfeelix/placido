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
    <Container className="px-4 md:px-6 lg:px-8">
      <div className="w-full min-h-[calc(100vh-200px)] flex flex-col justify-center md:justify-start md:mt-20 mb-16 md:mb-0">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
          <div className="flex-1 flex flex-col gap-6 items-start text-center md:text-left">
            <AnimateOnScroll delay={0.4}>
              <Title className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Solução de pagamento para negócios{' '}
                <span className="text-primary-500">on-line</span>.
              </Title>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.8}>
              <p className="text-base sm:text-lg text-gray-600">
                Oferecemos a melhor solução de pagamento para o seu negócio, com segurança, 
                agilidade e facilidade de integração.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={1.2} className='flex flex-col sm:flex-row gap-4 mt-6 w-full items-center justify-center md:justify-start'>
              <Button
                variant="default"
                className="w-full sm:w-[200px] rounded-full hover:bg-primary-700 transition-colors h-12 md:h-14 px-6 md:px-10 text-base md:text-base"
                onClick={() => router.push('/contato')}
              >
                Começar agora!
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-[200px] rounded-full hover:bg-primary-100 transition-colors h-12 md:h-14 px-6 md:px-10 text-base md:text-base"
              >
                Demo
              </Button>
            </AnimateOnScroll>
          </div>

          <div className="flex-1 flex items-center justify-center md:justify-end">
            <Image
              className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl h-auto object-contain"
              alt="Ilustração de pagamento"
              src={heroImage}
              priority
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Hero
