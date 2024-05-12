import React from "react"
import cx from "classnames"
import { InputContext } from "."
interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * BaseInput - Basic input component for bento ui inputs
 */
const BaseInput: React.FC<BaseInputProps> = ({ className, ...props }) => {
  const ctx = React.useContext(InputContext)
  return (
    <input
      id={ctx.id}
      className={cx(
        "block w-full rounded-md border-0 p-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6",
        "focus:ring-gray-400 focus:outline-none focus:ring-2",
        "transition duration-150 ease-in-out",
        className,
        {
          "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500":
            !!ctx.errorMessage,
        },
      )}
      {...props}
    />
  )
}

export default BaseInput
