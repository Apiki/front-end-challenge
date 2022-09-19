import { useLocalStorage } from "react-use";

function UseGlobalContextProvider() {
  const [slugData, setSlugData] = useLocalStorage('slugData');

  return {
    slugData,
    setSlugData
  };
}

export default UseGlobalContextProvider;