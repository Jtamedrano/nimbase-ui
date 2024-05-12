import { createContext } from "react"
import Input from "./BaseInput"

interface InputContextProps {
  errorMessage?: string
  id?: string
  label?: string
}

export const InputContext = createContext<InputContextProps>({})
export { Input }
