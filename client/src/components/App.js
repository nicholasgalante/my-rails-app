import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);
  
  // auto-login
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
    
    </>
  )
}

export default App;
