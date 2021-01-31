import { Helmet } from 'react-helmet-async';
import React from 'react';

const SeoHelmet = ({ title, description, pathSlug, keywords }) => {

  const url = `http://localhost:3000/#/${pathSlug}` //MUST be adapt to the Url where the app is deployed

  return (
    <Helmet htmlAttributes={{ lang: 'pt-br' }} title={title} meta={[
      {
        name: 'description',
        content: description,
      },
      // {
      //   name: 'keywords',
      //   content: keywords.join(),
      // },
    ]}
      links={[
        {
          rel: 'canonical',
          href: url,
        },
      ]}
    />
  );
}
export default SeoHelmet;
