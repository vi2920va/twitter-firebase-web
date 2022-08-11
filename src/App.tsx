import React, { useState } from "react";
import AppRouter from "./Router";
import { authService } from "./firebase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  console.log(isLoggedIn);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; Twitter {new Date().getFullYear()}Twitter</footer>
    </>
  );
}

export default App;
