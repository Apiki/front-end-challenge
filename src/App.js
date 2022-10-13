import { Route, Routes } from 'react-router-dom';
import AppProvider from './context/AppProvider';
import Home from './pages/home';
import Post from './pages/post';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route index path='/:slug' element={<Post />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
