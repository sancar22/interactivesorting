import React, { useEffect, useState } from "react";
import Navigation from "./components/navigation/Navigation";

function App() {
  const width = useResponsive();

  return (
    <div style={{ height: "100vh", width: width }}>
      <Navigation />
    </div>
  );
}

export default App;

function useResponsive() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return width;
}
