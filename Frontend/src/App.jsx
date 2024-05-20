import AllRoutes from './AllRoutes'
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './Components/ThemeProvider';



function App() {

  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <AllRoutes/>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
