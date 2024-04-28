import cx from "classnames"
import BaseMenuItem from "./BaseMenuItem"

import type { BaseMenuItemProps } from "./BaseMenuItem"

interface CircleMenuItemProps extends BaseMenuItemProps {}

const CircleMenuItem: React.FC<CircleMenuItemProps> = ({
  className,
  ...rest
}) => {
  return (
    <BaseMenuItem
      {...rest}
      className={cx(
        "flex items-center justify-center w-12 h-12 bg-background-500 text-white rounded-full text-2xl transition-colors duration-300 ease-in-out",
        "hover:bg-background-600 hover:text-white shadow",
        "active:bg-background-700 active:text-white	shadow-md",
        "cursor-pointer",
        className,
      )}
    />
  )
}

export default CircleMenuItem
