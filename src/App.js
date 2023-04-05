// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/Login";
import Shop from "./components/Shop";
import { Route, Routes } from "react-router-dom";
import { ClerkProvider, RedirectToSignIn, SignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

const App = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <ClerkProvider publishableKey={process.env.REACT_APP_CLERK_PUBLISHABLE_KEY}>
      <>
        <SignedIn>

          <Navbar username={username} loggedIn={loggedIn} />
          <div id="container">
            <div id="main">
              <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Gallery />} path="/gallery" />
                <Route element={<Shop />} path="/shop" />
                <Route element={<Contact />} path="/contact" />
                <Route element={<Login
                  username={username} setUsername={setUsername}
                  password={password} setPassword={setPassword}
                  setLoggedIn={setLoggedIn} />} path="/Login" />
              </Routes>
            </div>
          </div>
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn redirectUrl="/sign-up" />
        </SignedOut>
      </>
    </ClerkProvider>
  );
};

export default App;
