import Title from '@/components/shared/Title'
import Image from 'next/image'
import React from 'react'
import emailCampaign from '@/assets/Email campaign-amico.svg'
import Text from '@/components/shared/Text'
import Container from '@/components/features/Container'
import ContactForm from './@components/ContactForm'
import AnimateOnScroll from '@/components/features/AnimateOnScroll'

const Contact = () => {
  return (
    <AnimateOnScroll>
      <Container className='md:mt-20 min-h-[calc(100vh-200px)] mt-10'>
        <div className='w-full flex flex-col md:flex-row items-center justify-between gap-8'>
          <div className='w-full md:w-1/2 justify-center md:flex hidden'>
            <Image
              className="w-full max-w-lg"
              alt='Ilustração de campanha de e-mail'
              src={emailCampaign}
            />
          </div>  
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <AnimateOnScroll delay={0.5}>
              <div className="flex flex-col gap-4">
                <Title className='text-3xl md:text-4xl font-bold text-center'>
                  Vamos começar!
                </Title>
                <Text className='text-gray-600 text-center'>
                  Preencha um breve formulário e a nossa equipe de especialistas apresentará uma solução para a sua empresa.
                </Text>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.9}>
              <ContactForm />
            </AnimateOnScroll>
          </div>
        </div>
      </Container>
    </AnimateOnScroll>
  )
}

export default Contact