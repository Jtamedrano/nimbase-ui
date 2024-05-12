import BentoBlock from "@components/Common/Block"
import { Input } from "@components/Common/Input"
import InputGroup from "@components/Common/Input/InputGroup"

interface CustomerSearchProps {}

export const CustomerSearch: React.FC<CustomerSearchProps> = () => {
  return (
    <BentoBlock className="flex flex-col gap-4">
      <h1 className="text-2xl font-medium">Customer Search</h1>
      <hr />
      <InputGroup
        label="Search"
        id="customer-search"
        helperText="Search for customers by name, email, or phone number"
      >
        <Input placeholder="Search Customers" className="rounded-r-none" />
        <button className="flex items-center justify-center font-semibold px-4 py-2 transition-colors duration-300 ease-in-out cursor-pointer bg-blue-lm dark:bg-blue-dm rounded-l-none rounded-r-md">
          Search
        </button>
      </InputGroup>
    </BentoBlock>
  )
}

export default CustomerSearch
