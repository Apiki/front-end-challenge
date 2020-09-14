import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Markup } from 'interweave';
import { blogApikiArticleApi } from '../services/blogApikiApi';

const Article = () => {

  const slug = useLocation().pathname.substring(1);

  const articleContent = "<p><b>Lorem ipsum dolor laboriosam.</b> </p><p>Facere debitis impedit doloremque eveniet eligendi reiciendis <u>ratione obcaecati repellendus</u> culpa? Blanditiis enim cum tenetur non rem, atque, earum quis, reprehenderit accusantium iure quas beatae.</p><p>Lorem ipsum dolor sit amet <a href='#testLink'>this is a link, click me</a> Sunt ducimus corrupti? Eveniet velit numquam deleniti, delectus  <ol><li>reiciendis ratione obcaecati</li><li>repellendus culpa? Blanditiis enim</li><li>cum tenetur non rem, atque, earum quis,</li></ol>reprehenderit accusantium iure quas beatae.</p>"

  const [data, setData] = useState([]);

  useEffect(() => {
    blogApikiArticleApi(slug)
    .then((res) => {
      setData(res[0].content.rendered);
      console.log( 'aqui',res[0].content.rendered)
    })
  }, [])

  return (
    <div>
     {/*  < Markup content={data} /> */}
    </div>
     
  );
}

export default Article;
