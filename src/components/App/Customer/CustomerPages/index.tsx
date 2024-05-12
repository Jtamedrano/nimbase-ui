import CustomerSearch from "../CustomerSearch/CustomerSearch"

interface RootCustomerPageProps {}

export const RootCustomerPage: React.FC<RootCustomerPageProps> = () => {
  return (
    <>
      <CustomerSearch />
    </>
  )
}

export default RootCustomerPage
