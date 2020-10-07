import React from 'react';
import facebook from '../../icons/facebook.svg';
import linkedin from '../../icons/linkedin.svg';
import instagram from '../../icons/instagram.svg';
import twitter from '../../icons/twitter.svg';
import youtube from '../../icons/youtube.svg';
import github from '../../icons/github.svg';
import rss from '../../icons/rss.svg';

const icons = {
  facebook,
  linkedin,
  instagram,
  twitter,
  youtube,
  github,
  rss,
};

const linkOficial = {
  facebook: 'https://www.facebook.com/ApikiWordPress',
  linkedin: 'https://www.linkedin.com/company/apiki',
  instagram: 'https://www.instagram.com/apikiwordpress/',
  twitter: 'https://twitter.com/apikiWordPress',
  youtube: 'https://www.youtube.com/channel/UC__ToR3hqjs1ZktdLIWqYFA',
  github: 'https://github.com/Apiki',
  rss: 'https://blog.apiki.com/feed/',
};
export default function Social(props) {
  const { name } = props;
  return (
    <div className="icon-circle">
      <a href={linkOficial[name.toLowerCase()]} target="_blank">
        <img className="icon" src={icons[name.toLowerCase()]} />
        <span className="icon-description">{name}</span>
      </a>
    </div>
  );
}
