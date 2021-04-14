import Routes from './routes/routes';
import GlobalStyle from './styles/Global';
import Header from './components/Header/Header';
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes />
    </>
  );
}
export default App;
