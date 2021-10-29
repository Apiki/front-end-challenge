import './styles/global.css';
import { Header } from './components/Header'
import { Content } from './components/Content'
import { LoadButton } from './components/LoadButton'

function App() {
  return (
    <>
      <Header />
      <Content />
      <LoadButton />
    </>
  );
}

export default App;
