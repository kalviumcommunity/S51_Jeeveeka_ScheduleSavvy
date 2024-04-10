import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Loader from './Loader'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const timeout = setTimeout(() => {
          setIsLoading(false);
      }, 4000); 
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
              </div>
          )}
      </div>
  );
};


