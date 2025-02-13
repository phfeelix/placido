import { cn } from "@/lib/cn"


interface TitleProps extends React.HTMLProps<HTMLHeadingElement> {
  children: React.ReactNode
  className?: string
}

const Title = ({ children, className, ...props }: TitleProps) => {
  return (
    <h3 className={cn('text-2xl font-medium', className)} {...props}>
      {children}
    </h3>
  )
}

export default Title
