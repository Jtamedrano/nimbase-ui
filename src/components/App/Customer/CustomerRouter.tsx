import { Route, Routes } from "react-router-dom"
import RootCustomerPage from "./CustomerPages"

interface CustomerRouterProps {}

export const CustomerRouter: React.FC<CustomerRouterProps> = () => {
  return (
    <Routes>
      <Route index element={<RootCustomerPage />} />
    </Routes>
  )
}

export default CustomerRouter
