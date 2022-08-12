import React, { useEffect, useState } from "react";
import AppRouter from "./Router";
import { authService } from "./firebase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}

      <footer>&copy; Twitter {new Date().getFullYear()}Twitter</footer>
    </>
  );
}

export default App;
