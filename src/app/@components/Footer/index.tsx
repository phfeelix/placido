import logo from '@/assets/white-mobile-logo.89719234.svg'
import Image from 'next/image'

const Footer = () => {
  const links = [
    { label: 'Sobre nós', href: '#' },
    { label: 'Política de Privacidade', href: '#' },
    { label: 'Licenciamento', href: '#' },
    { label: 'Contato', href: '#' },
  ]

  return (
    <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4 mt-20">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        {/* Logo e Links */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center w-[100px]">
            <Image alt="Logo" src={logo} className="w-full h-full" />
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:underline me-4 md:me-6 hover:text-primary-500 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Linha Divisória */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* Direitos Autorais */}
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{' '}
          <a href="#" className="hover:underline hover:text-primary-500 transition-colors">
            MEIO DE PAGAMENTO
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer