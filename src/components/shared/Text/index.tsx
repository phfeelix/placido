import { cn } from "@/lib/cn"


interface TextProps extends React.HTMLProps<HTMLParagraphElement> {
  children: React.ReactNode
  className?: string
}

const Text = ({ children, className, ...props }: TextProps) => {
  return (
    <p className={cn('text-lg text-neutral-600', className)} {...props}>
      {children}
    </p>
  )
}

export default Text
