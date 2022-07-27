import Articles from '../../components/Articles';
import Hero from '../../components/Hero';
import Layout from '../../layout';

export default function Home() {
  return (
    <Layout>
      <section className="container">
        <Hero />
        <Articles />
      </section>
    </Layout>
  );
}
