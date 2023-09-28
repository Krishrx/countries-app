import { BrowserRouter,Routes,Route } from "react-router-dom"
import CountryContainer from "./components/CountryContainer"
import NoPage from "./components/NoPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<CountryContainer />} />
            <Route path="*" element={<NoPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
