import { useState } from "react";

import Layout from "./components/ui/Layout/Layout";
import Backdrop from "./shared/Backdrop/Backdrop";

import "./App.css";
import Navbar from "./components/ui/Navbar/Navbar";
import HeaderBtns from "./components/ui/HeaderBtns/HeaderBtns";

function App() {
  const [isOpenBackdrep, setIsOpenBackdrep] = useState(false);

  function backdropHandler() {
    setIsOpenBackdrep((prev) => !prev);
  }

  return (
    <div className="App">
      <Layout backdropHandler={backdropHandler} />
      {isOpenBackdrep && (
        <Backdrop backdropHandler={backdropHandler}>
          <div className="mobileNav">
            <Navbar />
            <HeaderBtns />
          </div>
        </Backdrop>
      )}
    </div>
  );
}

export default App;
