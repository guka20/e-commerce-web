import React, { useContext, useEffect } from "react";
import { Routers } from "./routers/Routers";
import { LoadingContext } from "./context/loading";
function App() {
  const { loading, setIsLoading } = useContext(LoadingContext);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <Routers />
    </>
  );
}

export default App;
