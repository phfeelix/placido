import { cn } from '@/lib/cn'
import React from 'react'

interface ContainerProps {
  className?: string
  children?: React.ReactNode
  id?: string
}

const Container = ({ className, children, id }: ContainerProps) => {
  return (
    <div
      className={cn(
        'w-full max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl px-4 sm:px-6 md:px-8 mx-auto',
        className
      )}
      id={id}
    >
      {children}
    </div>
  )
}

export default Container