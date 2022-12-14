import { useEffect, useState } from "react";
import HomeHeader from "./Components/HomeHeader";
import MainContent from "./Components/MainContent";
import WelcomePage from "./Components/WelcomePage";
import LogInPage from "./Components/LogInPage";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize) // change the window width state when desktop size changes
  }, [])

  useEffect(() => {
    const mobile = windowWidth <= 900; 
    setIsMobile(mobile) // update the isMobile (boolean) state when window width changes
  }, [windowWidth])

  function handleWindowResize(){ // updates window width state
    setWindowWidth(window.innerWidth)
  }

  return (
    <>
      <LogInPage isMobile={isMobile}></LogInPage>
    </>
  );
}

export default App;
