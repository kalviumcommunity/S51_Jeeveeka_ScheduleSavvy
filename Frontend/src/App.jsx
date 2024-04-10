import AllRoutes from './AllRoutes'
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <AllRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
