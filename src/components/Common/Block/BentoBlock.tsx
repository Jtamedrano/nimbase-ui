interface BentoBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

/**
 * BentoBlock - Basic block component for bento ui blocks
 */
const BentoBlock: React.FC<BentoBlockProps> = ({ children, ...props }) => {
  return (
    <div className="max-w-7xl mx-auto shadow rounded-lg bg-white" {...props}>
      {children}
    </div>
  )
}

export default BentoBlock
