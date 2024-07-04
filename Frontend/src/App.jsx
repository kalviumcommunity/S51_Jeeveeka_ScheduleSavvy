import React from 'react';
import AllRoutes from './AllRoutes';
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './Components/ThemeProvider';
import CrispChat from './Components/Chat';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <CrispChat />
        <ToastContainer />
        <AllRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
