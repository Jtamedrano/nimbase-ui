import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage/HomePage"

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App
