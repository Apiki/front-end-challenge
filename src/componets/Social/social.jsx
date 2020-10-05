import React from 'react';
import facebook from '../../icons/facebook.svg';
import linkedin from '../../icons/linkedin.svg';
import instagram from '../../icons/instagram.svg';
import twitter from '../../icons/twitter.svg';
import youtube from '../../icons/youtube.svg';
import github from '../../icons/github.svg';
import rss from '../../icons/rss.svg';

const apikiLinks = {
  facebook,
  linkedin,
  instagram,
  twitter,
  youtube,
  github,
  rss,
};

export default function Social(props) {
  const { choosen, name } = props;
  return (
    <div className="icon-circle">
      <a href={apikiLinks[name.toLowerCase()]}>
        <i class={choosen}>
          <span className="icon-description">{name}</span>
        </i>
      </a>
    </div>
  );
}
