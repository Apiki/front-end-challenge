import Home from "./Pages/Home";
import DataProvider from "./Provider/DataContext";

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
