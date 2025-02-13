'use client'

import { useState } from 'react'
import Container from '@/components/features/Container'
import Brand from '@/components/shared/Brand'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/cn'
import Link from 'next/link'
import { dashboardNavbarNavigation, ILink } from './navigation'
import { Menu, X } from 'lucide-react'
import AnimateOnScroll from '@/components/features/AnimateOnScroll'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <AnimateOnScroll>
      <Container className="bg-white py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center w-[250px] md:w-[350px]">
            <Brand />
          </div>

          <div className='flex items-center justify-center'>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <nav
            className={cn(
              'flex-col md:flex-row md:flex items-center gap-4',
              menuOpen ? 'flex absolute top-16 left-0 w-full bg-white shadow-lg p-4' : 'hidden md:flex'
            )}
          >
            <ul className="flex flex-col md:flex-row items-center gap-4">
              {dashboardNavbarNavigation.map((item) => (
                <NavigationItem key={item.href} item={item} />
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </AnimateOnScroll>
  )
}

export default Navbar

const NavigationItem = ({ item }: { item: ILink }) => {
  const { label, href, type } = item

  return (
    <>
      {type === 'button' ? (
        <Button
          size="lg"
          className="rounded-full hover:bg-primary-600 transition-colors w-full md:w-auto"
        >
          {label}
        </Button>
      ) : (
        <Link href={href}>
          <li
            className={cn(
              'active:scale-[0.96] cursor-pointer flex items-center gap-2 font-medium rounded-full px-4 py-2 text-base hover:bg-primary-400/20 transition-colors w-full md:w-auto'
            )}
          >
            {label}
          </li>
        </Link>
      )}
    </>
  )
}
