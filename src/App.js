import { Route, Routes } from 'react-router-dom';
import AppProvider from './context/AppProvider';
import Home from './pages/home';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route index path='/' element={<Home />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
