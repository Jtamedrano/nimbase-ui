import { BiBook, BiHome, BiPlus } from "react-icons/bi"
import { CircleMenuItem, FlyoutMenu } from "../../Common/MenuItem"

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
          <FlyoutMenu anchor={<CircleMenuItem icon={<BiBook />} />}>
            <div className="bg-white rounded-lg shadow-md">
              <div className="flex justify-between items-center px-4 py-2">
                <div className="text-lg font-semibold">Invoices</div>

                <button className="flex items-center justify-center w-8 h-8 bg-background-500 text-white rounded-full text-2xl transition-colors duration-300 ease-in-out hover:bg-background-600 hover:text-white shadow active:bg-background-700 active:text-white	shadow-md cursor-pointer">
                  <BiPlus />
                </button>
              </div>
              <hr />
              <div className="flex px-4 py-2 gap-4">
                <div className="flex flex-col gap-2">
                  <div>New Invoice</div>
                  <div>Invoice List</div>
                  <div>Templates</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div>Invoice Manager</div>
                  <div>Archive</div>
                  <div>Settings</div>
                </div>
              </div>
            </div>
          </FlyoutMenu>
        </div>
        <div className="flex justify-end items-center gap-4">
          <div>Jesse Medrano</div>
        </div>
      </div>
    </div>
  )
}

export default AppNavigation
