import GlobalContext from "../GlobalContext";
import UseGlobalContext from "../../hooks/useGlobalContext";

function GlobalContextProvider(props) {
  const valuesProvider = UseGlobalContext();

  return (
    <GlobalContext.Provider value={valuesProvider}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;