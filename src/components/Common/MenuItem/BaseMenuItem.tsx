export interface BaseMenuItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
}

const BaseMenuItem: React.FC<BaseMenuItemProps> = ({ icon, ...rest }) => {
  return (
    <div {...rest}>
      {icon && (
        <div className="flex items-center justify-center w-12 h-12 bg-background-1 text-white rounded-full">
          {icon}
        </div>
      )}
    </div>
  )
}

export default BaseMenuItem
