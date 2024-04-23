import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Loader from './Loader'
import Calender from './Calendar';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const timeout = setTimeout(() => {
          setIsLoading(false);
      }, 3000); 
      return () => clearTimeout(timeout);
  }, []); 

  return (
      <div>
          {isLoading ? (
              <div id="loader_container">
                <Loader/>
              </div>
          ) : (
              <div id="main_content">
                <Navbar/>
                <Calender/>
              </div>
          )}
      </div>
  );
};


