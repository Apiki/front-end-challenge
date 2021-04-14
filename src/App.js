import Card from "./Components/Card";
import DataProvider from "./Provider/DataContext";

function App() {
  return (
    <DataProvider>
      <Card />
    </DataProvider>
  );
}

export default App;
