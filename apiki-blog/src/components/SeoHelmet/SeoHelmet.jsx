import { Helmet } from 'react-helmet-async';
import React from 'react';
const SeoHelmet = ({ title, description, pathSlug, keywords }) => {
  console.log("inside Seo Helmet :", title);
  // const url = `https://malikgabroun.com/${pathSlug}`
  return (
    <Helmet htmlAttributes={{ lang: 'br' }} title={title}

    />
  );
}
export default SeoHelmet;
