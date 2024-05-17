import AllRoutes from './AllRoutes'
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter } from 'react-router-dom'
import CrispChat from './Components/Chat';


function App() {

  return (
    <>
      <BrowserRouter>
        <CrispChat/>
        <AllRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
