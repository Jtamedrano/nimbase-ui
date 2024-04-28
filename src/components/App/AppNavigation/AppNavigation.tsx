import { BiBook, BiHome } from "react-icons/bi"
import { CircleMenuItem } from "../../Common/MenuItem"

interface AppNavigationProps {}

const AppNavigation: React.FC<AppNavigationProps> = () => {
  return (
    <div className="w-screen shadow-md bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-2xl font-medium py-4 tracking-wide">
          NB | Invoices
        </div>
        <div className="flex justify-center items-center gap-4">
          <CircleMenuItem icon={<BiHome />} />
          <CircleMenuItem icon={<BiBook />} />
        </div>
        <div className="flex justify-end items-center gap-4">
          <div>Jesse Medrano</div>
        </div>
      </div>
    </div>
  )
}

export default AppNavigation
