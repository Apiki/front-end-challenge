import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import React from 'react';

import banner from '../../assets/images/banner.png';
import Heading from '../Heading';

export default function Hero() {
  return (
    <section className="c-hero">
      <figure className="c-hero__figure">
        <LazyLoadImage
          className="c-hero__image"
          alt="Featured banner"
          effect="blur"
          src={banner}
        />
      </figure>
      <Heading
        title="Tudo o que você precisa saber para aprender Wordpress!"
        subtitle="Aqui você pode encontrar tudo o que deseja como Wordress nativo e headless com diversas integrações com React ou Vue."
      />
    </section>
  );
}
