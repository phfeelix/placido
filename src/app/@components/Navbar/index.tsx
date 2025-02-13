'use client'

import Container from '@/components/features/Container'
import Brand from '@/components/shared/Brand'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/cn'
import Link from 'next/link'
import { dashboardNavbarNavigation, ILink } from './navigation'

const Navbar = () => {
  return (
    <Container className='bg-white py-4'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center w-[350px]'>
          <Brand />
        </div>

        <nav>
          <ul className="flex items-center gap-4">
            {dashboardNavbarNavigation.map((item) => (
              <NavigationItem key={item.href} item={item} />
            ))}
          </ul>
        </nav>
      </div>
    </Container>
  )
}

export default Navbar

const NavigationItem = ({ item }: { item: ILink }) => {
  const { label, href, type } = item

  return (
    <>
      {type === 'button' ? (
        <Button size='lg' className='rounded-full hover:bg-primary-600 transition-colors'>
          {label}
        </Button>
      ) : (
        <Link href={href}>
          <li
            className={cn(
              'active:scale-[0.96] cursor-pointer flex items-center gap-2 font-medium rounded-full px-4 py-2 text-base hover:bg-primary-400/20 transition-colors',
            )}
          >
            {label}
          </li>
        </Link>
      )}
    </>
  )
}