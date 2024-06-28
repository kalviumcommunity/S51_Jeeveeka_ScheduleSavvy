import React from 'react';
import AllRoutes from './AllRoutes';
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './Components/ThemeProvider';
import CrispChat from './Components/Chat';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <CrispChat />
        <AllRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
