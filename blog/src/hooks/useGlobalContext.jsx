import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

function UseGlobalContext() {
  return useContext(GlobalContext);
}

export default UseGlobalContext;