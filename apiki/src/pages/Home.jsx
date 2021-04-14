import CardPost from "../components/CardPost";

const img = 'https://blog.apiki.com/wp-content/uploads/sites/2/2020/10/Como-criar-Web-Stories-no-WordPress-open-graph-150x150.png';

function Home() {
  return (
    <div className="container-home">
      Home

      <CardPost srcImg={img} header='Header 1' link='/post-details' slug="" />
      <CardPost srcImg={img} header='Header 2' link='/post-details' slug=""/>
      <CardPost srcImg={img} header='Header 3' link='/post-details' slug=""/>
      <CardPost srcImg={img} header='Header 4' link='/post-details' slug=""/>
      <CardPost srcImg={img} header='Header 5' link='/post-details' slug=""/>
      <CardPost srcImg={img} header='Header 6' link='/post-details' slug=""/>
      <CardPost srcImg={img} header='Header 7' link='/post-details' slug=""/>
      <CardPost srcImg={img} header='Header 8' link='/post-details' slug=""/>
      <CardPost srcImg={img} header='Header 9' link='/post-details' slug=""/>
      <CardPost srcImg={img} header='Header 10' link='/post-details' slug=""/>
    </div>
  )
};

export default Home;