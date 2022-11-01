import { useEffect, useState } from "react";
import HomeHeader from "./Components/HomeHeader";
import MainContent from "./Components/MainContent";
import WelcomePage from "./Components/WelcomePage";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize) // Change the window width state when desktop size changes
  }, [])

  useEffect(() => {
    const mobile = windowWidth <= 600; // Update the isMobile state when window width changes
    setIsMobile(mobile)
  }, [windowWidth])

  function handleWindowResize(){
    setWindowWidth(window.innerWidth)
  }

  return (
    <>
      <WelcomePage>
      </WelcomePage>
    </>
  );
}

export default App;
