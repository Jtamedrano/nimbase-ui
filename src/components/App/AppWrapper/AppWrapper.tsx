import { Outlet } from "react-router-dom"
import AppNavigation from "../AppNavigation/AppNavigation"

interface AppWrapperProps {}

const AppWrapper: React.FC<AppWrapperProps> = () => {
  return (
    <div className="bg-background-500 h-screen">
      <AppNavigation />
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  )
}

export default AppWrapper
