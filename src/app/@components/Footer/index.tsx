'use client'

import logo from '@/assets/white-mobile-logo.89719234.svg'
import AnimateOnScroll from '@/components/features/AnimateOnScroll'
import Container from '@/components/features/Container'
import Image from 'next/image'

const Footer = () => {
  const links = [
    { label: 'Sobre nós', href: '#sobrenos' },
    { label: 'Perguntas frequentes', href: '#faq' },
    { label: 'Contatos', href: '/contato' },
  ]

  return (
    <AnimateOnScroll>
      <Container className='mt-20 pb-4'>
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-6">
          <div className="w-[100px]">
            <Image alt="Logo" src={logo} className="w-full h-auto" />
          </div>

          <ul className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:underline hover:text-primary-500 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        <span className="block text-center text-sm text-gray-500 dark:text-gray-400">
          © 2025{' '}
          <a href="#" className="hover:underline hover:text-primary-500 transition-colors">
            MEIO DE PAGAMENTO
          </a>
          . All Rights Reserved.
        </span>
      </Container>
    </AnimateOnScroll>
  )
}

export default Footer
