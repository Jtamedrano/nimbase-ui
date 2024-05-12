import type React from "react"
import { InputContext } from "."
import { isFalsyString } from "@utils/index"

interface InputGroupProps {
  children?: React.ReactNode
  errorMessage?: string
  helperText?: string
  id?: string
  label?: string
}

export const InputGroup: React.FC<InputGroupProps> = ({
  children,
  errorMessage,
  helperText,
  id,
  label,
}) => {
  return (
    <InputContext.Provider value={{ label, id, errorMessage }}>
      <div className="flex flex-col gap-2">
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>

        <div className="relative rounded-md shadow-sm flex">
          {children && children}
        </div>

        {!isFalsyString(errorMessage) ? (
          <p className="text-sm text-red-600" id={`${id}-error`}>
            {errorMessage}
          </p>
        ) : (
          !isFalsyString(helperText) && (
            <p className="text-sm text-gray-500" id={`${id}-helper`}>
              {helperText}
            </p>
          )
        )}
      </div>
    </InputContext.Provider>
  )
}

export default InputGroup
