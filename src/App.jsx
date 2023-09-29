import { BrowserRouter,Routes,Route } from "react-router-dom"
import CountryContainer from "./components/CountryContainer"
import NoPage from "./components/NoPage"
import ThemeProvider from "./components/ThemeProvider"

function App() {
  return (
    <>
      <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<CountryContainer />} />
            <Route path="*" element={<NoPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
