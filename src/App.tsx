
import { BrowserRouter } from 'react-router-dom'
import './styles/App.css'
import { AppRoutes } from './Routes/AppRoutes'
import { Navbar } from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
          <Navbar/>
          <AppRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
