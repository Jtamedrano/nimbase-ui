import { Popover } from "@headlessui/react"
import { BaseTransition } from "@components/Common/Transition"

interface FlyoutMenuProps {
  anchor?: React.ReactNode
  children?: React.ReactNode
}

const FlyoutMenu: React.FC<FlyoutMenuProps> = ({ anchor, children }) => {
  return (
    <Popover className="relative">
      <Popover.Button className="outline-none focus:outline-none">
        {anchor}
      </Popover.Button>
      <BaseTransition>
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          {children}
        </Popover.Panel>
      </BaseTransition>
    </Popover>
  )
}

export default FlyoutMenu
