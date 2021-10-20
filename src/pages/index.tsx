import Footer from '~/components/Footer';
import Header from '~/components/Header';
import GlobalStyle from '~/styles/global';

export default function Home() {
  return (
    <div>
      <GlobalStyle />
      <div>
        <Header />
        <h1>Test</h1>
      </div>
      <Footer />
    </div>
  );
}
