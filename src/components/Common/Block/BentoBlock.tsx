import cx from "classnames"

interface BentoBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

/**
 * BentoBlock - Basic block component for bento ui blocks
 */
const BentoBlock: React.FC<BentoBlockProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cx(
        "max-w-7xl mx-auto shadow rounded-lg bg-white p-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default BentoBlock
